> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrport](https://developer.apple.com/documentation/security/ksecattrport)

# kSecAttrPort (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s port.

## Declaration

```swift
let kSecAttrPort: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumber](../corefoundation/cfnumber.md) and represents an Internet port number. Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.

# kSecAttrPort (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s port.

## Declaration

```objectivec
extern CFStringRef const kSecAttrPort;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumberRef](../corefoundation/cfnumber.md) and represents an Internet port number. Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.
