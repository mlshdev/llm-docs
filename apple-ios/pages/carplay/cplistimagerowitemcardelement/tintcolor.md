> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitemcardelement/tintcolor](https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/tintcolor)

# tintColor (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A UIColor used to tint the element. When @c showsImageFullHeight is true, the tint color is applied behind the labels at the bottom of the card. Otherwise, this color is part of the gradient color at the bottom of the card.

## Declaration

```swift
@NSCopying var tintColor: UIColor? { get set }
```

<a id="discussion"></a>

## Discussion

If this value is nil, iOS will use secondarySystemBackground color.

# tintColor (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A UIColor used to tint the element. When @c showsImageFullHeight is true, the tint color is applied behind the labels at the bottom of the card. Otherwise, this color is part of the gradient color at the bottom of the card.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIColor * tintColor;
```

<a id="discussion"></a>

## Discussion

If this value is nil, iOS will use secondarySystemBackground color.
