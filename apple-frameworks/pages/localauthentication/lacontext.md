> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacontext](https://developer.apple.com/documentation/localauthentication/lacontext)

# LAContext (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

A mechanism for evaluating authentication policies and access controls.

## Declaration

```swift
class LAContext
```

<a id="overview"></a>

## Overview

You use an authentication context to evaluate the user’s identity, either with biometrics like Touch ID or Face ID, or by supplying the device passcode. The context handles user interaction, and also interfaces to the Secure Enclave, the underlying hardware element that manages biometric data. You create and configure the context, and ask it to carry out the authentication. You then receive an asynchronous callback, which provides an indication of authentication success or failure, and an error instance that explains the reason for a failure, if any.

> **Important**

>  Include the [NSFaceIDUsageDescription](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW75) key in your app’s `Info.plist` file if your app allows biometric authentication. Otherwise, authorization requests may fail.

## Topics

### Checking availability

- [canEvaluatePolicy(\_:error:)](lacontext/canevaluatepolicy%28__error_%29.md): Assesses whether authentication can proceed for a given policy.
- [LAPolicy](lapolicy.md): The set of available local authentication policies.
- [biometryType](lacontext/biometrytype.md): The type of biometric authentication supported by the device.
- [LABiometryType](labiometrytype.md): The set of available biometric authentication types.

### Evaluating authentication policies

- [evaluatePolicy(\_:localizedReason:reply:)](lacontext/evaluatepolicy%28__localizedreason_reply_%29.md): Evaluates the specified policy.
- [evaluatedPolicyDomainState](lacontext/evaluatedpolicydomainstate.md): Deprecated. The current state of the evaluated policy domain.
- [maxBiometryFailures](lacontext/maxbiometryfailures.md): Deprecated. The number of biometric authentication failures after which the context falls back to another mechanism.

### Evaluating access controls

- [evaluateAccessControl(\_:operation:localizedReason:reply:)](lacontext/evaluateaccesscontrol%28__operation_localizedreason_reply_%29.md): Evaluates an access control for a given operation.
- [LAAccessControlOperation](laaccesscontroloperation.md): Operations to be evaluated for access control.
- [interactionNotAllowed](lacontext/interactionnotallowed.md): A Boolean value indicating whether authentication can be interactive.

### Customizing authentication prompts

- [localizedReason](lacontext/localizedreason.md): The localized explanation for authentication shown in the dialog presented to the user.
- [localizedFallbackTitle](lacontext/localizedfallbacktitle.md): The localized title for the fallback button in the dialog presented to the user during authentication.
- [localizedCancelTitle](lacontext/localizedcanceltitle.md): The localized title for the cancel button in the dialog presented to the user during authentication.

### Reusing device unlock state

- [touchIDAuthenticationAllowableReuseDuration](lacontext/touchidauthenticationallowablereuseduration.md): The duration for which Touch ID authentication reuse is allowable.
- [LATouchIDAuthenticationMaximumAllowableReuseDuration](latouchidauthenticationmaximumallowablereuseduration.md): The maximum allowable reuse duration.

### Managing credentials

- [setCredential(\_:type:)](lacontext/setcredential%28__type_%29.md): Sets an application-provided credential to be used when evaluating authentication.
- [isCredentialSet(\_:)](lacontext/iscredentialset%28__%29.md): Returns a Boolean value indicating whether the specified credential type is set.
- [LACredentialType](lacredentialtype.md): The types of credentials to be used for authentication.

### Invalidating the authentication context

- [invalidate()](lacontext/invalidate%28%29.md): Invalidates the authentication context.

### Instance Properties

- [domainState](lacontext/domainstate.md): Contains authentication domain state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [ObservableObject](../combine/observableobject.md)

## See Also

### Authentication and access

- [LARight](laright.md): A grouped set of requirements that gate access to a resource or operation.
- [LARight.State](laright/state-swift.enum.md): The possible states for a right during authorization.

# LAContext (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

A mechanism for evaluating authentication policies and access controls.

## Declaration

```objectivec
@interface LAContext : NSObject
```

<a id="overview"></a>

## Overview

You use an authentication context to evaluate the user’s identity, either with biometrics like Touch ID or Face ID, or by supplying the device passcode. The context handles user interaction, and also interfaces to the Secure Enclave, the underlying hardware element that manages biometric data. You create and configure the context, and ask it to carry out the authentication. You then receive an asynchronous callback, which provides an indication of authentication success or failure, and an error instance that explains the reason for a failure, if any.

> **Important**

>  Include the [NSFaceIDUsageDescription](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW75) key in your app’s `Info.plist` file if your app allows biometric authentication. Otherwise, authorization requests may fail.

## Topics

### Checking availability

- [canEvaluatePolicy:error:](lacontext/canevaluatepolicy%28__error_%29.md): Assesses whether authentication can proceed for a given policy.
- [LAPolicy](lapolicy.md): The set of available local authentication policies.
- [biometryType](lacontext/biometrytype.md): The type of biometric authentication supported by the device.
- [LABiometryType](labiometrytype.md): The set of available biometric authentication types.

### Evaluating authentication policies

- [evaluatePolicy:localizedReason:reply:](lacontext/evaluatepolicy%28__localizedreason_reply_%29.md): Evaluates the specified policy.
- [evaluatedPolicyDomainState](lacontext/evaluatedpolicydomainstate.md): Deprecated. The current state of the evaluated policy domain.
- [maxBiometryFailures](lacontext/maxbiometryfailures.md): Deprecated. The number of biometric authentication failures after which the context falls back to another mechanism.

### Evaluating access controls

- [evaluateAccessControl:operation:localizedReason:reply:](lacontext/evaluateaccesscontrol%28__operation_localizedreason_reply_%29.md): Evaluates an access control for a given operation.
- [LAAccessControlOperation](laaccesscontroloperation.md): Operations to be evaluated for access control.
- [interactionNotAllowed](lacontext/interactionnotallowed.md): A Boolean value indicating whether authentication can be interactive.

### Customizing authentication prompts

- [localizedReason](lacontext/localizedreason.md): The localized explanation for authentication shown in the dialog presented to the user.
- [localizedFallbackTitle](lacontext/localizedfallbacktitle.md): The localized title for the fallback button in the dialog presented to the user during authentication.
- [localizedCancelTitle](lacontext/localizedcanceltitle.md): The localized title for the cancel button in the dialog presented to the user during authentication.

### Reusing device unlock state

- [touchIDAuthenticationAllowableReuseDuration](lacontext/touchidauthenticationallowablereuseduration.md): The duration for which Touch ID authentication reuse is allowable.
- [LATouchIDAuthenticationMaximumAllowableReuseDuration](latouchidauthenticationmaximumallowablereuseduration.md): The maximum allowable reuse duration.

### Managing credentials

- [setCredential:type:](lacontext/setcredential%28__type_%29.md): Sets an application-provided credential to be used when evaluating authentication.
- [isCredentialSet:](lacontext/iscredentialset%28__%29.md): Returns a Boolean value indicating whether the specified credential type is set.
- [LACredentialType](lacredentialtype.md): The types of credentials to be used for authentication.

### Invalidating the authentication context

- [invalidate](lacontext/invalidate%28%29.md): Invalidates the authentication context.

### Instance Properties

- [domainState](lacontext/domainstate.md): Contains authentication domain state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Authentication and access

- [LARight](laright.md): A grouped set of requirements that gate access to a resource or operation.
- [LARightState](laright/state-swift.enum.md): The possible states for a right during authorization.
