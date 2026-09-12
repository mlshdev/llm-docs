> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoview/livephotobadgeimage(options:)](https://developer.apple.com/documentation/photosui/phlivephotoview/livephotobadgeimage(options:))

# livePhotoBadgeImage(options:) (Swift)

**Framework:** PhotosUI  
**Kind:** Type Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Returns an icon image for the specified Live Photo semantic options.

## Declaration

```swift
class func livePhotoBadgeImage(options badgeOptions: PHLivePhotoBadgeOptions = []) -> UIImage
```

## Parameters

- `badgeOptions`: A set of options identifying the semantic context for a Live Photo indicator to be used in your app’s user interface. See [PHLivePhotoBadgeOptions](../phlivephotobadgeoptions.md).

<a id="return-value"></a>

## Return Value

The icon image for the specified options.

<a id="Discussion"></a>

## Discussion

Use this method to obtain icon images for use in interface elements that complement Live Photos. For example, you can use icons obtained from this method in a custom asset browser UI to indicate which assets are Live Photos as opposed to normal still photos, or to indicate when the user has chosen to share a Live Photo with or without its motion and sound content.

By default, this method returns a solid-color image suitable for use as a template image that you can tint for display against a specific background. (Use the [UIImage](../../uikit/uiimage.md) class to create template images.) When you plan to overlay the icon over animating Live Photo content, add the [overContent](../phlivephotobadgeoptions/overcontent.md) option to obtain an image (not suitable for template use) that provides extra background contrast.

## See Also

### Accessing User Interface Icons for Live Photos

- [livePhotoBadgeView](livephotobadgeview.md): A view for displaying Live Photo status.

# livePhotoBadgeImageWithOptions: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Type Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Returns an icon image for the specified Live Photo semantic options.

## Declaration

```objectivec
+ (UIImage *) livePhotoBadgeImageWithOptions:(PHLivePhotoBadgeOptions) badgeOptions;
```

## Parameters

- `badgeOptions`: A set of options identifying the semantic context for a Live Photo indicator to be used in your app’s user interface. See [PHLivePhotoBadgeOptions](../phlivephotobadgeoptions.md).

<a id="return-value"></a>

## Return Value

The icon image for the specified options.

<a id="Discussion"></a>

## Discussion

Use this method to obtain icon images for use in interface elements that complement Live Photos. For example, you can use icons obtained from this method in a custom asset browser UI to indicate which assets are Live Photos as opposed to normal still photos, or to indicate when the user has chosen to share a Live Photo with or without its motion and sound content.

By default, this method returns a solid-color image suitable for use as a template image that you can tint for display against a specific background. (Use the [UIImage](../../uikit/uiimage.md) class to create template images.) When you plan to overlay the icon over animating Live Photo content, add the [PHLivePhotoBadgeOptionsOverContent](../phlivephotobadgeoptions/overcontent.md) option to obtain an image (not suitable for template use) that provides extra background contrast.

## See Also

### Accessing User Interface Icons for Live Photos

- [livePhotoBadgeView](livephotobadgeview.md): A view for displaying Live Photo status.
