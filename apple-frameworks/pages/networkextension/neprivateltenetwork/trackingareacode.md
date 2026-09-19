> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neprivateltenetwork/trackingareacode

# trackingAreaCode (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The Tracking Area Code of the private LTE network.

## Declaration

```swift
var trackingAreaCode: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is only applicable for band 48 private LTE networks.

## See Also

### Accessing network properties

- [mobileCountryCode](mobilecountrycode.md): The Mobile Country Code (MCC) of the private LTE network.
- [mobileNetworkCode](mobilenetworkcode.md): The Mobile Network Code (MNC) of the private LTE network.

# trackingAreaCode (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The Tracking Area Code of the private LTE network.

## Declaration

```objectivec
@property (copy, nullable) NSString * trackingAreaCode;
```

<a id="Discussion"></a>

## Discussion

This property is only applicable for band 48 private LTE networks.

## See Also

### Accessing network properties

- [mobileCountryCode](mobilecountrycode.md): The Mobile Country Code (MCC) of the private LTE network.
- [mobileNetworkCode](mobilenetworkcode.md): The Mobile Network Code (MNC) of the private LTE network.
