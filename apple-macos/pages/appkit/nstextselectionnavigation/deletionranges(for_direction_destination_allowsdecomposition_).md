> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionnavigation/deletionranges(for:direction:destination:allowsdecomposition:)](https://developer.apple.com/documentation/appkit/nstextselectionnavigation/deletionranges(for:direction:destination:allowsdecomposition:))

# deletionRanges(for:direction:destination:allowsDecomposition:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the ranges for deleting the text based on the current selection and movement arguments.

## Declaration

```swift
func deletionRanges(for textSelection: NSTextSelection, direction: NSTextSelectionNavigation.Direction, destination: NSTextSelectionNavigation.Destination, allowsDecomposition: Bool) -> [NSTextRange]
```

## Parameters

- `textSelection`: The text selection.
- `direction`: The [NSTextSelectionNavigation.Direction](direction.md) to consider when calculating the deletion ranges.
- `destination`: The [NSTextSelectionNavigation.Destination](destination.md) that describes the scope of the text selection to consider when calculating the deletion ranges.
- `allowsDecomposition`: A Boolean value that determines if this method operates on composite characters which may be present depending on the characteristics of the script used by `textSelection`.

<a id="return-value"></a>

## Return Value

An array of text ranges to delete.

<a id="Discussion"></a>

## Discussion

The selection after deletion contains a zero-length range starting at the location of the first range returned. The framework ignores the destination when `textSelection` has a non-empty selection. The `allowsDecomposition` parameter only applies to the [NSTextSelectionNavigation.Direction.backward](direction/backward.md) direction and [NSTextSelectionNavigation.Destination.character](destination/character.md) with a zero-length selection.

# deletionRangesForTextSelection:direction:destination:allowsDecomposition: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the ranges for deleting the text based on the current selection and movement arguments.

## Declaration

```objectivec
- (NSArray<NSTextRange *> *) deletionRangesForTextSelection:(NSTextSelection *) textSelection direction:(NSTextSelectionNavigationDirection) direction destination:(NSTextSelectionNavigationDestination) destination allowsDecomposition:(BOOL) allowsDecomposition;
```

## Parameters

- `textSelection`: The text selection.
- `direction`: The [NSTextSelectionNavigationDirection](direction.md) to consider when calculating the deletion ranges.
- `destination`: The [NSTextSelectionNavigationDestination](destination.md) that describes the scope of the text selection to consider when calculating the deletion ranges.
- `allowsDecomposition`: A Boolean value that determines if this method operates on composite characters which may be present depending on the characteristics of the script used by `textSelection`.

<a id="return-value"></a>

## Return Value

An array of text ranges to delete.

<a id="Discussion"></a>

## Discussion

The selection after deletion contains a zero-length range starting at the location of the first range returned. The framework ignores the destination when `textSelection` has a non-empty selection. The `allowsDecomposition` parameter only applies to the [NSTextSelectionNavigationDirectionBackward](direction/backward.md) direction and [NSTextSelectionNavigationDestinationCharacter](destination/character.md) with a zero-length selection.
