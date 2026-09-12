> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxpositionattribute](https://developer.apple.com/documentation/applicationservices/kaxpositionattribute)

# kAXPositionAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXPositionAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

The global screen coordinates of the top-left corner of this accessibility object. Note that the coordinates `0`,`0` represent the top-left corner of the screen that displays the menu bar. All accessibility objects that have a screen position (in other words, are visible on the screen) should include this attribute.

# kAXPositionAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXPositionAttribute
```

<a id="discussion"></a>

## Discussion

The global screen coordinates of the top-left corner of this accessibility object. Note that the coordinates `0`,`0` represent the top-left corner of the screen that displays the menu bar. All accessibility objects that have a screen position (in other words, are visible on the screen) should include this attribute.
