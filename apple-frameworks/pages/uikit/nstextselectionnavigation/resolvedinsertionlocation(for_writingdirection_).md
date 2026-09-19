> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextselectionnavigation/resolvedinsertionlocation(for:writingdirection:)

# resolvedInsertionLocation(for:writingDirection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
