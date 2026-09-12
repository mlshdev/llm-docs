> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setisaccessibilityelement(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setisaccessibilityelement(_:))

# setIsAccessibilityElement(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets whether the object is an accessibility element that an assistive app can access.

## Declaration

```swift
func setIsAccessibilityElement(_ isAccessibilityElement: Bool)
```

## Parameters

- `isAccessibilityElement`: [true](https://developer.apple.com/documentation/swift/true) if the object is an accessibility element or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Use this method to change the accessibility status of your interface objects.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier(\_:)](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel(\_:)](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint(\_:)](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue(\_:)](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setAccessibilityTraits(\_:)](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions(\_:)](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.

# setIsAccessibilityElement: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets whether the object is an accessibility element that an assistive app can access.

## Declaration

```objectivec
- (void) setIsAccessibilityElement:(BOOL) isAccessibilityElement;
```

## Parameters

- `isAccessibilityElement`: [true](https://developer.apple.com/documentation/swift/true) if the object is an accessibility element or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Use this method to change the accessibility status of your interface objects.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier:](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel:](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint:](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue:](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setAccessibilityTraits:](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions:](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.
