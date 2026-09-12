> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxlabeluielementsattribute](https://developer.apple.com/documentation/applicationservices/kaxlabeluielementsattribute)

# kAXLabelUIElementsAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
var kAXLabelUIElementsAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

An array of accessibility objects representing the labels displayed near the control represented by this accessibility object. For example, a slider control might display labels that indicate the range of values the slider can represent. Because these labels are not displayed as part of the slider’s visual interface, an assistive application does not know they are associated with the slider. By including accessibility objects representing the labels in this attribute, you make this association explicit.

# kAXLabelUIElementsAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.4+

## Declaration

```objectivec
#define kAXLabelUIElementsAttribute
```

<a id="discussion"></a>

## Discussion

An array of accessibility objects representing the labels displayed near the control represented by this accessibility object. For example, a slider control might display labels that indicate the range of values the slider can represent. Because these labels are not displayed as part of the slider’s visual interface, an assistive application does not know they are associated with the slider. By including accessibility objects representing the labels in this attribute, you make this association explicit.
