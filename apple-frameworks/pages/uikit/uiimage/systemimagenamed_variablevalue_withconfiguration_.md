> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/systemimagenamed:variablevalue:withconfiguration:](https://developer.apple.com/documentation/uikit/uiimage/systemimagenamed:variablevalue:withconfiguration:)

# systemImageNamed:variableValue:withConfiguration:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an image object that contains a system symbol image with the configuration and variable value you specify.

## Declaration

```objectivec
+ (UIImage *) systemImageNamed:(NSString *) name variableValue:(double) value withConfiguration:(UIImageConfiguration *) configuration;
```

## Parameters

- `name`: The name of the system symbol image.
- `value`: The value the system uses to customize the image content, between `0` and `1`.
- `configuration`: The image configuration the system applies to the image.

<a id="return-value"></a>

## Return Value

The object containing the image variant that matches the specified configuration data, or `nil` if no suitable image was found.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve system-defined symbol images. To retrieve a custom symbol image you store in an asset catalog, use the [init(named:in:variableValue:configuration:)](init%28named_in_variablevalue_configuration_%29.md) method instead.

This method checks the system caches for an image with the specified name and returns the variant of that image that’s best suited for the configuration you specify. If a matching image object isn’t in the cache, this method creates the image from the system symbol image.

The system may purge cached image data at any time to free up memory. Purging occurs only for unused images that are in the cache.

To look up the names of system symbol images, download the SF Symbols app from [Apple Design Resources](https://developer.apple.com/design/resources/).

## See Also

### Loading and caching images

- [Providing images for different appearances](../providing-images-for-different-appearances.md): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [Creating custom symbol images for your app](../creating-custom-symbol-images-for-your-app.md): Create, organize, and annotate symbol images using SF Symbols.
- [imageNamed:inBundle:compatibleWithTraitCollection:](init%28named_in_compatiblewith_%29.md): Creates an image object using the named image asset that’s compatible with the specified trait collection.
- [imageNamed:inBundle:withConfiguration:](init%28named_in_with_%29.md): Creates an image by using the named image asset that’s compatible with the configuration you specify.
- [imageNamed:inBundle:variableValue:withConfiguration:](imagenamed_inbundle_variablevalue_withconfiguration_.md): Creates an image by using the name, configuration, and variable value you specify.
- [imageNamed:](init%28named_%29.md): Creates an image object from the specified named asset.
- [systemImageNamed:withConfiguration:](init%28systemname_withconfiguration_%29.md): Creates an image object that contains a system symbol image with the specified configuration.
- [systemImageNamed:compatibleWithTraitCollection:](init%28systemname_compatiblewith_%29.md): Creates an image object that contains a system symbol image appropriate for the specified traits.
- [systemImageNamed:](init%28systemname_%29.md): Creates an image object that contains a system symbol image.
- [Building high-performance lists and collection views](../building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.
