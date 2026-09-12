> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcarrier/mobilecountrycode](https://developer.apple.com/documentation/coretelephony/ctcarrier/mobilecountrycode)

# mobileCountryCode (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

The mobile country code (MCC) for the user’s cellular service provider.

> Deprecated; returns '65535' at some point in the future

## Declaration

```swift
var mobileCountryCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

A read-only [NSString](../../foundation/nsstring.md) object that contains the numeric mobile country code for the user’s cellular service provider. MCCs are defined by ITU-T Recommendation E.212, “List of Mobile Country or Geographical Area Codes”. Typing this property as an [NSString](../../foundation/nsstring.md) object, rather than a number type, preserves leading zeroes in MCCs.

The value for this property is `nil` if any of the following apply:

- There is no SIM card in the device.
- The device is outside of cellular service range.

The value may be `nil` on hardware prior to iPhone 4S when in airplane mode.

## See Also

### Getting Information About the Cellular Service Provider

- [allowsVOIP](allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [carrierName](carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [isoCountryCode](isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileNetworkCode](mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.

# mobileCountryCode (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

The mobile country code (MCC) for the user’s cellular service provider.

> Deprecated; returns '65535' at some point in the future

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSString * mobileCountryCode;
```

<a id="Discussion"></a>

## Discussion

A read-only [NSString](../../foundation/nsstring.md) object that contains the numeric mobile country code for the user’s cellular service provider. MCCs are defined by ITU-T Recommendation E.212, “List of Mobile Country or Geographical Area Codes”. Typing this property as an [NSString](../../foundation/nsstring.md) object, rather than a number type, preserves leading zeroes in MCCs.

The value for this property is `nil` if any of the following apply:

- There is no SIM card in the device.
- The device is outside of cellular service range.

The value may be `nil` on hardware prior to iPhone 4S when in airplane mode.

## See Also

### Getting Information About the Cellular Service Provider

- [allowsVOIP](allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [carrierName](carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [isoCountryCode](isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileNetworkCode](mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.
