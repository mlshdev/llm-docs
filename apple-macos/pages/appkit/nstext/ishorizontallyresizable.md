> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/ishorizontallyresizable](https://developer.apple.com/documentation/appkit/nstext/ishorizontallyresizable)

# isHorizontallyResizable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver changes its width to fit the width of its text.

## Declaration

```swift
var isHorizontallyResizable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) it does; if `flag` is [false](https://developer.apple.com/documentation/swift/false) it doesn’t

## See Also

### Constraining size

- [maxSize](maxsize.md): The receiver’s maximum size.
- [minSize](minsize.md): The receiver’s minimum size.
- [isVerticallyResizable](isverticallyresizable.md): A Boolean that controls whether the receiver changes its height to fit the height of its text.
- [sizeToFit()](sizetofit%28%29.md): Resizes the receiver to fit its text.

# horizontallyResizable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver changes its width to fit the width of its text.

## Declaration

```objectivec
@property (getter=isHorizontallyResizable) BOOL horizontallyResizable;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) it does; if `flag` is [false](https://developer.apple.com/documentation/swift/false) it doesn’t

## See Also

### Constraining size

- [maxSize](maxsize.md): The receiver’s maximum size.
- [minSize](minsize.md): The receiver’s minimum size.
- [verticallyResizable](isverticallyresizable.md): A Boolean that controls whether the receiver changes its height to fit the height of its text.
- [sizeToFit](sizetofit%28%29.md): Resizes the receiver to fit its text.
