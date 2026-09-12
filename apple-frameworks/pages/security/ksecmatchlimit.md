> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchlimit](https://developer.apple.com/documentation/security/ksecmatchlimit)

# kSecMatchLimit (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the match limit.

## Declaration

```swift
let kSecMatchLimit: CFString
```

## Mentioned In

- [Searching for keychain items](searching-for-keychain-items.md)
- [Storing Keys in the Keychain](storing-keys-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumber](../corefoundation/cfnumber.md). If provided, this value specifies the maximum number of results to return or otherwise act upon. For a single item, specify [kSecMatchLimitOne](ksecmatchlimitone.md). To specify all matching items, specify [kSecMatchLimitAll](ksecmatchlimitall.md). The default behavior is function-dependent.

# kSecMatchLimit (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the match limit.

## Declaration

```objectivec
extern CFStringRef const kSecMatchLimit;
```

## Mentioned In

- [Searching for keychain items](searching-for-keychain-items.md)
- [Storing Keys in the Keychain](storing-keys-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumberRef](../corefoundation/cfnumber.md). If provided, this value specifies the maximum number of results to return or otherwise act upon. For a single item, specify [kSecMatchLimitOne](ksecmatchlimitone.md). To specify all matching items, specify [kSecMatchLimitAll](ksecmatchlimitall.md). The default behavior is function-dependent.
