> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1572703-ionetworksetpacketfiltersmask](https://developer.apple.com/documentation/iokit/1572703-ionetworksetpacketfiltersmask)

# IONetworkSetPacketFiltersMask

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Set the packet filters for a given filter group.

## Declaration

```objectivec
IOReturn IONetworkSetPacketFiltersMask(io_connect_t connect, const io_name_t filterGroup, UInt32 filtersMask, IOOptionBits options);
```

## Parameters

- `connect`: The connection object returned from IONetworkOpen().
- `filterGroup`: The name of the packet filter group.
- `filtersMask`: A mask of filters to set.
- `options`: No options are currently defined.

<a id="return_value"></a>

## Return Value

An IOReturn error code.

<a id="discussion"></a>

## Discussion

A network controller may support a number of packets filters that can accept or reject a type of packet seen on the network. A filter group identifies a set of related filters, such as all filters that will allow a packet to pass upstream based on the destination address encoded within the packet. This function allows an user-space program to set the filtering performed by a given filter group.

## See Also

### Miscellaneous

- [IONetworkClose](1572704-ionetworkclose.md): Close the connection to an IONetworkInterface object.
- [IONetworkGetDataCapacity](1572712-ionetworkgetdatacapacity.md): Get the capacity (in bytes) of a network data object.
- [IONetworkGetDataHandle](1572708-ionetworkgetdatahandle.md): Get the handle of a network data object with the given name.
- [IONetworkGetPacketFiltersMask](1572711-ionetworkgetpacketfiltersmask.md): Get the packet filters for a given filter group.
- [IONetworkOpen](1572709-ionetworkopen.md): Open a connection to an IONetworkInterface object. An IONetworkUserClient object is created to manage the connection.
- [IONetworkReadData](1572706-ionetworkreaddata.md): Read the buffer of a network data object.
- [IONetworkResetData](1572710-ionetworkresetdata.md): Fill the buffer of a network data object with zeroes.
- [IONetworkWriteData](1572707-ionetworkwritedata.md): Write to the buffer of a network data object.
