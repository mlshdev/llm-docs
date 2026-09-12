> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/isverticallyresizable](https://developer.apple.com/documentation/appkit/nstext/isverticallyresizable)

# isVerticallyResizable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver changes its height to fit the height of its text.

## Declaration

```swift
var isVerticallyResizable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) it does; if `flag` is [false](https://developer.apple.com/documentation/swift/false) it doesn’t.

## See Also

### Constraining size

- [maxSize](maxsize.md): The receiver’s maximum size.
- [minSize](minsize.md): The receiver’s minimum size.
- [isHorizontallyResizable](ishorizontallyresizable.md): A Boolean that controls whether the receiver changes its width to fit the width of its text.
- [sizeToFit()](sizetofit%28%29.md): Resizes the receiver to fit its text.

# verticallyResizable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver changes its height to fit the height of its text.

## Declaration

```objectivec
@property (getter=isVerticallyResizable) BOOL verticallyResizable;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) it does; if `flag` is [false](https://developer.apple.com/documentation/swift/false) it doesn’t.

## See Also

### Constraining size

- [maxSize](maxsize.md): The receiver’s maximum size.
- [minSize](minsize.md): The receiver’s minimum size.
- [horizontallyResizable](ishorizontallyresizable.md): A Boolean that controls whether the receiver changes its width to fit the width of its text.
- [sizeToFit](sizetofit%28%29.md): Resizes the receiver to fit its text.
