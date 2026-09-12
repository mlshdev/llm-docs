> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitycontents](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitycontents)

# accessibilityContents

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The contents of the current accessibility element.

## Declaration

```objectivec
@property (copy, nullable) NSArray * accessibilityContents;
```

<a id="Discussion"></a>

## Discussion

This property is used by container elements. It holds an array of the container’s contents.

## See Also

### Setting content and values

- [accessibilityCriticalValue](accessibilitycriticalvalue.md): The critical value for the level indicator.
- [accessibilityIdentifier](accessibilityidentifier.md): The accessibility element’s identity.
- [accessibilityMaxValue](accessibilitymaxvalue.md): The maximum value for the accessibility element.
- [accessibilityMinValue](accessibilityminvalue.md): The minimum value for the accessibility element.
- [accessibilityOrientation](accessibilityorientation.md): The orientation of the accessibility element.
- [accessibilityProtectedContent](accessibilityprotectedcontent.md): A Boolean value that determines whether the accessibility element contains protected content.
- [accessibilitySelected](accessibilityselected.md): A Boolean value that determines whether the accessibility element is currently in a selected state.
- [accessibilityURL](accessibilityurl.md): The URL for the accessibility element.
- [accessibilityValueDescription](accessibilityvaluedescription.md): A human-readable description of the accessibility element’s value.
- [accessibilityWarningValue](accessibilitywarningvalue.md): The warning value for the level indicator.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
