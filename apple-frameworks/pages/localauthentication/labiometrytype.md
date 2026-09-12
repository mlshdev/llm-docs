> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/labiometrytype](https://developer.apple.com/documentation/localauthentication/labiometrytype)

# LABiometryType (Swift)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · visionOS 1.0+ · watchOS 11.0+

The set of available biometric authentication types.

## Declaration

```swift
enum LABiometryType
```

## Topics

### Types

- [LABiometryType.none](labiometrytype/none.md): No biometry type is supported.
- [LABiometryType.faceID](labiometrytype/faceid.md): The device supports Face ID.
- [LABiometryType.touchID](labiometrytype/touchid.md): The device supports Touch ID.
- [LABiometryType.opticID](labiometrytype/opticid.md): The device supports Optic ID.

### Legacy Types

- [LABiometryNone](labiometrytype/labiometrynone.md): Deprecated. No biometry type is supported.

### Initializers

- [init(rawValue:)](labiometrytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking availability

- [canEvaluatePolicy(\_:error:)](lacontext/canevaluatepolicy%28__error_%29.md): Assesses whether authentication can proceed for a given policy.
- [LAPolicy](lapolicy.md): The set of available local authentication policies.
- [biometryType](lacontext/biometrytype.md): The type of biometric authentication supported by the device.

# LABiometryType (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · visionOS 1.0+ · watchOS 11.0+

The set of available biometric authentication types.

## Declaration

```objectivec
enum LABiometryType : NSInteger;
```

## Topics

### Types

- [LABiometryTypeNone](labiometrytype/none.md): No biometry type is supported.
- [LABiometryTypeFaceID](labiometrytype/faceid.md): The device supports Face ID.
- [LABiometryTypeTouchID](labiometrytype/touchid.md): The device supports Touch ID.
- [LABiometryTypeOpticID](labiometrytype/opticid.md): The device supports Optic ID.

### Legacy Types

- [LABiometryNone](labiometrytype/labiometrynone.md): Deprecated. No biometry type is supported.

## See Also

### Checking availability

- [canEvaluatePolicy:error:](lacontext/canevaluatepolicy%28__error_%29.md): Assesses whether authentication can proceed for a given policy.
- [LAPolicy](lapolicy.md): The set of available local authentication policies.
- [biometryType](lacontext/biometrytype.md): The type of biometric authentication supported by the device.
