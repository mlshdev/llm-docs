> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1410333-iofbgeti2cinterfacecount](https://developer.apple.com/documentation/iokit/1410333-iofbgeti2cinterfacecount)

# IOFBGetI2CInterfaceCount

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Returns a count of I2C interfaces available associated with an IOFramebuffer instance.

## Declaration

```objectivec
IOReturn IOFBGetI2CInterfaceCount(io_service_t framebuffer, IOItemCount *count);
```

## Parameters

- `framebuffer`: The io_service_t of an IOFramebuffer instance. CoreGraphics will provide this for a CGDisplay with the CGDisplayIOServicePort() call.
- `count`: Interface count is returned.

<a id="return_value"></a>

## Return Value

An IOReturn code.

<a id="discussion"></a>

## Discussion

Returns a count of I2C interfaces available associated with an IOFramebuffer instance.

## See Also

### Miscellaneous

- [IOFBCopyI2CInterfaceForBus](1410345-iofbcopyi2cinterfaceforbus.md): Returns an instance of an I2C bus interface, associated with an IOFramebuffer instance / bus index pair.
- [IOI2CInterfaceClose](1410390-ioi2cinterfaceclose.md): Closes an IOI2CConnectRef.
- [IOI2CInterfaceOpen](1410388-ioi2cinterfaceopen.md): Opens an instance of an I2C bus interface, allowing I2C requests to be made.
- [IOI2CSendRequest](1410373-ioi2csendrequest.md): Carries out the I2C transaction specified by an IOI2CRequest structure.
