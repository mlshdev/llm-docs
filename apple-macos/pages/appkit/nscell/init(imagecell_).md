> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/init(imagecell:)](https://developer.apple.com/documentation/appkit/nscell/init(imagecell:))

# init(imageCell:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an `NSCell` object initialized with the specified image and set to have the cell’s default menu.

## Declaration

```swift
init(imageCell image: NSImage?)
```

## Parameters

- `image`: The image to use for the cell. If this parameter is `nil`, no image is set.

<a id="return-value"></a>

## Return Value

An initialized `NSCell` object, or `nil` if the cell could not be initialized.

<a id="Discussion"></a>

## Discussion

This is one of four designated initializers you must implement when subclassing. See [Designated Initializers](../nscell.md#Designated-Initializers) for the complete list.

## See Also

### Related Documentation

- [NSCell](../nscell.md): A mechanism for displaying text or images in a view object without the overhead of a full [NSView](../nsview.md) subclass.

### Initializing a Cell

- [init(textCell:)](init%28textcell_%29.md): Returns an NSCell object initialized with the specified string and set to have the cell’s default menu.

# initImageCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an `NSCell` object initialized with the specified image and set to have the cell’s default menu.

## Declaration

```objectivec
- (instancetype) initImageCell:(NSImage *) image;
```

## Parameters

- `image`: The image to use for the cell. If this parameter is `nil`, no image is set.

<a id="return-value"></a>

## Return Value

An initialized `NSCell` object, or `nil` if the cell could not be initialized.

<a id="Discussion"></a>

## Discussion

This is one of four designated initializers you must implement when subclassing. See [Designated Initializers](../nscell.md#Designated-Initializers) for the complete list.

## See Also

### Related Documentation

- [NSCell](../nscell.md): A mechanism for displaying text or images in a view object without the overhead of a full [NSView](../nsview.md) subclass.

### Initializing a Cell

- [initTextCell:](init%28textcell_%29.md): Returns an NSCell object initialized with the specified string and set to have the cell’s default menu.
