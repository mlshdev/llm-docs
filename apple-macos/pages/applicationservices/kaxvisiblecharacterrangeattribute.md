> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxvisiblecharacterrangeattribute](https://developer.apple.com/documentation/applicationservices/kaxvisiblecharacterrangeattribute)

# kAXVisibleCharacterRangeAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.3+

## Declaration

```swift
var kAXVisibleCharacterRangeAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

Indicates the range of characters (not bytes) that are scrolled into view within this accessibility object. This attribute is required only for accessibility objects that represent an editable text area (objects of role `AXTextArea`), not for any other text-related accessibility objects.

# kAXVisibleCharacterRangeAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.3+

## Declaration

```objectivec
#define kAXVisibleCharacterRangeAttribute
```

<a id="discussion"></a>

## Discussion

Indicates the range of characters (not bytes) that are scrolled into view within this accessibility object. This attribute is required only for accessibility objects that represent an editable text area (objects of role `AXTextArea`), not for any other text-related accessibility objects.
