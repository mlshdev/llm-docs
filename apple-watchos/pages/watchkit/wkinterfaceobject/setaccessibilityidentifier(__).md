> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setaccessibilityidentifier(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setaccessibilityidentifier(_:))

# setAccessibilityIdentifier(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets the unique identifier string for the interface object.

## Declaration

```swift
func setAccessibilityIdentifier(_ accessibilityIdentifier: String?)
```

## Parameters

- `accessibilityIdentifier`: A string containing the identifier of the element. Specify `nil` to clear the existing identifier.

<a id="Discussion"></a>

## Discussion

Use the identifier in this property to distinguish between different objects in your app. The identifier string is used solely for programmatic identity, as opposed to many other accessibility attributes.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityLabel(\_:)](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint(\_:)](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue(\_:)](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement(\_:)](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits(\_:)](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions(\_:)](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.

# setAccessibilityIdentifier: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets the unique identifier string for the interface object.

## Declaration

```objectivec
- (void) setAccessibilityIdentifier:(NSString *) accessibilityIdentifier;
```

## Parameters

- `accessibilityIdentifier`: A string containing the identifier of the element. Specify `nil` to clear the existing identifier.

<a id="Discussion"></a>

## Discussion

Use the identifier in this property to distinguish between different objects in your app. The identifier string is used solely for programmatic identity, as opposed to many other accessibility attributes.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityLabel:](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint:](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue:](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement:](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits:](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions:](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.
