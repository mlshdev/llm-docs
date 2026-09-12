> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevreqoolto/1546099-brequest](https://developer.apple.com/documentation/kernel/iousbdevreqoolto/1546099-brequest)

# bRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.1+

The request code.

## Declaration

```objectivec
UInt8 bRequest;
```

## See Also

### Getting the Properties

- [bmRequestType](1546443-bmrequesttype.md): The type of the request.
- [wValue](1546109-wvalue.md): The 16-bit parameter for the request.
- [wIndex](1545920-windex.md): The 16-bit parameter for the request.
- [wLength](1546286-wlength.md): The length of the data part of the request.
- [pData](1546044-pdata.md): The pointer to the data for the request.
- [wLenDone](1546113-wlendone.md): The number of data bytes that the system actually transferred.
- [pipeRef](1546157-piperef.md): A reference to the USB pipe.
- [completionTimeout](1546368-completiontimeout.md): The value of the completion timeout in milliseconds.
- [noDataTimeout](1546132-nodatatimeout.md): The value of the completion timeout in milliseconds if there’s no data.
