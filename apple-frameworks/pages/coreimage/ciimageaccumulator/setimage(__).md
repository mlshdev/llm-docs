> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageaccumulator/setimage(_:)](https://developer.apple.com/documentation/coreimage/ciimageaccumulator/setimage(_:))

# setImage(\_:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Sets the contents of the image accumulator to the contents of the specified image object.

## Declaration

```swift
func setImage(_ image: CIImage)
```

## Parameters

- `image`: The image object whose contents you want to assign to the image accumulator.

## See Also

### Setting an Image

- [setImage(\_:dirtyRect:)](setimage%28__dirtyrect_%29.md): Updates an image accumulator with a subregion of an image object.

# setImage: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Sets the contents of the image accumulator to the contents of the specified image object.

## Declaration

```objectivec
- (void) setImage:(CIImage *) image;
```

## Parameters

- `image`: The image object whose contents you want to assign to the image accumulator.

## See Also

### Setting an Image

- [setImage:dirtyRect:](setimage%28__dirtyrect_%29.md): Updates an image accumulator with a subregion of an image object.
