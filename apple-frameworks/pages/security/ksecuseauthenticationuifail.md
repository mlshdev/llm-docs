> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecuseauthenticationuifail](https://developer.apple.com/documentation/security/ksecuseauthenticationuifail)

# kSecUseAuthenticationUIFail (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 14.0) · iPadOS 9.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.11+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 7.0)

A value that indicates user authentication is disallowed.

> Instead of kSecUseAuthenticationUI, use kSecUseAuthenticationContext and set LAContext.interactionNotAllowed property

## Declaration

```swift
let kSecUseAuthenticationUIFail: CFString
```

<a id="Discussion"></a>

## Discussion

When you specify this value, if user authentication is needed, the function returns the [errSecInteractionNotAllowed](errsecinteractionnotallowed.md) error.

# kSecUseAuthenticationUIFail (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 14.0) · iPadOS 9.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.11+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 7.0)

A value that indicates user authentication is disallowed.

> Instead of kSecUseAuthenticationUI, use kSecUseAuthenticationContext and set LAContext.interactionNotAllowed property

## Declaration

```objectivec
extern CFStringRef const kSecUseAuthenticationUIFail;
```

<a id="Discussion"></a>

## Discussion

When you specify this value, if user authentication is needed, the function returns the [errSecInteractionNotAllowed](errsecinteractionnotallowed.md) error.
