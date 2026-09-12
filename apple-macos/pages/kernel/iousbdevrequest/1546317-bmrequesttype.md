> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevrequest/1546317-bmrequesttype](https://developer.apple.com/documentation/kernel/iousbdevrequest/1546317-bmrequesttype)

# bmRequestType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The type of the request.

## Declaration

```objectivec
UInt8 bmRequestType;
```

## See Also

### Getting the Properties

- [bRequest](1546404-brequest.md): The request code.
- [wValue](1546433-wvalue.md): The 16-bit parameter for the request.
- [wIndex](1546579-windex.md): The 16-bit parameter for the request.
- [wLength](1545928-wlength.md): The length of the data part of the request.
- [pData](1546431-pdata.md): The pointer to the data for the request.
- [wLenDone](1546308-wlendone.md): The number of data bytes that the system actually transferred.
