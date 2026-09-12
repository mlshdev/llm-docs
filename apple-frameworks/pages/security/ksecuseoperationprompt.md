> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecuseoperationprompt](https://developer.apple.com/documentation/security/ksecuseoperationprompt)

# kSecUseOperationPrompt (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 7.0)

A key whose value is an operation prompt.

> Use kSecUseAuthenticationContext and set LAContext.localizedReason property

## Declaration

```swift
let kSecUseOperationPrompt: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and represents a string describing the operation for which the app is attempting to authenticate. When performing user authentication, the system includes the string in the user prompt. The app is responsible for text localization.

# kSecUseOperationPrompt (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 7.0)

A key whose value is an operation prompt.

> Use kSecUseAuthenticationContext and set LAContext.localizedReason property

## Declaration

```objectivec
extern CFStringRef const kSecUseOperationPrompt;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and represents a string describing the operation for which the app is attempting to authenticate. When performing user authentication, the system includes the string in the user prompt. The app is responsible for text localization.
