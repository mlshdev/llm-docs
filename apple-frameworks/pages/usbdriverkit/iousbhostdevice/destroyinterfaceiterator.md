> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/destroyinterfaceiterator](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/destroyinterfaceiterator)

# DestroyInterfaceIterator

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Destroys an interface iterator that you created.

## Declaration

```objectivec
virtual kern_return_t DestroyInterfaceIterator(uintptr_t ref);
```

## Parameters

- `ref`: An opaque iterator reference that you created using the [CreateInterfaceIterator](createinterfaceiterator.md) method.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Iterating Over the Device Interfaces

- [CreateInterfaceIterator](createinterfaceiterator.md): Creates an iterator to get the list of interfaces from the device.
- [CopyInterface](copyinterface.md): Gets the next host interface child associated with this device.
