> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/gethiddescriptorinfo](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/gethiddescriptorinfo)

# getHIDDescriptorInfo

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

## Declaration

```objectivec
kern_return_t getHIDDescriptorInfo(uint8_t type, const IOUSBHostHIDDescriptorInfo **info, uint8_t *index);
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Configuring Private Settings

- [initPipes](initpipes.md)
- [CompleteZLP](completezlp.md)
- [copyStringAtIndex](copystringatindex.md)
