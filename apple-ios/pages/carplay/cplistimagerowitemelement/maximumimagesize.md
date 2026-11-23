> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemelement/maximumimagesize

# maximumImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The maximum dimensions for the element’s image.

## Declaration

```swift
class var maximumImageSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

Use this property to retrieve the standard maximum image dimensions for images. Card elements define an additional set of dimensions for images that fill the content.

When the [showsImageFullHeight](../cplistimagerowitemcardelement/showsimagefullheight.md) property is `false`, this property defines the maximum size for images. When creating images, adjust the size of your image based on the current maximum value.

## See Also

### Getting the element’s content

- [image](image.md): The image associated with the element.

# maximumImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The maximum dimensions for the element’s image.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumImageSize;
```

<a id="discussion"></a>

## Discussion

Use this property to retrieve the standard maximum image dimensions for images. Card elements define an additional set of dimensions for images that fill the content.

When the [showsImageFullHeight](../cplistimagerowitemcardelement/showsimagefullheight.md) property is `false`, this property defines the maximum size for images. When creating images, adjust the size of your image based on the current maximum value.

## See Also

### Getting the element’s content

- [image](image.md): The image associated with the element.
