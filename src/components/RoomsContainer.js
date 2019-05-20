import React from "react";
import RoomFilter from "./RoomsFilter";
import RoomList from "./RoomsList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";
const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            Hello Froms Rooms Container
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomsContainer;
