> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxtopleveluielementattribute](https://developer.apple.com/documentation/applicationservices/kaxtopleveluielementattribute)

# kAXTopLevelUIElementAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
var kAXTopLevelUIElementAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

The window, sheet, or drawer element that contains this accessibility object. An accessibility object that is contained in a window, sheet, or drawer includes this attribute so an assistive application easily can find that element without having to step through all intervening objects in the accessibility hierarchy. This attribute is required for all accessibility objects whose parent or more distant ancestor represents a window, drawer, or sheet.

# kAXTopLevelUIElementAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.4+

## Declaration

```objectivec
#define kAXTopLevelUIElementAttribute
```

<a id="discussion"></a>

## Discussion

The window, sheet, or drawer element that contains this accessibility object. An accessibility object that is contained in a window, sheet, or drawer includes this attribute so an assistive application easily can find that element without having to step through all intervening objects in the accessibility hierarchy. This attribute is required for all accessibility objects whose parent or more distant ancestor represents a window, drawer, or sheet.
