> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/setimage(_:imageproperties:)](https://developer.apple.com/documentation/quartz/ikimageview/setimage(_:imageproperties:))

# setImage(\_:imageProperties:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the image to display in an image view.

## Declaration

```swift
func setImage(_ image: CGImage!, imageProperties metaData: [AnyHashable : Any]!)
```

## Parameters

- `image`: The image to set.
- `metaData`: A dictionary that contains metadata that describes the image.

## See Also

### Related Documentation

- [imageProperties()](imageproperties%28%29.md): Returns the metadata for the image in the view.

### Getting and Setting Images

- [image()](image%28%29.md): Returns the image associated with the view, after any image corrections.
- [setImageWith(\_:)](setimagewith%28__%29.md): Initializes an image view with the image specified by a URL.

# setImage:imageProperties: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the image to display in an image view.

## Declaration

```objectivec
- (void) setImage:(CGImageRef) image imageProperties:(NSDictionary *) metaData;
```

## Parameters

- `image`: The image to set.
- `metaData`: A dictionary that contains metadata that describes the image.

## See Also

### Related Documentation

- [imageProperties](imageproperties%28%29.md): Returns the metadata for the image in the view.

### Getting and Setting Images

- [image](image%28%29.md): Returns the image associated with the view, after any image corrections.
- [setImageWithURL:](setimagewith%28__%29.md): Initializes an image view with the image specified by a URL.
