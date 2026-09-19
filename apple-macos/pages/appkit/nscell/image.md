> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscell/image

# image (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image displayed by the cell, if any.

## Declaration

```swift
var image: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the value of this property converts the cell to an image-type cell, if it is not one already. The value of this property is `nil` if the cell is not an image-type cell.

## See Also

### Related Documentation

- [type](type.md): The type of the cell.

# image (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image displayed by the cell, if any.

## Declaration

```objectivec
@property (strong, nullable) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

Setting the value of this property converts the cell to an image-type cell, if it is not one already. The value of this property is `nil` if the cell is not an image-type cell.

## See Also

### Related Documentation

- [type](type.md): The type of the cell.
