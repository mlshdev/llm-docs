> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setaccessibilitytraits(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setaccessibilitytraits(_:))

# setAccessibilityTraits(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets the combination of accessibility traits that best characterize the accessibility element.

## Declaration

```swift
func setAccessibilityTraits(_ accessibilityTraits: UIAccessibilityTraits)
```

## Parameters

- `accessibilityTraits`: The traits that characterize this element. For a list of traits and appropriate combinations, see [UIAccessibilityTraits](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits).

<a id="Discussion"></a>

## Discussion

Use this method to change the accessibility traits associated with your interface objects.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier(\_:)](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel(\_:)](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint(\_:)](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue(\_:)](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement(\_:)](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityImageRegions(\_:)](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.

# setAccessibilityTraits: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets the combination of accessibility traits that best characterize the accessibility element.

## Declaration

```objectivec
- (void) setAccessibilityTraits:(UIAccessibilityTraits) accessibilityTraits;
```

## Parameters

- `accessibilityTraits`: The traits that characterize this element. For a list of traits and appropriate combinations, see [UIAccessibilityTraits](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits).

<a id="Discussion"></a>

## Discussion

Use this method to change the accessibility traits associated with your interface objects.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier:](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel:](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint:](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue:](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement:](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityImageRegions:](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.
