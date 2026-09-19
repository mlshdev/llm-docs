> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/kaxlinkeduielementsattribute

# kAXLinkedUIElementsAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
var kAXLinkedUIElementsAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

An array of accessibility objects with which this accessibility object is related. For example, the contents of a list item can be displayed in another pane or window. The list item and the separately displayed contents are related, but this relationship may not be apparent to an assistive application. To make such a relationship explicit, you include this attribute in the accessibility objects representing the related user interface elements.

# kAXLinkedUIElementsAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.4+

## Declaration

```objectivec
#define kAXLinkedUIElementsAttribute
```

<a id="discussion"></a>

## Discussion

An array of accessibility objects with which this accessibility object is related. For example, the contents of a list item can be displayed in another pane or window. The list item and the separately displayed contents are related, but this relationship may not be apparent to an assistive application. To make such a relationship explicit, you include this attribute in the accessibility objects representing the related user interface elements.
