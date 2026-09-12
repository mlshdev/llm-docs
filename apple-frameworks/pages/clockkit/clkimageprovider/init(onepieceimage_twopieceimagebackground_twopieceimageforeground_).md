> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkimageprovider/init(onepieceimage:twopieceimagebackground:twopieceimageforeground:)](https://developer.apple.com/documentation/clockkit/clkimageprovider/init(onepieceimage:twopieceimagebackground:twopieceimageforeground:))

# init(onePieceImage:twoPieceImageBackground:twoPieceImageForeground:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns an image provider with both one-piece and two-piece images.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(onePieceImage: UIImage, twoPieceImageBackground: UIImage?, twoPieceImageForeground: UIImage?)
```

## Parameters

- `onePieceImage`: The one-piece image to use. The image must be a template image, where only the alpha channel is used to define the image contents. This parameter must not be `nil`.
- `twoPieceImageBackground`: The background to use for a two-piece image. The image must be a template image, where only the alpha channel is used to define the image contents. This parameter must not be `nil`.
- `twoPieceImageForeground`: The foreground to use for a two-piece image. The image must be a template image, where only the alpha channel is used to define the image contents. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An image provider with both the one-piece and two-piece images.

<a id="Discussion"></a>

## Discussion

Use this method when you want to display a two-piece image in multicolor environments. In monochrome environments, the image provider still displays the one-piece image. After creating the image provider, you can customize the tint color applied to your images by modifying the [tintColor](tintcolor.md) property.

## See Also

### Creating an Image Provider

- [init(onePieceImage:)](init%28onepieceimage_%29.md): Deprecated. Creates and returns an image provider with the specified one-piece image.

# imageProviderWithOnePieceImage:twoPieceImageBackground:twoPieceImageForeground: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns an image provider with both one-piece and two-piece images.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) imageProviderWithOnePieceImage:(UIImage *) onePieceImage twoPieceImageBackground:(UIImage *) twoPieceImageBackground twoPieceImageForeground:(UIImage *) twoPieceImageForeground;
```

## Parameters

- `onePieceImage`: The one-piece image to use. The image must be a template image, where only the alpha channel is used to define the image contents. This parameter must not be `nil`.
- `twoPieceImageBackground`: The background to use for a two-piece image. The image must be a template image, where only the alpha channel is used to define the image contents. This parameter must not be `nil`.
- `twoPieceImageForeground`: The foreground to use for a two-piece image. The image must be a template image, where only the alpha channel is used to define the image contents. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An image provider with both the one-piece and two-piece images.

<a id="Discussion"></a>

## Discussion

Use this method when you want to display a two-piece image in multicolor environments. In monochrome environments, the image provider still displays the one-piece image. After creating the image provider, you can customize the tint color applied to your images by modifying the [tintColor](tintcolor.md) property.

## See Also

### Creating an Image Provider

- [imageProviderWithOnePieceImage:](init%28onepieceimage_%29.md): Deprecated. Creates and returns an image provider with the specified one-piece image.
- [initWithOnePieceImage:](initwithonepieceimage_.md): Deprecated. Creates and returns an image provider with the specified one-piece image.
- [initWithOnePieceImage:twoPieceImageBackground:twoPieceImageForeground:](initwithonepieceimage_twopieceimagebackground_twopieceimageforeground_.md): Deprecated. Creates and returns an image provider with both one-piece and two-piece images.
