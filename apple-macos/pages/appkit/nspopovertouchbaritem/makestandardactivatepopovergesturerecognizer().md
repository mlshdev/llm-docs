> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopovertouchbaritem/makestandardactivatepopovergesturerecognizer()](https://developer.apple.com/documentation/appkit/nspopovertouchbaritem/makestandardactivatepopovergesturerecognizer())

# makeStandardActivatePopoverGestureRecognizer() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns a gesture recognizer, configured to invoke the [showPopover(\_:)](showpopover%28__%29.md) method.

## Declaration

```swift
func makeStandardActivatePopoverGestureRecognizer() -> NSGestureRecognizer
```

<a id="Discussion"></a>

## Discussion

Use this method to create a gesture recognizer that you then attach to a custom [collapsedRepresentation](collapsedrepresentation.md) view.

## See Also

### Expanding and collapsing a popover

- [showPopover(\_:)](showpopover%28__%29.md): Replaces the main bar with this item’s popover bar.
- [dismissPopover(\_:)](dismisspopover%28__%29.md): Restores the previously visible main bar.

# makeStandardActivatePopoverGestureRecognizer (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns a gesture recognizer, configured to invoke the [showPopover:](showpopover%28__%29.md) method.

## Declaration

```objectivec
- (NSGestureRecognizer *) makeStandardActivatePopoverGestureRecognizer;
```

<a id="Discussion"></a>

## Discussion

Use this method to create a gesture recognizer that you then attach to a custom [collapsedRepresentation](collapsedrepresentation.md) view.

## See Also

### Expanding and collapsing a popover

- [showPopover:](showpopover%28__%29.md): Replaces the main bar with this item’s popover bar.
- [dismissPopover:](dismisspopover%28__%29.md): Restores the previously visible main bar.
