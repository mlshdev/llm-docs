> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopovertouchbaritem/dismisspopover(_:)](https://developer.apple.com/documentation/appkit/nspopovertouchbaritem/dismisspopover(_:))

# dismissPopover(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Restores the previously visible main bar.

## Declaration

```swift
func dismissPopover(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

This method has the same effect as the user tapping the optional close button.

## See Also

### Expanding and collapsing a popover

- [showPopover(\_:)](showpopover%28__%29.md): Replaces the main bar with this item’s popover bar.
- [makeStandardActivatePopoverGestureRecognizer()](makestandardactivatepopovergesturerecognizer%28%29.md): Returns a gesture recognizer, configured to invoke the [showPopover(\_:)](showpopover%28__%29.md) method.

# dismissPopover: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Restores the previously visible main bar.

## Declaration

```objectivec
- (void) dismissPopover:(id) sender;
```

<a id="Discussion"></a>

## Discussion

This method has the same effect as the user tapping the optional close button.

## See Also

### Expanding and collapsing a popover

- [showPopover:](showpopover%28__%29.md): Replaces the main bar with this item’s popover bar.
- [makeStandardActivatePopoverGestureRecognizer](makestandardactivatepopovergesturerecognizer%28%29.md): Returns a gesture recognizer, configured to invoke the [showPopover:](showpopover%28__%29.md) method.
