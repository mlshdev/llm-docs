> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemattr/serviceitemattr](https://developer.apple.com/documentation/security/secitemattr/serviceitemattr)

# SecItemAttr.serviceItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the service attribute.

## Declaration

```swift
case serviceItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string that represents the service associated with this item, for example, “iTools”. This is unique to generic password attributes. Keychain strings should use UTF-8 encoding.

# kSecServiceItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the service attribute.

## Declaration

```objectivec
kSecServiceItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string that represents the service associated with this item, for example, “iTools”. This is unique to generic password attributes. Keychain strings should use UTF-8 encoding.
