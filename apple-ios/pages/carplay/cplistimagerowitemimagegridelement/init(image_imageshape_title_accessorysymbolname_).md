> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitemimagegridelement/init(image:imageshape:title:accessorysymbolname:)](https://developer.apple.com/documentation/carplay/cplistimagerowitemimagegridelement/init(image:imageshape:title:accessorysymbolname:))

# init(image:imageShape:title:accessorySymbolName:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize an element that is constituted of an image and an image shape.

## Declaration

```swift
init(image: UIImage, imageShape: CPListImageRowItemImageGridElement.Shape, title: String, accessorySymbolName: String?)
```

## Parameters

- `image`: The image associated to the element.
- `imageShape`: The @c CPListImageRowItemImageGridElementShape shape being applied on the image.
- `title`: The title of the element.
- `accessorySymbolName`: The system symbol used as an accessory view.

<a id="discussion"></a>

## Discussion

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.

UIImageAsset is used to combine multiple UIImages with different trait collections into a single UIImage.

> **Note**

> The expected image size is given by +\[CPListImageRowItemImageGridElement maximumImageSize\]. Images provided will be resized to this size if necessary.

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

# initWithImage:imageShape:title:accessorySymbolName: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize an element that is constituted of an image and an image shape.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image imageShape:(CPListImageRowItemImageGridElementShape) imageShape title:(NSString *) title accessorySymbolName:(NSString *) accessorySymbolName;
```

## Parameters

- `image`: The image associated to the element.
- `imageShape`: The @c CPListImageRowItemImageGridElementShape shape being applied on the image.
- `title`: The title of the element.
- `accessorySymbolName`: The system symbol used as an accessory view.

<a id="discussion"></a>

## Discussion

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.

UIImageAsset is used to combine multiple UIImages with different trait collections into a single UIImage.

> **Note**

> The expected image size is given by +\[CPListImageRowItemImageGridElement maximumImageSize\]. Images provided will be resized to this size if necessary.

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].
