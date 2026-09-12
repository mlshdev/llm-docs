> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityallowedvalues](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityallowedvalues)

# accessibilityAllowedValues

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The allowed values for the slider accessibility element.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSNumber *> * accessibilityAllowedValues;
```

<a id="Discussion"></a>

## Discussion

Use this property if the slider can be set only to predefined values (for example, if the slider’s level indicator automatically snaps to the closest integer values between 0 and 100).

## See Also

### Configuring sliders

- [accessibilityLabelUIElements](accessibilitylabeluielements.md): The child label elements for the slider accessibility element.
- [accessibilityLabelValue](accessibilitylabelvalue.md): The value of the label accessibility element.
