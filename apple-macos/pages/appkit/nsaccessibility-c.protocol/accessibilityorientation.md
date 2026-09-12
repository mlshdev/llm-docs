> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityorientation](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityorientation)

# accessibilityOrientation

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The orientation of the accessibility element.

## Declaration

```objectivec
@property NSAccessibilityOrientation accessibilityOrientation;
```

<a id="Discussion"></a>

## Discussion

This property can hold either the [NSAccessibilityOrientationHorizontal](../nsaccessibilityorientation/horizontal.md) value or the [NSAccessibilityOrientationVertical](../nsaccessibilityorientation/vertical.md) value.

## See Also

### Setting content and values

- [accessibilityContents](accessibilitycontents.md): The contents of the current accessibility element.
- [accessibilityCriticalValue](accessibilitycriticalvalue.md): The critical value for the level indicator.
- [accessibilityIdentifier](accessibilityidentifier.md): The accessibility element’s identity.
- [accessibilityMaxValue](accessibilitymaxvalue.md): The maximum value for the accessibility element.
- [accessibilityMinValue](accessibilityminvalue.md): The minimum value for the accessibility element.
- [accessibilityProtectedContent](accessibilityprotectedcontent.md): A Boolean value that determines whether the accessibility element contains protected content.
- [accessibilitySelected](accessibilityselected.md): A Boolean value that determines whether the accessibility element is currently in a selected state.
- [accessibilityURL](accessibilityurl.md): The URL for the accessibility element.
- [accessibilityValueDescription](accessibilityvaluedescription.md): A human-readable description of the accessibility element’s value.
- [accessibilityWarningValue](accessibilitywarningvalue.md): The warning value for the level indicator.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
