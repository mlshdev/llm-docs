> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectiondatasource/enumeratecontainerboundaries(from:reverse:using:)](https://developer.apple.com/documentation/uikit/nstextselectiondatasource/enumeratecontainerboundaries(from:reverse:using:))

# enumerateContainerBoundaries(from:reverse:using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates all the container boundaries starting from the location you specify.

## Declaration

```swift
optional func enumerateContainerBoundaries(from location: any NSTextLocation, reverse: Bool, using block: (any NSTextLocation, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `location`: The location where the enumeration starts.
- `reverse`: A Boolean value that indicates the enumeration starts at the end of the container.
- `block`: AA closure to invoke to evaluate the container boundaries; end the enumeration early by returning `false`.

<a id="Discussion"></a>

## Discussion

This is an optional method you implement to enumerate the text up to the container or page boundary when the text selection data provider supports this layout functionality.

## See Also

### Enumerating components of the selection

- [enumerateCaretOffsetsInLineFragment(at:using:)](enumeratecaretoffsetsinlinefragment%28at_using_%29.md): Enumerates all the insertion point caret offsets from left to right in visual order.
- [enumerateSubstrings(from:options:using:)](enumeratesubstrings%28from_options_using_%29.md): Enumerates the textual segment boundaries starting at the location you specify.

# enumerateContainerBoundariesFromLocation:reverse:usingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates all the container boundaries starting from the location you specify.

## Declaration

```objectivec
- (void) enumerateContainerBoundariesFromLocation:(id<NSTextLocation>) location reverse:(BOOL) reverse usingBlock:(void (^)(id<NSTextLocation>boundaryLocation, BOOL *stop)) block;
```

## Parameters

- `location`: The location where the enumeration starts.
- `reverse`: A Boolean value that indicates the enumeration starts at the end of the container.
- `block`: AA closure to invoke to evaluate the container boundaries; end the enumeration early by returning `false`.

<a id="Discussion"></a>

## Discussion

This is an optional method you implement to enumerate the text up to the container or page boundary when the text selection data provider supports this layout functionality.

## See Also

### Enumerating components of the selection

- [enumerateCaretOffsetsInLineFragmentAtLocation:usingBlock:](enumeratecaretoffsetsinlinefragment%28at_using_%29.md): Enumerates all the insertion point caret offsets from left to right in visual order.
- [enumerateSubstringsFromLocation:options:usingBlock:](enumeratesubstrings%28from_options_using_%29.md): Enumerates the textual segment boundaries starting at the location you specify.
