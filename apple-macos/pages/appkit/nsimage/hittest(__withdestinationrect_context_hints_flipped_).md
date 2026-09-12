> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/hittest(_:withdestinationrect:context:hints:flipped:)](https://developer.apple.com/documentation/appkit/nsimage/hittest(_:withdestinationrect:context:hints:flipped:))

# hitTest(\_:withDestinationRect:context:hints:flipped:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns whether the destination rectangle would intersect a non-transparent portion of the image.

## Declaration

```swift
func hitTest(_ testRectDestSpace: NSRect, withDestinationRect imageRectDestSpace: NSRect, context: NSGraphicsContext?, hints: [NSImageRep.HintKey : Any]?, flipped: Bool) -> Bool
```

## Parameters

- `testRectDestSpace`: The rectangle to hit test.
- `imageRectDestSpace`: A rectangle representing the drawn size of the image.
- `context`: A graphics context. This value can be `nil`.
- `hints`: An optional dictionary of hints that provide more context for selecting or generating a `CGImage`, and may override properties of the `referenceContext`. See `Image Hint Dictionary Keys` for a summary of the possible key-value pairs.
- `flipped`: [true](https://developer.apple.com/documentation/swift/true) if the image is flipped, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

YES if the `testRectDestSpace` intersects with non-transparent content within the `imageRectDestSpace`, otherwise NO.

<a id="Discussion"></a>

## Discussion

This method simulates the results of hit-testing the test rectangle as if the image was drawn in the graphics context using the provided hints and respecting the specified flippedness.

# hitTestRect:withImageDestinationRect:context:hints:flipped: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns whether the destination rectangle would intersect a non-transparent portion of the image.

## Declaration

```objectivec
- (BOOL) hitTestRect:(NSRect) testRectDestSpace withImageDestinationRect:(NSRect) imageRectDestSpace context:(NSGraphicsContext *) context hints:(NSDictionary<NSString *,id> *) hints flipped:(BOOL) flipped;
```

## Parameters

- `testRectDestSpace`: The rectangle to hit test.
- `imageRectDestSpace`: A rectangle representing the drawn size of the image.
- `context`: A graphics context. This value can be `nil`.
- `hints`: An optional dictionary of hints that provide more context for selecting or generating a `CGImage`, and may override properties of the `referenceContext`. See `Image Hint Dictionary Keys` for a summary of the possible key-value pairs.
- `flipped`: [true](https://developer.apple.com/documentation/swift/true) if the image is flipped, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

YES if the `testRectDestSpace` intersects with non-transparent content within the `imageRectDestSpace`, otherwise NO.

<a id="Discussion"></a>

## Discussion

This method simulates the results of hit-testing the test rectangle as if the image was drawn in the graphics context using the provided hints and respecting the specified flippedness.
