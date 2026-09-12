> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionnavigation/resolvedinsertionlocation(for:writingdirection:)](https://developer.apple.com/documentation/appkit/nstextselectionnavigation/resolvedinsertionlocation(for:writingdirection:))

# resolvedInsertionLocation(for:writingDirection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the location for inserting the next input depending on the state of the current and secondary selections.

## Declaration

```swift
func resolvedInsertionLocation(for textSelection: NSTextSelection, writingDirection: NSTextSelectionNavigation.WritingDirection) -> (any NSTextLocation)?
```

## Parameters

- `textSelection`: The text selection.
- `writingDirection`: The [NSTextSelectionNavigation.WritingDirection](writingdirection.md) direction.

<a id="return-value"></a>

## Return Value

Returns an `NSTextLocation` when the `textSelection.isLogical = false AND` `secondarySelectionLocation != nil`. Otherwise, returns nil.

# resolvedInsertionLocationForTextSelection:writingDirection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the location for inserting the next input depending on the state of the current and secondary selections.

## Declaration

```objectivec
- (id<NSTextLocation>) resolvedInsertionLocationForTextSelection:(NSTextSelection *) textSelection writingDirection:(NSTextSelectionNavigationWritingDirection) writingDirection;
```

## Parameters

- `textSelection`: The text selection.
- `writingDirection`: The [NSTextSelectionNavigationWritingDirection](writingdirection.md) direction.

<a id="return-value"></a>

## Return Value

Returns an `NSTextLocation` when the `textSelection.isLogical = false AND` `secondarySelectionLocation != nil`. Otherwise, returns nil.
