> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberflowlayout/invalidatelayoutforitems(at:)](https://developer.apple.com/documentation/appkit/nsscrubberflowlayout/invalidatelayoutforitems(at:))

# invalidateLayoutForItems(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Informs the scrubber that it should perform a new layout pass for the items at the specified indexes.

## Declaration

```swift
func invalidateLayoutForItems(at invalidItemIndexes: IndexSet)
```

## Parameters

- `invalidItemIndexes`: An index set containing the indexes of the items whose layout should be invalidated.

# invalidateLayoutForItemsAtIndexes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Informs the scrubber that it should perform a new layout pass for the items at the specified indexes.

## Declaration

```objectivec
- (void) invalidateLayoutForItemsAtIndexes:(NSIndexSet *) invalidItemIndexes;
```

## Parameters

- `invalidItemIndexes`: An index set containing the indexes of the items whose layout should be invalidated.
