> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/imagealignment()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/imagealignment())

# imageAlignment() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the position of the cell’s image in the frame.

## Declaration

```swift
func imageAlignment() -> NSImageAlignment
```

<a id="return-value"></a>

## Return Value

The alignment of the image. See [NSImageAlignment](../../appkit/nsimagealignment.md) for possible values.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to customize the image alignment.

The image frame will be computed automatically from the image container frame by taking in account the image alignment and the image aspect ratio.

## See Also

### Cell Content Display

- [opacity()](opacity%28%29.md): Returns the opacity of the receiver.

# imageAlignment (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the position of the cell’s image in the frame.

## Declaration

```objectivec
- (NSImageAlignment) imageAlignment;
```

<a id="return-value"></a>

## Return Value

The alignment of the image. See [NSImageAlignment](../../appkit/nsimagealignment.md) for possible values.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to customize the image alignment.

The image frame will be computed automatically from the image container frame by taking in account the image alignment and the image aspect ratio.

## See Also

### Cell Content Display

- [opacity](opacity%28%29.md): Returns the opacity of the receiver.
