> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1410373-ioi2csendrequest](https://developer.apple.com/documentation/iokit/1410373-ioi2csendrequest)

# IOI2CSendRequest

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Carries out the I2C transaction specified by an IOI2CRequest structure.

## Declaration

```objectivec
IOReturn IOI2CSendRequest(IOI2CConnectRef connect, IOOptionBits options, IOI2CRequest *request);
```

## Parameters

- `connect`: The opaque IOI2CConnectRef returned by IOI2CInterfaceOpen().
- `options`: Pass kNilOptions.
- `request`: Pass a pointer to a IOI2CRequest structure describing the request. If an asynchronous request (with a non-NULL completion routine) the request structure must be valid for the life of the request.

<a id="return_value"></a>

## Return Value

An IOReturn code reflecting only the result of starting the transaction. If the result of IOI2CSendRequest() is kIOReturnSuccess, the I2C transaction result is returned in the result field of the request structure.

<a id="discussion"></a>

## Discussion

Frees the resources associated with an IOI2CConnectRef.

## See Also

### Miscellaneous

- [IOFBCopyI2CInterfaceForBus](1410345-iofbcopyi2cinterfaceforbus.md): Returns an instance of an I2C bus interface, associated with an IOFramebuffer instance / bus index pair.
- [IOFBGetI2CInterfaceCount](1410333-iofbgeti2cinterfacecount.md): Returns a count of I2C interfaces available associated with an IOFramebuffer instance.
- [IOI2CInterfaceClose](1410390-ioi2cinterfaceclose.md): Closes an IOI2CConnectRef.
- [IOI2CInterfaceOpen](1410388-ioi2cinterfaceopen.md): Opens an instance of an I2C bus interface, allowing I2C requests to be made.
