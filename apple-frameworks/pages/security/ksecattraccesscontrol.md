> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattraccesscontrol](https://developer.apple.com/documentation/security/ksecattraccesscontrol)

# kSecAttrAccessControl (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s an access control instance indicating access control settings for the item.

## Declaration

```swift
let kSecAttrAccessControl: CFString
```

## Mentioned In

- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is a [SecAccessControl](secaccesscontrol.md) instance, created with the [SecAccessControlCreateWithFlags(\_:\_:\_:\_:)](secaccesscontrolcreatewithflags%28________%29.md) method, containing access control conditions for the item. See [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md) for more details.

> **Important**

>  This attribute is mutually exclusive with the [kSecAttrAccess](ksecattraccess.md) attribute.

# kSecAttrAccessControl (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s an access control instance indicating access control settings for the item.

## Declaration

```objectivec
extern CFStringRef const kSecAttrAccessControl;
```

## Mentioned In

- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is a [SecAccessControlRef](secaccesscontrol.md) instance, created with the [SecAccessControlCreateWithFlags](secaccesscontrolcreatewithflags%28________%29.md) method, containing access control conditions for the item. See [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md) for more details.

> **Important**

>  This attribute is mutually exclusive with the [kSecAttrAccess](ksecattraccess.md) attribute.
