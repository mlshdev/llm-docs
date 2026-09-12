> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1410390-ioi2cinterfaceclose](https://developer.apple.com/documentation/iokit/1410390-ioi2cinterfaceclose)

# IOI2CInterfaceClose

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Closes an IOI2CConnectRef.

## Declaration

```objectivec
IOReturn IOI2CInterfaceClose(IOI2CConnectRef connect, IOOptionBits options);
```

## Parameters

- `connect`: The opaque IOI2CConnectRef returned by IOI2CInterfaceOpen().
- `options`: Pass kNilOptions.

<a id="return_value"></a>

## Return Value

An IOReturn code.

<a id="discussion"></a>

## Discussion

Frees the resources associated with an IOI2CConnectRef.

## See Also

### Miscellaneous

- [IOFBCopyI2CInterfaceForBus](1410345-iofbcopyi2cinterfaceforbus.md): Returns an instance of an I2C bus interface, associated with an IOFramebuffer instance / bus index pair.
- [IOFBGetI2CInterfaceCount](1410333-iofbgeti2cinterfacecount.md): Returns a count of I2C interfaces available associated with an IOFramebuffer instance.
- [IOI2CInterfaceOpen](1410388-ioi2cinterfaceopen.md): Opens an instance of an I2C bus interface, allowing I2C requests to be made.
- [IOI2CSendRequest](1410373-ioi2csendrequest.md): Carries out the I2C transaction specified by an IOI2CRequest structure.
