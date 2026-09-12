> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevice/delegate](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevice/delegate)

# delegate (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The device’s delegate.

## Declaration

```swift
weak var delegate: (any VZCustomVirtioDeviceDelegate)? { get set }
```

<a id="discussion"></a>

## Discussion

To be able to respond to events from a [VZCustomVirtioDevice](../vzcustomvirtiodevice.md), implement a class that conforms to the [VZCustomVirtioDeviceDelegate](../vzcustomvirtiodevicedelegate.md) protocol and assign it to this property. You can call the delegate as soon as [customVirtioConfiguration(\_:didCreateDevice:)](../vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md) returns, to avoid missing any calls, set this delegate when the framework calls [customVirtioConfiguration(\_:didCreateDevice:)](../vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md).

# delegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The device’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<VZCustomVirtioDeviceDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

To be able to respond to events from a [VZCustomVirtioDevice](../vzcustomvirtiodevice.md), implement a class that conforms to the [VZCustomVirtioDeviceDelegate](../vzcustomvirtiodevicedelegate.md) protocol and assign it to this property. You can call the delegate as soon as [customVirtioConfiguration:didCreateDevice:](../vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md) returns, to avoid missing any calls, set this delegate when the framework calls [customVirtioConfiguration:didCreateDevice:](../vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md).
