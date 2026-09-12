> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setaccessibilityimageregions(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setaccessibilityimageregions(_:))

# setAccessibilityImageRegions(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Marks portions of an image as separate accessible elements.

## Declaration

```swift
func setAccessibilityImageRegions(_ accessibilityImageRegions: [WKAccessibilityImageRegion])
```

## Parameters

- `accessibilityImageRegions`: An array of [WKAccessibilityImageRegion](../wkaccessibilityimageregion.md) objects. Each object in the array represents a portion of the interface object’s foreground or background image that should be treated as a separate accessible element.

<a id="Discussion"></a>

## Discussion

Use this method to associate different accessibility labels with different parts of the object’s image. You might also use this method to assign accessibility information to different parts of a dynamically generated image.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier(\_:)](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel(\_:)](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint(\_:)](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue(\_:)](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement(\_:)](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits(\_:)](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.

# setAccessibilityImageRegions: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Marks portions of an image as separate accessible elements.

## Declaration

```objectivec
- (void) setAccessibilityImageRegions:(NSArray<WKAccessibilityImageRegion *> *) accessibilityImageRegions;
```

## Parameters

- `accessibilityImageRegions`: An array of [WKAccessibilityImageRegion](../wkaccessibilityimageregion.md) objects. Each object in the array represents a portion of the interface object’s foreground or background image that should be treated as a separate accessible element.

<a id="Discussion"></a>

## Discussion

Use this method to associate different accessibility labels with different parts of the object’s image. You might also use this method to assign accessibility information to different parts of a dynamically generated image.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier:](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel:](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint:](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue:](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement:](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits:](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
