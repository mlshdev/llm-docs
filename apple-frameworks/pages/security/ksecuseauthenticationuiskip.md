> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecuseauthenticationuiskip

# kSecUseAuthenticationUISkip (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value that indicates items requiring user authentication should be skipped.

## Declaration

```swift
let kSecUseAuthenticationUISkip: CFString
```

<a id="Discussion"></a>

## Discussion

Silently skip any items that require user authentication. Only use this value with the [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md) function.

# kSecUseAuthenticationUISkip (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value that indicates items requiring user authentication should be skipped.

## Declaration

```objectivec
extern CFStringRef const kSecUseAuthenticationUISkip;
```

<a id="Discussion"></a>

## Discussion

Silently skip any items that require user authentication. Only use this value with the [SecItemCopyMatching](secitemcopymatching%28____%29.md) function.
