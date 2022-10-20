import React from 'react';
import {FlatList} from 'react-native';
import {observer} from 'mobx-react-lite';
import {Box, Text, Button, IconsIonicons} from '@/library/components';
import {useStores} from '@/store';
import {useEffect} from 'react';
import {PopularItem, ShowingItem} from '../components';

export const Movies = observer(() => {
  const {moviesStore} = useStores();

  useEffect(() => {
    moviesStore.moviesService.popularList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box width="100%" padding="sm" height="100%" backgroundColor="black">
      <Box height="10%" flexDirection="row" justifyContent="space-between">
        <IconsIonicons icon="menu" size={30} />
        <Text color="primary" fontSize={18}>
          FilmKu
        </Text>
        <IconsIonicons icon="notifications-outline" size={24} />
      </Box>

      <Box height="40%">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text color="white" fontSize={18}>
            Now Showing
          </Text>
          <Button
            label="See More"
            onPress={() => {}}
            color="transparent"
            labelColor="white"
            width={100}
          />
        </Box>
        <FlatList
          data={moviesStore.popularList || []}
          horizontal
          renderItem={({item, index}) => (
            <ShowingItem item={item} index={index} />
          )}
          keyExtractor={item => String(item.id)}
        />
      </Box>
      <Box height="60%" padding="sm">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text color="white" fontSize={18}>
            Popular
          </Text>
          <Button
            label="See More"
            onPress={() => {}}
            color="transparent"
            labelColor="white"
            width={100}
          />
        </Box>

        <FlatList
          data={moviesStore.popularList || []}
          renderItem={({item, index}) => (
            <PopularItem item={item} index={index} />
          )}
          keyExtractor={item => String(item.id)}
        />
      </Box>
    </Box>
  );
});
