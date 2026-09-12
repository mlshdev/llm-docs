> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/setimagewith(_:)](https://developer.apple.com/documentation/quartz/ikimageview/setimagewith(_:))

# setImageWith(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes an image view with the image specified by a URL.

## Declaration

```swift
func setImageWith(_ url: URL!)
```

## Parameters

- `url`: The URL that specifies the location of the image.

<a id="Discussion"></a>

## Discussion

This method is the preferred initializer for RAW images. If you use this method for a TIFF file that contains multiple images, only the first image is displayed.

## See Also

### Getting and Setting Images

- [image()](image%28%29.md): Returns the image associated with the view, after any image corrections.
- [setImage(\_:imageProperties:)](setimage%28__imageproperties_%29.md): Sets the image to display in an image view.

# setImageWithURL: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes an image view with the image specified by a URL.

## Declaration

```objectivec
- (void) setImageWithURL:(NSURL *) url;
```

## Parameters

- `url`: The URL that specifies the location of the image.

<a id="Discussion"></a>

## Discussion

This method is the preferred initializer for RAW images. If you use this method for a TIFF file that contains multiple images, only the first image is displayed.

## See Also

### Getting and Setting Images

- [image](image%28%29.md): Returns the image associated with the view, after any image corrections.
- [setImage:imageProperties:](setimage%28__imageproperties_%29.md): Sets the image to display in an image view.
