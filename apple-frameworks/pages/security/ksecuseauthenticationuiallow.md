> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecuseauthenticationuiallow](https://developer.apple.com/documentation/security/ksecuseauthenticationuiallow)

# kSecUseAuthenticationUIAllow (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 14.0) · iPadOS 9.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.11+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 7.0)

A value that indicates user authentication is allowed.

> Instead of kSecUseAuthenticationUI, use kSecUseAuthenticationContext and set LAContext.interactionNotAllowed property

## Declaration

```swift
let kSecUseAuthenticationUIAllow: CFString
```

<a id="Discussion"></a>

## Discussion

The user may be prompted for authentication. This is the default value.

# kSecUseAuthenticationUIAllow (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 14.0) · iPadOS 9.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.11+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 7.0)

A value that indicates user authentication is allowed.

> Instead of kSecUseAuthenticationUI, use kSecUseAuthenticationContext and set LAContext.interactionNotAllowed property

## Declaration

```objectivec
extern CFStringRef const kSecUseAuthenticationUIAllow;
```

<a id="Discussion"></a>

## Discussion

The user may be prompted for authentication. This is the default value.
