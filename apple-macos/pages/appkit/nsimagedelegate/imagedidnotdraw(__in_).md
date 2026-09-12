> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagedelegate/imagedidnotdraw(_:in:)](https://developer.apple.com/documentation/appkit/nsimagedelegate/imagedidnotdraw(_:in:))

# imageDidNotDraw(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the image object is unable, for whatever reason, to lock focus on its image or draw in the specified rectangle.

## Declaration

```swift
nonisolated optional func imageDidNotDraw(_ sender: NSImage, in rect: NSRect) -> NSImage?
```

## Parameters

- `sender`: The `NSImage` object that encountered the problem.
- `rect`: The rectangle that the image object was attempting to draw.

<a id="return-value"></a>

## Return Value

An `NSImage` to draw in place of the one in `sender`, or `nil` if the delegate wants to draw the image itself.

<a id="Discussion"></a>

## Discussion

The delegate can do one of the following:

- Return another `NSImage` object to draw in the sender’s place.
- Draw the image itself and return `nil`.
- Simply return `nil` to indicate that `sender` should give up on the attempt at drawing the image.

## See Also

### Related Documentation

- [NSImage](../nsimage.md): A high-level interface for manipulating image data.

# imageDidNotDraw:inRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the image object is unable, for whatever reason, to lock focus on its image or draw in the specified rectangle.

## Declaration

```objectivec
- (NSImage *) imageDidNotDraw:(NSImage *) sender inRect:(NSRect) rect;
```

## Parameters

- `sender`: The `NSImage` object that encountered the problem.
- `rect`: The rectangle that the image object was attempting to draw.

<a id="return-value"></a>

## Return Value

An `NSImage` to draw in place of the one in `sender`, or `nil` if the delegate wants to draw the image itself.

<a id="Discussion"></a>

## Discussion

The delegate can do one of the following:

- Return another `NSImage` object to draw in the sender’s place.
- Draw the image itself and return `nil`.
- Simply return `nil` to indicate that `sender` should give up on the attempt at drawing the image.

## See Also

### Related Documentation

- [NSImage](../nsimage.md): A high-level interface for manipulating image data.
