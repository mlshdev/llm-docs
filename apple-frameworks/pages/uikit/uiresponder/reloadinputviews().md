> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/reloadinputviews()](https://developer.apple.com/documentation/uikit/uiresponder/reloadinputviews())

# reloadInputViews() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Updates the custom input and accessory views when the object is the first responder.

## Declaration

```swift
func reloadInputViews()
```

<a id="Discussion"></a>

## Discussion

You can use this method to refresh the custom input view or input accessory view associated with the current object when it’s the first responder. The views are replaced immediately, without animating them into place. If the current object isn’t the first responder, this method has no effect.

## See Also

### Managing input views

- [inputView](inputview.md): The custom input view to display when the responder becomes the first responder.
- [inputViewController](inputviewcontroller.md): The custom input view controller to use when the responder becomes the first responder.
- [inputAccessoryView](inputaccessoryview.md): The custom input accessory view to display when the responder becomes the first responder.
- [inputAccessoryViewController](inputaccessoryviewcontroller.md): The custom input accessory view controller to display when the responder becomes the first responder.

# reloadInputViews (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the custom input and accessory views when the object is the first responder.

## Declaration

```objectivec
- (void) reloadInputViews;
```

<a id="Discussion"></a>

## Discussion

You can use this method to refresh the custom input view or input accessory view associated with the current object when it’s the first responder. The views are replaced immediately, without animating them into place. If the current object isn’t the first responder, this method has no effect.

## See Also

### Managing input views

- [inputView](inputview.md): The custom input view to display when the responder becomes the first responder.
- [inputViewController](inputviewcontroller.md): The custom input view controller to use when the responder becomes the first responder.
- [inputAccessoryView](inputaccessoryview.md): The custom input accessory view to display when the responder becomes the first responder.
- [inputAccessoryViewController](inputaccessoryviewcontroller.md): The custom input accessory view controller to display when the responder becomes the first responder.
