> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1572712-ionetworkgetdatacapacity](https://developer.apple.com/documentation/iokit/1572712-ionetworkgetdatacapacity)

# IONetworkGetDataCapacity

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Get the capacity (in bytes) of a network data object.

## Declaration

```objectivec
IOReturn IONetworkGetDataCapacity(io_connect_t conObject, IONDHandle dataHandle, UInt32 *capacityP);
```

## Parameters

- `conObject`: The connection object.
- `dataHandle`: The handle of a network data object.
- `capacityP`: Upon success, the capacity is written to this address.

<a id="return_value"></a>

## Return Value

kIOReturnSuccess on success, or an error code otherwise.

## See Also

### Miscellaneous

- [IONetworkClose](1572704-ionetworkclose.md): Close the connection to an IONetworkInterface object.
- [IONetworkGetDataHandle](1572708-ionetworkgetdatahandle.md): Get the handle of a network data object with the given name.
- [IONetworkGetPacketFiltersMask](1572711-ionetworkgetpacketfiltersmask.md): Get the packet filters for a given filter group.
- [IONetworkOpen](1572709-ionetworkopen.md): Open a connection to an IONetworkInterface object. An IONetworkUserClient object is created to manage the connection.
- [IONetworkReadData](1572706-ionetworkreaddata.md): Read the buffer of a network data object.
- [IONetworkResetData](1572710-ionetworkresetdata.md): Fill the buffer of a network data object with zeroes.
- [IONetworkSetPacketFiltersMask](1572703-ionetworksetpacketfiltersmask.md): Set the packet filters for a given filter group.
- [IONetworkWriteData](1572707-ionetworkwritedata.md): Write to the buffer of a network data object.
