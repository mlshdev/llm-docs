> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/init(named:in:compatiblewith:)](https://developer.apple.com/documentation/uikit/uiimage/init(named:in:compatiblewith:))

# init(named:in:compatibleWith:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an image object using the named image asset that’s compatible with the specified trait collection.

## Declaration

```swift
init?(named name: String, in bundle: Bundle?, compatibleWith traitCollection: UITraitCollection?)
```

## Parameters

- `name`: The name of the image asset or file.
- `bundle`: The bundle containing the image file or asset catalog. Specify `nil` to search the app’s main bundle.
- `traitCollection`: The traits associated with the intended environment for the image. Use this parameter to ensure that the system loads the correct variant of the image. If you specify `nil`, this method uses the traits associated with the main screen.

<a id="return-value"></a>

## Return Value

The image object that best matches the desired traits with the given name, or `nil` if no suitable image was found.

## Mentioned In

- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="Discussion"></a>

## Discussion

When searching the asset catalog, this method prefers an asset containing a symbol image over an asset with the same name containing a bitmap image. Because the system supports symbol images in iOS 13 and later, you may include both types of assets in the same asset catalog. The system automatically falls back to the bitmap image on earlier versions of iOS.

You can’t use this method to load system symbol images; use the [init(systemName:compatibleWith:)](init%28systemname_compatiblewith_%29.md) method instead.

This method checks the system caches for an image object with the name you specify, and returns the variant of that image that best matches the trait collection you specify. If a matching image object isn’t in the cache, this method creates the image from an available asset catalog or loads the image from disk.

The system may purge cached image data at any time to free up memory. Purging occurs only for unused images that are in the cache.

In iOS 9 and later, this method is thread safe.

## See Also

### Loading and caching images

- [Providing images for different appearances](../providing-images-for-different-appearances.md): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [Creating custom symbol images for your app](../creating-custom-symbol-images-for-your-app.md): Create, organize, and annotate symbol images using SF Symbols.
- [init(named:in:with:)](init%28named_in_with_%29.md): Creates an image by using the named image asset that’s compatible with the configuration you specify.
- [init(named:in:variableValue:configuration:)](init%28named_in_variablevalue_configuration_%29.md): Creates an image by using the name, configuration, and variable value you specify.
- [init(named:)](init%28named_%29.md): Creates an image object from the specified named asset.
- [init(imageLiteralResourceName:)](init%28imageliteralresourcename_%29.md): Returns the image object for the specified resource.
- [init(systemName:withConfiguration:)](init%28systemname_withconfiguration_%29.md): Creates an image object that contains a system symbol image with the specified configuration.
- [init(systemName:variableValue:configuration:)](init%28systemname_variablevalue_configuration_%29.md): Creates an image object that contains a system symbol image with the configuration and variable value you specify.
- [init(systemName:compatibleWith:)](init%28systemname_compatiblewith_%29.md): Creates an image object that contains a system symbol image appropriate for the specified traits.
- [init(systemName:)](init%28systemname_%29.md): Creates an image object that contains a system symbol image.
- [init(resource:)](init%28resource_%29.md)
- [Building high-performance lists and collection views](../building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.

# imageNamed:inBundle:compatibleWithTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an image object using the named image asset that’s compatible with the specified trait collection.

## Declaration

```objectivec
+ (UIImage *) imageNamed:(NSString *) name inBundle:(NSBundle *) bundle compatibleWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `name`: The name of the image asset or file.
- `bundle`: The bundle containing the image file or asset catalog. Specify `nil` to search the app’s main bundle.
- `traitCollection`: The traits associated with the intended environment for the image. Use this parameter to ensure that the system loads the correct variant of the image. If you specify `nil`, this method uses the traits associated with the main screen.

<a id="return-value"></a>

## Return Value

The image object that best matches the desired traits with the given name, or `nil` if no suitable image was found.

## Mentioned In

- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="Discussion"></a>

## Discussion

When searching the asset catalog, this method prefers an asset containing a symbol image over an asset with the same name containing a bitmap image. Because the system supports symbol images in iOS 13 and later, you may include both types of assets in the same asset catalog. The system automatically falls back to the bitmap image on earlier versions of iOS.

You can’t use this method to load system symbol images; use the [systemImageNamed:compatibleWithTraitCollection:](init%28systemname_compatiblewith_%29.md) method instead.

This method checks the system caches for an image object with the name you specify, and returns the variant of that image that best matches the trait collection you specify. If a matching image object isn’t in the cache, this method creates the image from an available asset catalog or loads the image from disk.

The system may purge cached image data at any time to free up memory. Purging occurs only for unused images that are in the cache.

In iOS 9 and later, this method is thread safe.

## See Also

### Loading and caching images

- [Providing images for different appearances](../providing-images-for-different-appearances.md): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [Creating custom symbol images for your app](../creating-custom-symbol-images-for-your-app.md): Create, organize, and annotate symbol images using SF Symbols.
- [imageNamed:inBundle:withConfiguration:](init%28named_in_with_%29.md): Creates an image by using the named image asset that’s compatible with the configuration you specify.
- [imageNamed:inBundle:variableValue:withConfiguration:](imagenamed_inbundle_variablevalue_withconfiguration_.md): Creates an image by using the name, configuration, and variable value you specify.
- [imageNamed:](init%28named_%29.md): Creates an image object from the specified named asset.
- [systemImageNamed:withConfiguration:](init%28systemname_withconfiguration_%29.md): Creates an image object that contains a system symbol image with the specified configuration.
- [systemImageNamed:variableValue:withConfiguration:](systemimagenamed_variablevalue_withconfiguration_.md): Creates an image object that contains a system symbol image with the configuration and variable value you specify.
- [systemImageNamed:compatibleWithTraitCollection:](init%28systemname_compatiblewith_%29.md): Creates an image object that contains a system symbol image appropriate for the specified traits.
- [systemImageNamed:](init%28systemname_%29.md): Creates an image object that contains a system symbol image.
- [Building high-performance lists and collection views](../building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.
