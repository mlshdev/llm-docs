> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcarrier/allowsvoip](https://developer.apple.com/documentation/coretelephony/ctcarrier/allowsvoip)

# allowsVOIP (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

Indicates if the carrier allows making VoIP calls on its network.

> Deprecated; returns YES at some point in the future

## Declaration

```swift
var allowsVOIP: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A read-only Boolean value that is [true](https://developer.apple.com/documentation/swift/true) if the carrier allows making VoIP calls on its network, or [false](https://developer.apple.com/documentation/swift/false) if not.

If you configure a device for a carrier and then remove the SIM card, this property retains the Boolean value indicating the carrier’s policy regarding VoIP. If you then install a new SIM card, its VoIP policy Boolean replaces the previous value of this property.

## See Also

### Getting Information About the Cellular Service Provider

- [carrierName](carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [isoCountryCode](isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileCountryCode](mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.
- [mobileNetworkCode](mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.

# allowsVOIP (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

Indicates if the carrier allows making VoIP calls on its network.

> Deprecated; returns YES at some point in the future

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL allowsVOIP;
```

<a id="Discussion"></a>

## Discussion

A read-only Boolean value that is [true](https://developer.apple.com/documentation/swift/true) if the carrier allows making VoIP calls on its network, or [false](https://developer.apple.com/documentation/swift/false) if not.

If you configure a device for a carrier and then remove the SIM card, this property retains the Boolean value indicating the carrier’s policy regarding VoIP. If you then install a new SIM card, its VoIP policy Boolean replaces the previous value of this property.

## See Also

### Getting Information About the Cellular Service Provider

- [carrierName](carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [isoCountryCode](isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileCountryCode](mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.
- [mobileNetworkCode](mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.
