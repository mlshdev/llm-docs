> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/hintkey/ctm](https://developer.apple.com/documentation/appkit/nsimagerep/hintkey/ctm)

# ctm (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

A context transform hint.

## Declaration

```swift
static let ctm: NSImageRep.HintKey
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSAffineTransform](https://developer.apple.com/documentation/foundation/nsaffinetransform).

## See Also

### Hint Keys

- [interpolation](interpolation.md): An interpolation hint.
- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md): A layout direction hint.

# NSImageHintCTM (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

A context transform hint.

## Declaration

```objectivec
extern NSImageHintKey const NSImageHintCTM;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSAffineTransform](https://developer.apple.com/documentation/foundation/nsaffinetransform).

## See Also

### Hint Keys

- [NSImageHintInterpolation](interpolation.md): An interpolation hint.
- [NSImageHintUserInterfaceLayoutDirection](userinterfacelayoutdirection.md): A layout direction hint.
