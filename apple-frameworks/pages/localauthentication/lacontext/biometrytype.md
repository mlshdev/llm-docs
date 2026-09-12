> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacontext/biometrytype](https://developer.apple.com/documentation/localauthentication/lacontext/biometrytype)

# biometryType (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · visionOS 1.0+ · watchOS 11.0+

The type of biometric authentication supported by the device.

## Declaration

```swift
var biometryType: LABiometryType { get }
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to ensure that any authentication-related user prompts you create match the biometric capabilities of the device. For example, if the value of this property is [LABiometryType.faceID](../labiometrytype/faceid.md), don’t refer to Touch ID in an authentication prompt.

This property is set only after you call the [canEvaluatePolicy(\_:error:)](canevaluatepolicy%28__error_%29.md) method, and is set no matter what the call returns. The default value is [LABiometryType.none](../labiometrytype/none.md).

## See Also

### Checking availability

- [canEvaluatePolicy(\_:error:)](canevaluatepolicy%28__error_%29.md): Assesses whether authentication can proceed for a given policy.
- [LAPolicy](../lapolicy.md): The set of available local authentication policies.
- [LABiometryType](../labiometrytype.md): The set of available biometric authentication types.

# biometryType (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · visionOS 1.0+ · watchOS 11.0+

The type of biometric authentication supported by the device.

## Declaration

```objectivec
@property (nonatomic, readonly) LABiometryType biometryType;
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to ensure that any authentication-related user prompts you create match the biometric capabilities of the device. For example, if the value of this property is [LABiometryTypeFaceID](../labiometrytype/faceid.md), don’t refer to Touch ID in an authentication prompt.

This property is set only after you call the [canEvaluatePolicy:error:](canevaluatepolicy%28__error_%29.md) method, and is set no matter what the call returns. The default value is [LABiometryTypeNone](../labiometrytype/none.md).

## See Also

### Checking availability

- [canEvaluatePolicy:error:](canevaluatepolicy%28__error_%29.md): Assesses whether authentication can proceed for a given policy.
- [LAPolicy](../lapolicy.md): The set of available local authentication policies.
- [LABiometryType](../labiometrytype.md): The set of available biometric authentication types.
