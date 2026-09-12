> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectiondatasource/enumeratecaretoffsetsinlinefragment(at:using:)](https://developer.apple.com/documentation/appkit/nstextselectiondatasource/enumeratecaretoffsetsinlinefragment(at:using:))

# enumerateCaretOffsetsInLineFragment(at:using:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Enumerates all the insertion point caret offsets from left to right in visual order.

## Declaration

```swift
func enumerateCaretOffsetsInLineFragment(at location: any NSTextLocation, using block: (CGFloat, any NSTextLocation, Bool, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `location`: The `NSTextLocation` to start from.
- `block`: The closure to invoke once for each logical caret edge in the line fragment, in left-to-right visual order. End the enumeration early by returning `false`.

<a id="Discussion"></a>

## Discussion

The `caretOffset` is in the coordinate system for the text container. When `leadingEdge` is `true`, it indicates that `caretOffset` is at the logical edge preceding the character. For left-to-right characters, the caret is on the left, and on the right for right-to-left characters.

## See Also

### Enumerating components of the selection

- [enumerateContainerBoundaries(from:reverse:using:)](enumeratecontainerboundaries%28from_reverse_using_%29.md): Enumerates all the container boundaries starting from the location you specify.
- [enumerateSubstrings(from:options:using:)](enumeratesubstrings%28from_options_using_%29.md): Enumerates the textual segment boundaries starting at the location you specify.

# enumerateCaretOffsetsInLineFragmentAtLocation:usingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Enumerates all the insertion point caret offsets from left to right in visual order.

## Declaration

```objectivec
- (void) enumerateCaretOffsetsInLineFragmentAtLocation:(id<NSTextLocation>) location usingBlock:(void (^)(CGFloat caretOffset, id<NSTextLocation>location, BOOL leadingEdge, BOOL *stop)) block;
```

## Parameters

- `location`: The `NSTextLocation` to start from.
- `block`: The closure to invoke once for each logical caret edge in the line fragment, in left-to-right visual order. End the enumeration early by returning `false`.

<a id="Discussion"></a>

## Discussion

The `caretOffset` is in the coordinate system for the text container. When `leadingEdge` is `true`, it indicates that `caretOffset` is at the logical edge preceding the character. For left-to-right characters, the caret is on the left, and on the right for right-to-left characters.

## See Also

### Enumerating components of the selection

- [enumerateContainerBoundariesFromLocation:reverse:usingBlock:](enumeratecontainerboundaries%28from_reverse_using_%29.md): Enumerates all the container boundaries starting from the location you specify.
- [enumerateSubstringsFromLocation:options:usingBlock:](enumeratesubstrings%28from_options_using_%29.md): Enumerates the textual segment boundaries starting at the location you specify.
