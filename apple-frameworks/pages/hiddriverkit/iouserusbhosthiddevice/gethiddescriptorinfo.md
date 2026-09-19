> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/gethiddescriptorinfo

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
