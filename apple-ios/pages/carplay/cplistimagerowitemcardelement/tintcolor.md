> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/tintcolor

# tintColor (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The color to use for the card’s background.

## Declaration

```swift
@NSCopying var tintColor: UIColor? { get set }
```

<a id="discussion"></a>

## Discussion

When the value in the `showsImageFullHeight` property is `false`, CarPlay fills the card shape with this color before layering the image and text on top of the card. When the value in `showsImageFullHeight` is `true`, CarPlay applies the tint color behind the labels at the bottom of the card.

If the value in this property is `nil`, CarPlay uses the [secondarySystemBackground](https://developer.apple.com/documentation/uikit/uicolor/secondarysystembackground) color.

## See Also

### Getting the element’s content

- [title](title.md): The primary text for the element.
- [subtitle](subtitle.md): The secondary text for the element.

# tintColor (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The color to use for the card’s background.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIColor * tintColor;
```

<a id="discussion"></a>

## Discussion

When the value in the `showsImageFullHeight` property is `false`, CarPlay fills the card shape with this color before layering the image and text on top of the card. When the value in `showsImageFullHeight` is `true`, CarPlay applies the tint color behind the labels at the bottom of the card.

If the value in this property is `nil`, CarPlay uses the [secondarySystemBackgroundColor](https://developer.apple.com/documentation/uikit/uicolor/secondarysystembackground) color.

## See Also

### Getting the element’s content

- [title](title.md): The primary text for the element.
- [subtitle](subtitle.md): The secondary text for the element.
