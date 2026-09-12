> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcarrier/carriername](https://developer.apple.com/documentation/coretelephony/ctcarrier/carriername)

# carrierName (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

The name of the user’s home cellular service provider.

> Deprecated; returns '--' at some point in the future

## Declaration

```swift
var carrierName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The carrier provides this string, formatting it for presentation to the user. The value does not change if the user is roaming; it always represents the provider with which the user has an account.

If you configure a device for a carrier and then remove the SIM card, this property retains the name of the carrier. If you then install a new SIM card, its carrier name replaces the previous value of this property.

The value for this property is `nil` if the user never configured a carrier for the device.

## See Also

### Getting Information About the Cellular Service Provider

- [allowsVOIP](allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [isoCountryCode](isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileCountryCode](mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.
- [mobileNetworkCode](mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.

# carrierName (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

The name of the user’s home cellular service provider.

> Deprecated; returns '--' at some point in the future

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSString * carrierName;
```

<a id="Discussion"></a>

## Discussion

The carrier provides this string, formatting it for presentation to the user. The value does not change if the user is roaming; it always represents the provider with which the user has an account.

If you configure a device for a carrier and then remove the SIM card, this property retains the name of the carrier. If you then install a new SIM card, its carrier name replaces the previous value of this property.

The value for this property is `nil` if the user never configured a carrier for the device.

## See Also

### Getting Information About the Cellular Service Provider

- [allowsVOIP](allowsvoip.md): Deprecated. Indicates if the carrier allows making VoIP calls on its network.
- [isoCountryCode](isocountrycode.md): Deprecated. The ISO country code for the user’s cellular service provider.
- [mobileCountryCode](mobilecountrycode.md): Deprecated. The mobile country code (MCC) for the user’s cellular service provider.
- [mobileNetworkCode](mobilenetworkcode.md): Deprecated. The mobile network code for the user’s cellular service provider.
