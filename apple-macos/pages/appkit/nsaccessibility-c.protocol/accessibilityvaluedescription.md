> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityvaluedescription](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityvaluedescription)

# accessibilityValueDescription

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A human-readable description of the accessibility element’s value.

## Declaration

```objectivec
@property (copy, nullable) NSString * accessibilityValueDescription;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a more useful description of the accessibility element’s raw value. For example, you might set the value to `600`, but set the description to `10 minutes`. Always localize this description.

## See Also

### Setting content and values

- [accessibilityContents](accessibilitycontents.md): The contents of the current accessibility element.
- [accessibilityCriticalValue](accessibilitycriticalvalue.md): The critical value for the level indicator.
- [accessibilityIdentifier](accessibilityidentifier.md): The accessibility element’s identity.
- [accessibilityMaxValue](accessibilitymaxvalue.md): The maximum value for the accessibility element.
- [accessibilityMinValue](accessibilityminvalue.md): The minimum value for the accessibility element.
- [accessibilityOrientation](accessibilityorientation.md): The orientation of the accessibility element.
- [accessibilityProtectedContent](accessibilityprotectedcontent.md): A Boolean value that determines whether the accessibility element contains protected content.
- [accessibilitySelected](accessibilityselected.md): A Boolean value that determines whether the accessibility element is currently in a selected state.
- [accessibilityURL](accessibilityurl.md): The URL for the accessibility element.
- [accessibilityWarningValue](accessibilitywarningvalue.md): The warning value for the level indicator.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
