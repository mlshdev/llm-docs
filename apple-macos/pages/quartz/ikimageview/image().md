> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikimageview/image()

# image() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the image associated with the view, after any image corrections.

## Declaration

```swift
func image() -> Unmanaged<CGImage>!
```

<a id="return-value"></a>

## Return Value

The image.

## See Also

### Getting and Setting Images

- [setImage(\_:imageProperties:)](setimage%28__imageproperties_%29.md): Sets the image to display in an image view.
- [setImageWith(\_:)](setimagewith%28__%29.md): Initializes an image view with the image specified by a URL.

# image (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the image associated with the view, after any image corrections.

## Declaration

```objectivec
- (CGImageRef) image;
```

<a id="return-value"></a>

## Return Value

The image.

## See Also

### Getting and Setting Images

- [setImage:imageProperties:](setimage%28__imageproperties_%29.md): Sets the image to display in an image view.
- [setImageWithURL:](setimagewith%28__%29.md): Initializes an image view with the image specified by a URL.
