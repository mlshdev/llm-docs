> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxwindowattribute](https://developer.apple.com/documentation/applicationservices/kaxwindowattribute)

# kAXWindowAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXWindowAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

The window element that contains this accessibility object. An accessibility object that is contained in a window includes this attribute so an assistive application easily can find the window without having to step through all intervening objects in the accessibility hierarchy. Note that the value of the `AXWindow` attribute must be an accessibility object that represents a window, not a sheet or drawer. For a similar attribute that is less restrictive, see `kAXTopLevelUIElementAttribute`. The `AXWindow` attribute is required for all accessibility elements whose parent or more distant ancestor represents a window.

# kAXWindowAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXWindowAttribute
```

<a id="discussion"></a>

## Discussion

The window element that contains this accessibility object. An accessibility object that is contained in a window includes this attribute so an assistive application easily can find the window without having to step through all intervening objects in the accessibility hierarchy. Note that the value of the `AXWindow` attribute must be an accessibility object that represents a window, not a sheet or drawer. For a similar attribute that is less restrictive, see `kAXTopLevelUIElementAttribute`. The `AXWindow` attribute is required for all accessibility elements whose parent or more distant ancestor represents a window.
