> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkdevice/attachment](https://developer.apple.com/documentation/virtualization/vznetworkdevice/attachment)

# attachment (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The network attachment that’s connected to this network device.

## Declaration

```swift
var attachment: VZNetworkDeviceAttachment? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property results in an attempt to change the network device attachment which may fail. If the devices fails to attach, the system invokes [virtualMachine(\_:networkDevice:attachmentWasDisconnectedWithError:)](../vzvirtualmachinedelegate/virtualmachine%28__networkdevice_attachmentwasdisconnectedwitherror_%29.md) and sets this property to `nil`. This property may change at any time while the VM is running based on the state of the host network.

# attachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The network attachment that’s connected to this network device.

## Declaration

```objectivec
@property (strong, nullable) VZNetworkDeviceAttachment * attachment;
```

<a id="Discussion"></a>

## Discussion

Setting this property results in an attempt to change the network device attachment which may fail. If the devices fails to attach, the system invokes [virtualMachine:networkDevice:attachmentWasDisconnectedWithError:](../vzvirtualmachinedelegate/virtualmachine%28__networkdevice_attachmentwasdisconnectedwitherror_%29.md) and sets this property to `nil`. This property may change at any time while the VM is running based on the state of the host network.
