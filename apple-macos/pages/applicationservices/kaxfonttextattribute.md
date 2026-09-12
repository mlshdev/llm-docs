> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxfonttextattribute](https://developer.apple.com/documentation/applicationservices/kaxfonttextattribute)

# kAXFontTextAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A dictionary (a `CFDictionaryRef`) of two or more font keys.

## Declaration

```swift
var kAXFontTextAttribute: Unmanaged<CFString>
```

<a id="discussion"></a>

## Discussion

The dictionary associated with this attribute must contain the [kAXFontNameKey](kaxfontnamekey.md) and [kAXFontSizeKey](kaxfontsizekey.md) font keys. It may also contain the [kAXFontFamilyKey](kaxfontfamilykey.md) and [kAXVisibleNameKey](kaxvisiblenamekey.md) font keys.

# kAXFontTextAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A dictionary (a `CFDictionaryRef`) of two or more font keys.

## Declaration

```objectivec
CFStringRef kAXFontTextAttribute;
```

<a id="discussion"></a>

## Discussion

The dictionary associated with this attribute must contain the [kAXFontNameKey](kaxfontnamekey.md) and [kAXFontSizeKey](kaxfontsizekey.md) font keys. It may also contain the [kAXFontFamilyKey](kaxfontfamilykey.md) and [kAXVisibleNameKey](kaxvisiblenamekey.md) font keys.
