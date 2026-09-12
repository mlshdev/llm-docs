> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchsearchlist](https://developer.apple.com/documentation/security/ksecmatchsearchlist)

# kSecMatchSearchList (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates a list of items to search.

## Declaration

```swift
let kSecMatchSearchList: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFArray](../corefoundation/cfarray.md) of [SecKeychain](seckeychain.md) items. If provided, the search will be limited to the keychain items contained in this list.

# kSecMatchSearchList (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates a list of items to search.

## Declaration

```objectivec
extern CFStringRef const kSecMatchSearchList;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFArrayRef](../corefoundation/cfarray.md) of [SecKeychainRef](seckeychain.md) items. If provided, the search will be limited to the keychain items contained in this list.
