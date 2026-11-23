> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/thumbnail

# thumbnail (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The thumbnail object that provides the image content.

## Declaration

```swift
var thumbnail: CPThumbnailImage? { get set }
```

<a id="discussion"></a>

## Discussion

If you initialized the element with a thumbnail image, use this property to update the thumbnail image for your type. For example, you might assign a new thumbnail with updated overlay content. If you didn’t initialize your type with a thumbnail object, the value in this property is `nil` initially.

## See Also

### Getting the image behavior

- [showsImageFullHeight](showsimagefullheight.md): A Boolean value that indicates whether to use a full-height image for the card.

# thumbnail (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The thumbnail object that provides the image content.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CPThumbnailImage * thumbnail;
```

<a id="discussion"></a>

## Discussion

If you initialized the element with a thumbnail image, use this property to update the thumbnail image for your type. For example, you might assign a new thumbnail with updated overlay content. If you didn’t initialize your type with a thumbnail object, the value in this property is `nil` initially.

## See Also

### Getting the image behavior

- [showsImageFullHeight](showsimagefullheight.md): A Boolean value that indicates whether to use a full-height image for the card.
