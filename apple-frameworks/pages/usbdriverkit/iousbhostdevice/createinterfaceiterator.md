> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/createinterfaceiterator](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/createinterfaceiterator)

# CreateInterfaceIterator

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Creates an iterator to get the list of interfaces from the device.

## Declaration

```objectivec
virtual kern_return_t CreateInterfaceIterator(uintptr_t *ref);
```

## Parameters

- `ref`: A pointer to a variable. On return, this variable contains an opaque iterator reference.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to create an iterator for the [IOUSBHostInterface](../iousbhostinterface.md) children belonging to this device. Pass the value you receive in the `ref` parameter to the [CopyInterface](copyinterface.md) method when fetching the interfaces.

## See Also

### Iterating Over the Device Interfaces

- [CopyInterface](copyinterface.md): Gets the next host interface child associated with this device.
- [DestroyInterfaceIterator](destroyinterfaceiterator.md): Destroys an interface iterator that you created.
