> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/init(imageliteralresourcename:)](https://developer.apple.com/documentation/uikit/uiimage/init(imageliteralresourcename:))

# init(imageLiteralResourceName:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 2.0+ · tvOS · visionOS · watchOS

Returns the image object for the specified resource.

## Declaration

```swift
required convenience init(imageLiteralResourceName name: String)
```

## Parameters

- `name`: The name of the file or image asset.

<a id="return-value"></a>

## Return Value

The image object.

## See Also

### Loading and caching images

- [Providing images for different appearances](../providing-images-for-different-appearances.md): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [Creating custom symbol images for your app](../creating-custom-symbol-images-for-your-app.md): Create, organize, and annotate symbol images using SF Symbols.
- [init(named:in:compatibleWith:)](init%28named_in_compatiblewith_%29.md): Creates an image object using the named image asset that’s compatible with the specified trait collection.
- [init(named:in:with:)](init%28named_in_with_%29.md): Creates an image by using the named image asset that’s compatible with the configuration you specify.
- [init(named:in:variableValue:configuration:)](init%28named_in_variablevalue_configuration_%29.md): Creates an image by using the name, configuration, and variable value you specify.
- [init(named:)](init%28named_%29.md): Creates an image object from the specified named asset.
- [init(systemName:withConfiguration:)](init%28systemname_withconfiguration_%29.md): Creates an image object that contains a system symbol image with the specified configuration.
- [init(systemName:variableValue:configuration:)](init%28systemname_variablevalue_configuration_%29.md): Creates an image object that contains a system symbol image with the configuration and variable value you specify.
- [init(systemName:compatibleWith:)](init%28systemname_compatiblewith_%29.md): Creates an image object that contains a system symbol image appropriate for the specified traits.
- [init(systemName:)](init%28systemname_%29.md): Creates an image object that contains a system symbol image.
- [init(resource:)](init%28resource_%29.md)
- [Building high-performance lists and collection views](../building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.
