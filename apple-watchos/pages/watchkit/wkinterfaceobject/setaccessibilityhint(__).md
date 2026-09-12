> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setaccessibilityhint(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setaccessibilityhint(_:))

# setAccessibilityHint(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets the description of what happens when performing an action on the accessibility element.

## Declaration

```swift
func setAccessibilityHint(_ accessibilityHint: String?)
```

## Parameters

- `accessibilityHint`: A localized string describing what will happen when the user interacts with the object.

<a id="Discussion"></a>

## Discussion

Use this method to change the accessibility hint of an object dynamically. You can also set the accessibility hint for an object in Xcode from the Identity inspector.

Follow these guidelines to create a hint for interface objects:

- A hint should be a very brief phrase that begins with a verb that names the result of the action, such as “Dismisses the interface.” To avoid making the hint sound like a command, do not begin the phrase with the imperative form of a verb. For example, do not set the hint to “Dismiss the interface.”
- Do not repeat the action type in the hint. For example, do not create a hint such as “Tap to dismiss the interface.”
- Do not include information about the object involved in the hint. For example, do not create a hint such as “Row that displays details about the item.”

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier(\_:)](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel(\_:)](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityValue(\_:)](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement(\_:)](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits(\_:)](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions(\_:)](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.

# setAccessibilityHint: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS

Sets the description of what happens when performing an action on the accessibility element.

## Declaration

```objectivec
- (void) setAccessibilityHint:(NSString *) accessibilityHint;
```

## Parameters

- `accessibilityHint`: A localized string describing what will happen when the user interacts with the object.

<a id="Discussion"></a>

## Discussion

Use this method to change the accessibility hint of an object dynamically. You can also set the accessibility hint for an object in Xcode from the Identity inspector.

Follow these guidelines to create a hint for interface objects:

- A hint should be a very brief phrase that begins with a verb that names the result of the action, such as “Dismisses the interface.” To avoid making the hint sound like a command, do not begin the phrase with the imperative form of a verb. For example, do not set the hint to “Dismiss the interface.”
- Do not repeat the action type in the hint. For example, do not create a hint such as “Tap to dismiss the interface.”
- Do not include information about the object involved in the hint. For example, do not create a hint such as “Row that displays details about the item.”

## See Also

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier:](setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel:](setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityValue:](setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement:](setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits:](setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions:](setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.
