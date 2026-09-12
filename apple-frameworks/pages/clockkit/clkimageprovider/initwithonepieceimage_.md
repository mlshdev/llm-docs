> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkimageprovider/initwithonepieceimage:](https://developer.apple.com/documentation/clockkit/clkimageprovider/initwithonepieceimage:)

# initWithOnePieceImage:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates and returns an image provider with the specified one-piece image.

## Declaration

```objectivec
- (instancetype) initWithOnePieceImage:(UIImage *) onePieceImage;
```

## Parameters

- `onePieceImage`: The image to display. The image must be a template image, where only the alpha channel is used to define the image contents. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An image provider with only the one-piece image.

<a id="Discussion"></a>

## Discussion

Use this method to create an image provider with only a one-piece image. The resulting image provider displays the one-piece image in all contexts. After creating the image provider, you can customize the tint color applied to your image by modifying the [tintColor](tintcolor.md) property.

## See Also

### Creating an Image Provider

- [imageProviderWithOnePieceImage:](init%28onepieceimage_%29.md): Deprecated. Creates and returns an image provider with the specified one-piece image.
- [imageProviderWithOnePieceImage:twoPieceImageBackground:twoPieceImageForeground:](init%28onepieceimage_twopieceimagebackground_twopieceimageforeground_%29.md): Deprecated. Creates and returns an image provider with both one-piece and two-piece images.
- [initWithOnePieceImage:twoPieceImageBackground:twoPieceImageForeground:](initwithonepieceimage_twopieceimagebackground_twopieceimageforeground_.md): Deprecated. Creates and returns an image provider with both one-piece and two-piece images.
