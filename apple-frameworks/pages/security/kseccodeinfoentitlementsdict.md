> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfoentitlementsdict](https://developer.apple.com/documentation/security/kseccodeinfoentitlementsdict)

# kSecCodeInfoEntitlementsDict (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a dictionary of embedded entitlements.

## Declaration

```swift
let kSecCodeInfoEntitlementsDict: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDictionary](../corefoundation/cfdictionary.md) object containing the embedded entitlements of the code if it has entitlements and they are in standard dictionary form. The value is absent if the code has no entitlements, or they are in a different format (in which case, see [kSecCodeInfoEntitlements](kseccodeinfoentitlements.md)).

# kSecCodeInfoEntitlementsDict (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a dictionary of embedded entitlements.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoEntitlementsDict;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDictionaryRef](../corefoundation/cfdictionary.md) object containing the embedded entitlements of the code if it has entitlements and they are in standard dictionary form. The value is absent if the code has no entitlements, or they are in a different format (in which case, see [kSecCodeInfoEntitlements](kseccodeinfoentitlements.md)).
