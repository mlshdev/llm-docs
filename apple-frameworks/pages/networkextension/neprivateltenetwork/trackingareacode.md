> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprivateltenetwork/trackingareacode](https://developer.apple.com/documentation/networkextension/neprivateltenetwork/trackingareacode)

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
