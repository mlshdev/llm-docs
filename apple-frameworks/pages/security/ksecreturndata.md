> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecreturndata](https://developer.apple.com/documentation/security/ksecreturndata)

# kSecReturnData (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean that indicates whether or not to return item data.

## Declaration

```swift
let kSecReturnData: CFString
```

## Mentioned In

- [Searching for keychain items](searching-for-keychain-items.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that the function needs to return the item’s data as a [CFData](../corefoundation/cfdata.md) object.

For keys and password items, data is secret (encrypted) and might require the user to enter a password for access. For key items, the resulting data has the same format as the return value of the function [SecKeyCopyExternalRepresentation(\_:\_:)](seckeycopyexternalrepresentation%28____%29.md). However, the key data might not be extractable (for example, if it’s protected by the Secure Enclave), so prefer to use [SecKeyCopyExternalRepresentation(\_:\_:)](seckeycopyexternalrepresentation%28____%29.md) for keys and check the `error` parameter if it returns `nil`.

# kSecReturnData (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean that indicates whether or not to return item data.

## Declaration

```objectivec
extern CFStringRef const kSecReturnData;
```

## Mentioned In

- [Searching for keychain items](searching-for-keychain-items.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that the function needs to return the item’s data as a [CFDataRef](../corefoundation/cfdata.md) object.

For keys and password items, data is secret (encrypted) and might require the user to enter a password for access. For key items, the resulting data has the same format as the return value of the function [SecKeyCopyExternalRepresentation](seckeycopyexternalrepresentation%28____%29.md). However, the key data might not be extractable (for example, if it’s protected by the Secure Enclave), so prefer to use [SecKeyCopyExternalRepresentation](seckeycopyexternalrepresentation%28____%29.md) for keys and check the `error` parameter if it returns `nil`.
