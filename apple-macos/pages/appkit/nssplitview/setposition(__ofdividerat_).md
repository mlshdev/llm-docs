> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/setposition(_:ofdividerat:)](https://developer.apple.com/documentation/appkit/nssplitview/setposition(_:ofdividerat:))

# setPosition(\_:ofDividerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Updates the location of a divider you specify by index.

## Declaration

```swift
func setPosition(_ position: CGFloat, ofDividerAt dividerIndex: Int)
```

## Parameters

- `position`: The position of the divider.
- `dividerIndex`: The index of the divider.

<a id="Discussion"></a>

## Discussion

One of the views adjacent to the divider may collapse because the method’s default implementation assumes a person is dragging the divider to the new location. The Auto Layout system collapses the view if it can’t satisfy the view’s constraints — typically imposed by its delegate — with the divider’s new location.

[NSSplitView](../nssplitview.md) doesn’t invoke this method.

## See Also

### Constraining Split Position

- [minPossiblePositionOfDivider(at:)](minpossiblepositionofdivider%28at_%29.md): Returns the minimum possible position of the divider at the specified index.
- [maxPossiblePositionOfDivider(at:)](maxpossiblepositionofdivider%28at_%29.md): Returns the maximum possible position of the divider at the specified index.

# setPosition:ofDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Updates the location of a divider you specify by index.

## Declaration

```objectivec
- (void) setPosition:(CGFloat) position ofDividerAtIndex:(NSInteger) dividerIndex;
```

## Parameters

- `position`: The position of the divider.
- `dividerIndex`: The index of the divider.

<a id="Discussion"></a>

## Discussion

One of the views adjacent to the divider may collapse because the method’s default implementation assumes a person is dragging the divider to the new location. The Auto Layout system collapses the view if it can’t satisfy the view’s constraints — typically imposed by its delegate — with the divider’s new location.

[NSSplitView](../nssplitview.md) doesn’t invoke this method.

## See Also

### Constraining Split Position

- [minPossiblePositionOfDividerAtIndex:](minpossiblepositionofdivider%28at_%29.md): Returns the minimum possible position of the divider at the specified index.
- [maxPossiblePositionOfDividerAtIndex:](maxpossiblepositionofdivider%28at_%29.md): Returns the maximum possible position of the divider at the specified index.
