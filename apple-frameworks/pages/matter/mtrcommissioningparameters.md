> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningparameters](https://developer.apple.com/documentation/matter/mtrcommissioningparameters)

# MTRCommissioningParameters (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRCommissioningParameters
```

## Topics

### Instance Properties

- [attestationNonce](mtrcommissioningparameters/attestationnonce.md)
- [countryCode](mtrcommissioningparameters/countrycode.md)
- [csrNonce](mtrcommissioningparameters/csrnonce-9eaxq.md): Deprecated.
- [deviceAttestationDelegate](mtrcommissioningparameters/deviceattestationdelegate.md)
- [failSafeExpiryTimeoutSecs](mtrcommissioningparameters/failsafeexpirytimeoutsecs.md): Deprecated.
- [failSafeTimeout](mtrcommissioningparameters/failsafetimeout.md)
- [skipCommissioningComplete](mtrcommissioningparameters/skipcommissioningcomplete.md)
- [threadOperationalDataset](mtrcommissioningparameters/threadoperationaldataset.md)
- [wifiCredentials](mtrcommissioningparameters/wificredentials.md)
- [wifiSSID](mtrcommissioningparameters/wifissid.md)
- [csrNonce](mtrcommissioningparameters/csrnonce-8gx94.md)
- [extraAttributesToRead](mtrcommissioningparameters/extraattributestoread.md): List of attribute paths to read from the commissionee (in addition to whatever attributes are already read to handle readEndpointInformation being YES, or to handle other commissioning tasks).
- [forceThreadScan](mtrcommissioningparameters/forcethreadscan.md): Whether to force a network scan before requesting Thread credentials. The default is NO.
- [forceWiFiScan](mtrcommissioningparameters/forcewifiscan.md): Whether to force a network scan before requesting Wi-Fi credentials. The default is NO.
- [readEndpointInformation](mtrcommissioningparameters/readendpointinformation.md): Read device type information from all endpoints during commissioning. Defaults to NO.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRCommissioningParameters (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRCommissioningParameters : NSObject
```

## Topics

### Instance Properties

- [attestationNonce](mtrcommissioningparameters/attestationnonce.md)
- [countryCode](mtrcommissioningparameters/countrycode.md)
- [CSRNonce](mtrcommissioningparameters/csrnonce-9eaxq.md): Deprecated.
- [deviceAttestationDelegate](mtrcommissioningparameters/deviceattestationdelegate.md)
- [failSafeExpiryTimeoutSecs](mtrcommissioningparameters/failsafeexpirytimeoutsecs.md): Deprecated.
- [failSafeTimeout](mtrcommissioningparameters/failsafetimeout.md)
- [skipCommissioningComplete](mtrcommissioningparameters/skipcommissioningcomplete.md)
- [threadOperationalDataset](mtrcommissioningparameters/threadoperationaldataset.md)
- [wifiCredentials](mtrcommissioningparameters/wificredentials.md)
- [wifiSSID](mtrcommissioningparameters/wifissid.md)
- [csrNonce](mtrcommissioningparameters/csrnonce-8gx94.md)
- [extraAttributesToRead](mtrcommissioningparameters/extraattributestoread.md): List of attribute paths to read from the commissionee (in addition to whatever attributes are already read to handle readEndpointInformation being YES, or to handle other commissioning tasks).
- [forceThreadScan](mtrcommissioningparameters/forcethreadscan.md): Whether to force a network scan before requesting Thread credentials. The default is NO.
- [forceWiFiScan](mtrcommissioningparameters/forcewifiscan.md): Whether to force a network scan before requesting Wi-Fi credentials. The default is NO.
- [readEndpointInformation](mtrcommissioningparameters/readendpointinformation.md): Read device type information from all endpoints during commissioning. Defaults to NO.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
