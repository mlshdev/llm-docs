> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecuseauthenticationui](https://developer.apple.com/documentation/security/ksecuseauthenticationui)

# kSecUseAuthenticationUI (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates whether the user is prompted for authentication.

## Declaration

```swift
let kSecUseAuthenticationUI: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and contains one of the values listed in [UI authentication values](search-attribute-keys-and-values.md#UI-authentication-values). The value specifies whether or not the user is prompted for authentication, if needed. A default value of [kSecUseAuthenticationUIAllow](ksecuseauthenticationuiallow.md) is assumed when this key is not present.

# kSecUseAuthenticationUI (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates whether the user is prompted for authentication.

## Declaration

```objectivec
extern CFStringRef const kSecUseAuthenticationUI;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and contains one of the values listed in [UI authentication values](search-attribute-keys-and-values.md#UI-authentication-values). The value specifies whether or not the user is prompted for authentication, if needed. A default value of [kSecUseAuthenticationUIAllow](ksecuseauthenticationuiallow.md) is assumed when this key is not present.
