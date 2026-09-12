> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/systembutton(with:target:action:)](https://developer.apple.com/documentation/uikit/uibutton/systembutton(with:target:action:))

# systemButton(with:target:action:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates and returns a system type button with specified image, target, and action.

## Declaration

```swift
class func systemButton(with image: UIImage, target: Any?, action: Selector?) -> Self
```

## Parameters

- `image`: The image for a system button.
- `target`: The object that receives the `action` message.
- `action`: The action to send to `target` when this item is selected.

<a id="Discussion"></a>

## Discussion

This method is a convenience constructor for creating a `UIButtonTypeSystem` type button objects with a specific target and action.

# systemButtonWithImage:target:action: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates and returns a system type button with specified image, target, and action.

## Declaration

```objectivec
+ (instancetype) systemButtonWithImage:(UIImage *) image target:(id) target action:(SEL) action;
```

## Parameters

- `image`: The image for a system button.
- `target`: The object that receives the `action` message.
- `action`: The action to send to `target` when this item is selected.

<a id="Discussion"></a>

## Discussion

This method is a convenience constructor for creating a `UIButtonTypeSystem` type button objects with a specific target and action.

## See Also

### Creating system buttons

- [systemButtonWithPrimaryAction:](systembuttonwithprimaryaction_.md): Creates and returns a system type button, registers the primary action event, and sets the title and image to the action’s title and image.
