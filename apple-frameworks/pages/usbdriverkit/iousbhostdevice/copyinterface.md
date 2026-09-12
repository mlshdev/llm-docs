> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/copyinterface](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/copyinterface)

# CopyInterface

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Gets the next host interface child associated with this device.

## Declaration

```objectivec
virtual kern_return_t CopyInterface(uintptr_t ref, IOUSBHostInterface **interface);
```

## Parameters

- `ref`: The opaque iterator reference you received from the [CreateInterfaceIterator](createinterfaceiterator.md) method.
- `interface`: A pointer to a variable. On output, this variable contains a pointer to the next [IOUSBHostInterface](../iousbhostinterface.md) object. When there are no more iterfaces, this method assigns `NULL` to the variable.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Keep calling this method until the value in the interface parameter is `NULL`.

## See Also

### Iterating Over the Device Interfaces

- [CreateInterfaceIterator](createinterfaceiterator.md): Creates an iterator to get the list of interfaces from the device.
- [DestroyInterfaceIterator](destroyinterfaceiterator.md): Destroys an interface iterator that you created.
