> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemcondensedelement/init(image:imageshape:title:subtitle:accessorysymbolname:)

# init(image:imageShape:title:subtitle:accessorySymbolName:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a list image row condensed element with an image, an image shape, a title, subtitle and a system symbol name.

## Declaration

```swift
init(image: UIImage, imageShape: CPListImageRowItemCondensedElement.Shape, title: String, subtitle: String?, accessorySymbolName: String?)
```

## Parameters

- `image`: The image associated to the element.
- `imageShape`: The @c CPListImageRowItemCondensedElementShape shape being applied on the image.
- `title`: The title of the element.
- `subtitle`: The subtitle of the element.
- `accessorySymbolName`: The system symbol used as an accessory view.

# initWithImage:imageShape:title:subtitle:accessorySymbolName: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a list image row condensed element with an image, an image shape, a title, subtitle and a system symbol name.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image imageShape:(CPListImageRowItemCondensedElementShape) imageShape title:(NSString *) title subtitle:(NSString *) subtitle accessorySymbolName:(NSString *) accessorySymbolName;
```

## Parameters

- `image`: The image associated to the element.
- `imageShape`: The @c CPListImageRowItemCondensedElementShape shape being applied on the image.
- `title`: The title of the element.
- `subtitle`: The subtitle of the element.
- `accessorySymbolName`: The system symbol used as an accessory view.
