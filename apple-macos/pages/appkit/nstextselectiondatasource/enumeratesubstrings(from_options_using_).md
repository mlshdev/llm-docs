> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectiondatasource/enumeratesubstrings(from:options:using:)](https://developer.apple.com/documentation/appkit/nstextselectiondatasource/enumeratesubstrings(from:options:using:))

# enumerateSubstrings(from:options:using:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Enumerates the textual segment boundaries starting at the location you specify.

## Declaration

```swift
func enumerateSubstrings(from location: any NSTextLocation, options: NSString.EnumerationOptions = [], using block: (String?, NSTextRange, NSTextRange?, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `location`: The location where the enumeration starts.
- `options`: One or more of the available [NSString.EnumerationOptions](https://developer.apple.com/documentation/foundation/nsstring/enumerationoptions).
- `block`: A closure to invoke to evaluate the substrings; end the enumeration early by returning `false`.

<a id="Discussion"></a>

## Discussion

## See Also

### Enumerating components of the selection

- [enumerateCaretOffsetsInLineFragment(at:using:)](enumeratecaretoffsetsinlinefragment%28at_using_%29.md): Enumerates all the insertion point caret offsets from left to right in visual order.
- [enumerateContainerBoundaries(from:reverse:using:)](enumeratecontainerboundaries%28from_reverse_using_%29.md): Enumerates all the container boundaries starting from the location you specify.

# enumerateSubstringsFromLocation:options:usingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Enumerates the textual segment boundaries starting at the location you specify.

## Declaration

```objectivec
- (void) enumerateSubstringsFromLocation:(id<NSTextLocation>) location options:(NSStringEnumerationOptions) options usingBlock:(void (^)(NSString *substring, NSTextRange *substringRange, NSTextRange *enclosingRange, BOOL *stop)) block;
```

## Parameters

- `location`: The location where the enumeration starts.
- `options`: One or more of the available [NSStringEnumerationOptions](https://developer.apple.com/documentation/foundation/nsstring/enumerationoptions).
- `block`: A closure to invoke to evaluate the substrings; end the enumeration early by returning `false`.

<a id="Discussion"></a>

## Discussion

## See Also

### Enumerating components of the selection

- [enumerateCaretOffsetsInLineFragmentAtLocation:usingBlock:](enumeratecaretoffsetsinlinefragment%28at_using_%29.md): Enumerates all the insertion point caret offsets from left to right in visual order.
- [enumerateContainerBoundariesFromLocation:reverse:usingBlock:](enumeratecontainerboundaries%28from_reverse_using_%29.md): Enumerates all the container boundaries starting from the location you specify.
