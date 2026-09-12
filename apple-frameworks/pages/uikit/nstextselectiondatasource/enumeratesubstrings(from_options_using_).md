> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectiondatasource/enumeratesubstrings(from:options:using:)](https://developer.apple.com/documentation/uikit/nstextselectiondatasource/enumeratesubstrings(from:options:using:))

# enumerateSubstrings(from:options:using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates the textual segment boundaries starting at the location you specify.

## Declaration

```swift
func enumerateSubstrings(from location: any NSTextLocation, options: NSString.EnumerationOptions = [], using block: (String?, NSTextRange, NSTextRange?, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `location`: The location where the enumeration starts.
- `options`: One or more of the available [NSString.EnumerationOptions](../../foundation/nsstring/enumerationoptions.md).
- `block`: A closure to invoke to evaluate the substrings; end the enumeration early by returning `false`.

<a id="Discussion"></a>

## Discussion

## See Also

### Enumerating components of the selection

- [enumerateCaretOffsetsInLineFragment(at:using:)](enumeratecaretoffsetsinlinefragment%28at_using_%29.md): Enumerates all the insertion point caret offsets from left to right in visual order.
- [enumerateContainerBoundaries(from:reverse:using:)](enumeratecontainerboundaries%28from_reverse_using_%29.md): Enumerates all the container boundaries starting from the location you specify.

# enumerateSubstringsFromLocation:options:usingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates the textual segment boundaries starting at the location you specify.

## Declaration

```objectivec
- (void) enumerateSubstringsFromLocation:(id<NSTextLocation>) location options:(NSStringEnumerationOptions) options usingBlock:(void (^)(NSString *substring, NSTextRange *substringRange, NSTextRange *enclosingRange, BOOL *stop)) block;
```

## Parameters

- `location`: The location where the enumeration starts.
- `options`: One or more of the available [NSStringEnumerationOptions](../../foundation/nsstring/enumerationoptions.md).
- `block`: A closure to invoke to evaluate the substrings; end the enumeration early by returning `false`.

<a id="Discussion"></a>

## Discussion

## See Also

### Enumerating components of the selection

- [enumerateCaretOffsetsInLineFragmentAtLocation:usingBlock:](enumeratecaretoffsetsinlinefragment%28at_using_%29.md): Enumerates all the insertion point caret offsets from left to right in visual order.
- [enumerateContainerBoundariesFromLocation:reverse:usingBlock:](enumeratecontainerboundaries%28from_reverse_using_%29.md): Enumerates all the container boundaries starting from the location you specify.
