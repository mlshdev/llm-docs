> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitemcardelement/init(thumbnail:title:subtitle:tintcolor:)](https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/init(thumbnail:title:subtitle:tintcolor:))

# init(thumbnail:title:subtitle:tintColor:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize an element with a thumbnail, title, subtitle, and tint color.

## Declaration

```swift
init(thumbnail: CPThumbnailImage, title: String?, subtitle: String?, tintColor: UIColor?)
```

## Parameters

- `thumbnail`: The thumbnail containing image, aspect ratio, image, and sports overlay information.
- `title`: The title of the element.
- `subtitle`: The subtitle of the element.
- `tintColor`: The color used for styling the element.

<a id="discussion"></a>

## Discussion

This initializer uses a CPThumbnailImage which encapsulates the image, aspect ratio, image, and sports overlay information.

# initWithThumbnail:title:subtitle:tintColor: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize an element with a thumbnail, title, subtitle, and tint color.

## Declaration

```objectivec
- (instancetype) initWithThumbnail:(CPThumbnailImage *) thumbnail title:(NSString *) title subtitle:(NSString *) subtitle tintColor:(UIColor *) tintColor;
```

## Parameters

- `thumbnail`: The thumbnail containing image, aspect ratio, image, and sports overlay information.
- `title`: The title of the element.
- `subtitle`: The subtitle of the element.
- `tintColor`: The color used for styling the element.

<a id="discussion"></a>

## Discussion

This initializer uses a CPThumbnailImage which encapsulates the image, aspect ratio, image, and sports overlay information.
