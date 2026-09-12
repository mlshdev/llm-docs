> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopovertouchbaritem/showpopover(_:)](https://developer.apple.com/documentation/appkit/nspopovertouchbaritem/showpopover(_:))

# showPopover(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Replaces the main bar with this item’s popover bar.

## Declaration

```swift
func showPopover(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

If this item is not visible, this method will have no effect.

## See Also

### Expanding and collapsing a popover

- [dismissPopover(\_:)](dismisspopover%28__%29.md): Restores the previously visible main bar.
- [makeStandardActivatePopoverGestureRecognizer()](makestandardactivatepopovergesturerecognizer%28%29.md): Returns a gesture recognizer, configured to invoke the [showPopover(\_:)](showpopover%28__%29.md) method.

# showPopover: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Replaces the main bar with this item’s popover bar.

## Declaration

```objectivec
- (void) showPopover:(id) sender;
```

<a id="Discussion"></a>

## Discussion

If this item is not visible, this method will have no effect.

## See Also

### Expanding and collapsing a popover

- [dismissPopover:](dismisspopover%28__%29.md): Restores the previously visible main bar.
- [makeStandardActivatePopoverGestureRecognizer](makestandardactivatepopovergesturerecognizer%28%29.md): Returns a gesture recognizer, configured to invoke the [showPopover:](showpopover%28__%29.md) method.
