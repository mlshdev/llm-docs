> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevice/negotiatedfeatures](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevice/negotiatedfeatures)

# negotiatedFeatures (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The set of features that the driver and the device have successfully negotiated, or `nil` if no feature negotiation has taken place.

## Declaration

```swift
var negotiatedFeatures: VZNegotiatedVirtioFeatureSet? { get }
```

<a id="discussion"></a>

## Discussion

The value is only valid after the framework calls [customVirtioDeviceDidAcceptDriverOk(\_:)](../vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok%28__%29.md). The framework calls this method when the guest driver sets `DRIVER_OK`.

# negotiatedFeatures (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The set of features that the driver and the device have successfully negotiated, or `nil` if no feature negotiation has taken place.

## Declaration

```objectivec
@property (readonly, nullable) VZNegotiatedVirtioFeatureSet * negotiatedFeatures;
```

<a id="discussion"></a>

## Discussion

The value is only valid after the framework calls [customVirtioDeviceDidAcceptDriverOk:](../vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok%28__%29.md). The framework calls this method when the guest driver sets `DRIVER_OK`.
