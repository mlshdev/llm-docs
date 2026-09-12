> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/maxpossiblepositionofdivider(at:)](https://developer.apple.com/documentation/appkit/nssplitview/maxpossiblepositionofdivider(at:))

# maxPossiblePositionOfDivider(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the maximum possible position of the divider at the specified index.

## Declaration

```swift
func maxPossiblePositionOfDivider(at dividerIndex: Int) -> CGFloat
```

## Parameters

- `dividerIndex`: The index of the divider.

<a id="return-value"></a>

## Return Value

A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) that specifies the maximum possible position of the divider.

<a id="Discussion"></a>

## Discussion

The position is *possible* because the bounds of the split view and the current position of other dividers dictate it. *Allowable* positions result from letting the delegate apply constraints to the possible positions.

You can invoke this method to determine the range of values that you can pass to [setPosition(\_:ofDividerAt:)](setposition%28__ofdividerat_%29.md). You can also invoke it from delegate methods like [splitView(\_:constrainSplitPosition:ofSubviewAt:)](../nssplitviewdelegate/splitview%28__constrainsplitposition_ofsubviewat_%29.md) to implement relatively complex behaviors that depend on the current state of the split view.

The result of invoking this method when you haven’t invoked [adjustSubviews()](adjustsubviews%28%29.md), and the subview frames are invalid, is undefined.

## See Also

### Constraining Split Position

- [minPossiblePositionOfDivider(at:)](minpossiblepositionofdivider%28at_%29.md): Returns the minimum possible position of the divider at the specified index.
- [setPosition(\_:ofDividerAt:)](setposition%28__ofdividerat_%29.md): Updates the location of a divider you specify by index.

# maxPossiblePositionOfDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the maximum possible position of the divider at the specified index.

## Declaration

```objectivec
- (CGFloat) maxPossiblePositionOfDividerAtIndex:(NSInteger) dividerIndex;
```

## Parameters

- `dividerIndex`: The index of the divider.

<a id="return-value"></a>

## Return Value

A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) that specifies the maximum possible position of the divider.

<a id="Discussion"></a>

## Discussion

The position is *possible* because the bounds of the split view and the current position of other dividers dictate it. *Allowable* positions result from letting the delegate apply constraints to the possible positions.

You can invoke this method to determine the range of values that you can pass to [setPosition:ofDividerAtIndex:](setposition%28__ofdividerat_%29.md). You can also invoke it from delegate methods like [splitView:constrainSplitPosition:ofSubviewAt:](../nssplitviewdelegate/splitview%28__constrainsplitposition_ofsubviewat_%29.md) to implement relatively complex behaviors that depend on the current state of the split view.

The result of invoking this method when you haven’t invoked [adjustSubviews](adjustsubviews%28%29.md), and the subview frames are invalid, is undefined.

## See Also

### Constraining Split Position

- [minPossiblePositionOfDividerAtIndex:](minpossiblepositionofdivider%28at_%29.md): Returns the minimum possible position of the divider at the specified index.
- [setPosition:ofDividerAtIndex:](setposition%28__ofdividerat_%29.md): Updates the location of a divider you specify by index.
