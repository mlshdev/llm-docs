> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/cancelfindindicator()](https://developer.apple.com/documentation/appkit/nstextfinder/cancelfindindicator())

# cancelFindIndicator() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Cancels the find indicator immediately.

## Declaration

```swift
func cancelFindIndicator()
```

<a id="Discussion"></a>

## Discussion

There may be some circumstances where the find indicator should be immediately cancelled or hidden, such as when the view’s content or selection is changed without the knowledge of the text finder. This method will immediately cancel the current find indicator.

The `NSTextFinder` and `NSView` classes will handle the find indicator correctly when a content view is resized, moved, or removed from the view hierarchy. If your content view’s scrolling is done by an `NSScrollView`, the find indicator will also be handled for you during scrolling.

## See Also

### Related Documentation

- [findIndicatorNeedsUpdate](findindicatorneedsupdate.md): Invoke to specify that the find indicator needs updating when not contained within a scroll view.

### Validating and Performing Text Finding

- [performAction(\_:)](performaction%28__%29.md): Performs the specified text finding action.
- [validateAction(\_:)](validateaction%28__%29.md): Allows validation of the find action before performing.

# cancelFindIndicator (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Cancels the find indicator immediately.

## Declaration

```objectivec
- (void) cancelFindIndicator;
```

<a id="Discussion"></a>

## Discussion

There may be some circumstances where the find indicator should be immediately cancelled or hidden, such as when the view’s content or selection is changed without the knowledge of the text finder. This method will immediately cancel the current find indicator.

The `NSTextFinder` and `NSView` classes will handle the find indicator correctly when a content view is resized, moved, or removed from the view hierarchy. If your content view’s scrolling is done by an `NSScrollView`, the find indicator will also be handled for you during scrolling.

## See Also

### Related Documentation

- [findIndicatorNeedsUpdate](findindicatorneedsupdate.md): Invoke to specify that the find indicator needs updating when not contained within a scroll view.

### Validating and Performing Text Finding

- [performAction:](performaction%28__%29.md): Performs the specified text finding action.
- [validateAction:](validateaction%28__%29.md): Allows validation of the find action before performing.
