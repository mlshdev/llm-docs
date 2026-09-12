> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitemcardelement/init(image:showsimagefullheight:title:subtitle:tintcolor:)](https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/init(image:showsimagefullheight:title:subtitle:tintcolor:))

# init(image:showsImageFullHeight:title:subtitle:tintColor:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a card element with an image.

## Declaration

```swift
init(image: UIImage, showsImageFullHeight: Bool, title: String?, subtitle: String?, tintColor: UIColor?)
```

## Parameters

- `image`: The image to display in the card.
- `showsImageFullHeight`: Whether the image should fill the full height of the card.
- `title`: The title text for the card.
- `subtitle`: The subtitle text for the card.
- `tintColor`: The tint color for the card.

# initWithImage:showsImageFullHeight:title:subtitle:tintColor: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a card element with an image.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image showsImageFullHeight:(BOOL) showsImageFullHeight title:(NSString *) title subtitle:(NSString *) subtitle tintColor:(UIColor *) tintColor;
```

## Parameters

- `image`: The image to display in the card.
- `showsImageFullHeight`: Whether the image should fill the full height of the card.
- `title`: The title text for the card.
- `subtitle`: The subtitle text for the card.
- `tintColor`: The tint color for the card.
