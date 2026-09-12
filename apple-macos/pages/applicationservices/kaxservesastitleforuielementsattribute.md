> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxservesastitleforuielementsattribute](https://developer.apple.com/documentation/applicationservices/kaxservesastitleforuielementsattribute)

# kAXServesAsTitleForUIElementsAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
var kAXServesAsTitleForUIElementsAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

An array of accessibility objects for which this accessibility object serves as the title. For example, a piece of static text can serve as a title for one or more user interface elements. Because this static text string is not displayed as part of any user interface element’s visual interface, an assistive application does not know the title is associated with user interface elements. By including this attribute in the accessibility object representing the title, you specify the accessibility objects with which this title is associated.

# kAXServesAsTitleForUIElementsAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.4+

## Declaration

```objectivec
#define kAXServesAsTitleForUIElementsAttribute
```

<a id="discussion"></a>

## Discussion

An array of accessibility objects for which this accessibility object serves as the title. For example, a piece of static text can serve as a title for one or more user interface elements. Because this static text string is not displayed as part of any user interface element’s visual interface, an assistive application does not know the title is associated with user interface elements. By including this attribute in the accessibility object representing the title, you specify the accessibility objects with which this title is associated.
