> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcarrier/mobilenetworkcode](https://developer.apple.com/documentation/coretelephony/ctcarrier/mobilenetworkcode)

# mobileNetworkCode (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

The mobile network code for the user’s cellular service provider.

> Deprecated; returns '65535' at some point in the future

## Declaration

```swift
var mobileNetworkCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

A read-only [NSString](../../foundation/nsstring.md) object that represents the numeric mobile network code (MNC) for the user’s cellular service provider. Typing this property as an [NSString](../../foundation/nsstring.md) object, rather than a number type, preserves leading zeroes in MNCs.

The value for this property is `nil` if any of the following apply:

- There is no SIM card in the device.
- The device is outside of cellular service range.

The value may be `nil` on hardware prior to iPhone 4S when in airplane mode.

## See Also

### Getting Information About the Cellular Service Provider

- [allowsVOIP](allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [carrierName](carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [isoCountryCode](isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileCountryCode](mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.

# mobileNetworkCode (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

The mobile network code for the user’s cellular service provider.

> Deprecated; returns '65535' at some point in the future

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSString * mobileNetworkCode;
```

<a id="Discussion"></a>

## Discussion

A read-only [NSString](../../foundation/nsstring.md) object that represents the numeric mobile network code (MNC) for the user’s cellular service provider. Typing this property as an [NSString](../../foundation/nsstring.md) object, rather than a number type, preserves leading zeroes in MNCs.

The value for this property is `nil` if any of the following apply:

- There is no SIM card in the device.
- The device is outside of cellular service range.

The value may be `nil` on hardware prior to iPhone 4S when in airplane mode.

## See Also

### Getting Information About the Cellular Service Provider

- [allowsVOIP](allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [carrierName](carriername.md): Deprecated. The name of the user’s home cellular service provider.
- [isoCountryCode](isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileCountryCode](mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.
