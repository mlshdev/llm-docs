> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkimageprovider/initwithonepieceimage:twopieceimagebackground:twopieceimageforeground:](https://developer.apple.com/documentation/clockkit/clkimageprovider/initwithonepieceimage:twopieceimagebackground:twopieceimageforeground:)

# initWithOnePieceImage:twoPieceImageBackground:twoPieceImageForeground:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates and returns an image provider with both one-piece and two-piece images.

## Declaration

```objectivec
- (instancetype) initWithOnePieceImage:(UIImage *) onePieceImage twoPieceImageBackground:(UIImage *) twoPieceImageBackground twoPieceImageForeground:(UIImage *) twoPieceImageForeground;
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
- [imageProviderWithOnePieceImage:twoPieceImageBackground:twoPieceImageForeground:](init%28onepieceimage_twopieceimagebackground_twopieceimageforeground_%29.md): Deprecated. Creates and returns an image provider with both one-piece and two-piece images.
