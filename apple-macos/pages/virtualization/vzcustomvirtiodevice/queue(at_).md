> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevice/queue(at:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevice/queue(at:))

# queue(at:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns Virtio queue at the specified index that belongs to this device.

## Declaration

```swift
func queue(at index: UInt16) -> VZVirtioQueue?
```

## Parameters

- `index`: The index of the [VZVirtioQueue](../vzvirtioqueue.md).

<a id="return-value"></a>

## Return Value

The [VZVirtioQueue](../vzvirtioqueue.md) object at the specified index, or `nil` if the index is invalid or the guest driver has disabled the queue.

<a id="discussion"></a>

## Discussion

The framework sets up the virtqueues (Virtio queues) when the guest driver sets `DRIVER_OK`; this call returns a valid result only after the framework calls [customVirtioDeviceDidAcceptDriverOk(\_:)](../vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok%28__%29.md).

# queueAtIndex: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns Virtio queue at the specified index that belongs to this device.

## Declaration

```objectivec
- (VZVirtioQueue *) queueAtIndex:(uint16_t) index;
```

## Parameters

- `index`: The index of the [VZVirtioQueue](../vzvirtioqueue.md).

<a id="return-value"></a>

## Return Value

The [VZVirtioQueue](../vzvirtioqueue.md) object at the specified index, or `nil` if the index is invalid or the guest driver has disabled the queue.

<a id="discussion"></a>

## Discussion

The framework sets up the virtqueues (Virtio queues) when the guest driver sets `DRIVER_OK`; this call returns a valid result only after the framework calls [customVirtioDeviceDidAcceptDriverOk:](../vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok%28__%29.md).
