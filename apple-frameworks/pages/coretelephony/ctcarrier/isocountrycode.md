> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcarrier/isocountrycode](https://developer.apple.com/documentation/coretelephony/ctcarrier/isocountrycode)

# isoCountryCode (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

The ISO country code for the user’s cellular service provider.

> Deprecated; returns '--' at some point in the future

## Declaration

```swift
var isoCountryCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property uses the ISO 3166-1 country code representation.

The value for this property is `nil` if any of the following apply:

- The device is in airplane mode.
- There is no SIM card in the device.
- The device is outside of cellular service range.

## See Also

### Getting Information About the Cellular Service Provider

- [allowsVOIP](allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [carrierName](carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [mobileCountryCode](mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.
- [mobileNetworkCode](mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.

# isoCountryCode (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

The ISO country code for the user’s cellular service provider.

> Deprecated; returns '--' at some point in the future

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSString * isoCountryCode;
```

<a id="Discussion"></a>

## Discussion

This property uses the ISO 3166-1 country code representation.

The value for this property is `nil` if any of the following apply:

- The device is in airplane mode.
- There is no SIM card in the device.
- The device is outside of cellular service range.

## See Also

### Getting Information About the Cellular Service Provider

- [allowsVOIP](allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [carrierName](carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [mobileCountryCode](mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.
- [mobileNetworkCode](mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.
