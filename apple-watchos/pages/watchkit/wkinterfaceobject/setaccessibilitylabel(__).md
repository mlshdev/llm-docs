> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setaccessibilitylabel(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setaccessibilitylabel(_:))

# setAccessibilityLabel(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets a succinct label on the object that identifies the accessibility element.

## Declaration

```swift
func setAccessibilityLabel(_ accessibilityLabel: String?)
```

## Parameters

- `accessibilityLabel`: A localized string for identifying the object to the accessibility system. The string you specify should succinctly describe the purpose of the object.

<a id="Discussion"></a>

## Discussion

Use this method to change the accessibility label of an object dynamically. You can also set the accessibility label for an object in Xcode from the Identity inspector. If you do not set an accessibility label, the system uses the object’s title string, if present.

An assistive application uses this label to identify the item to a user with disabilities. For example, if a button uses an image to convey its meaning to sighted users, you can assign a label that describes the behavior of the button to users with disabilities.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier(\_:)](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityHint(\_:)](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue(\_:)](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement(\_:)](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits(\_:)](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions(\_:)](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.

# setAccessibilityLabel: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets a succinct label on the object that identifies the accessibility element.

## Declaration

```objectivec
- (void) setAccessibilityLabel:(NSString *) accessibilityLabel;
```

## Parameters

- `accessibilityLabel`: A localized string for identifying the object to the accessibility system. The string you specify should succinctly describe the purpose of the object.

<a id="Discussion"></a>

## Discussion

Use this method to change the accessibility label of an object dynamically. You can also set the accessibility label for an object in Xcode from the Identity inspector. If you do not set an accessibility label, the system uses the object’s title string, if present.

An assistive application uses this label to identify the item to a user with disabilities. For example, if a button uses an image to convey its meaning to sighted users, you can assign a label that describes the behavior of the button to users with disabilities.

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier:](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityHint:](setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue:](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement:](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits:](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions:](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.
