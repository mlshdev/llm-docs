> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setaccessibilityvalue(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setaccessibilityvalue(_:))

# setAccessibilityValue(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets the value of the accessibility element.

## Declaration

```swift
func setAccessibilityValue(_ accessibilityValue: String?)
```

## Parameters

- `accessibilityValue`: The new value for the accessibility element.

<a id="Discussion"></a>

## Discussion

When an object has a static label and a dynamic value, set this property to a string that describes the value. For example, a switch object can have a label describing the meaning of the switch, but the value is either On or Off.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier(\_:)](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel(\_:)](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint(\_:)](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setIsAccessibilityElement(\_:)](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits(\_:)](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions(\_:)](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.

# setAccessibilityValue: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets the value of the accessibility element.

## Declaration

```objectivec
- (void) setAccessibilityValue:(NSString *) accessibilityValue;
```

## Parameters

- `accessibilityValue`: The new value for the accessibility element.

<a id="Discussion"></a>

## Discussion

When an object has a static label and a dynamic value, set this property to a string that describes the value. For example, a switch object can have a label describing the meaning of the switch, but the value is either On or Off.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier:](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel:](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint:](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setIsAccessibilityElement:](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits:](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions:](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.
