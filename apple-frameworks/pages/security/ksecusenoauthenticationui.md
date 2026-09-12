> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecusenoauthenticationui](https://developer.apple.com/documentation/security/ksecusenoauthenticationui)

# kSecUseNoAuthenticationUI (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A key whose value is a Boolean indicating whether to disallow UI authentication.

> Use the key [kSecUseAuthenticationUI](ksecuseauthenticationui.md) with value [kSecUseAuthenticationUIFail](ksecuseauthenticationuifail.md) instead.

## Declaration

```swift
let kSecUseNoAuthenticationUI: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). If provided with a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the error [errSecInteractionNotAllowed](errsecinteractionnotallowed.md) is returned when the item is attempting to authenticate with UI.

# kSecUseNoAuthenticationUI (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A key whose value is a Boolean indicating whether to disallow UI authentication.

> Use the key [kSecUseAuthenticationUI](ksecuseauthenticationui.md) with value [kSecUseAuthenticationUIFail](ksecuseauthenticationuifail.md) instead.

## Declaration

```objectivec
extern CFStringRef const kSecUseNoAuthenticationUI;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). If provided with a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the error [errSecInteractionNotAllowed](errsecinteractionnotallowed.md) is returned when the item is attempting to authenticate with UI.
