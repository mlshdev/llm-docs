> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoview/livephotobadgeview](https://developer.apple.com/documentation/photosui/phlivephotoview/livephotobadgeview)

# livePhotoBadgeView (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A view for displaying Live Photo status.

## Declaration

```swift
var livePhotoBadgeView: NSView? { get }
```

<a id="Discussion"></a>

## Discussion

The [PHLivePhotoView](../phlivephotoview.md) uses this subview to display icons indicating the existence or status of Live Photo content. Photos manages the content displayed in the badge view, so you don’t need to do anything with view’s content—instead, this property provides access to the badge view so you can change where it appears in your view hierarchy if needed. For example, if you display a Live Photo view within a scroll view, you can move the badge view so that its position remains constant while the scroll view scrolls.

## See Also

### Accessing User Interface Icons for Live Photos

- [livePhotoBadgeImage(options:)](livephotobadgeimage%28options_%29.md): Returns an icon image for the specified Live Photo semantic options.

# livePhotoBadgeView (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A view for displaying Live Photo status.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSView * livePhotoBadgeView;
```

<a id="Discussion"></a>

## Discussion

The [PHLivePhotoView](../phlivephotoview.md) uses this subview to display icons indicating the existence or status of Live Photo content. Photos manages the content displayed in the badge view, so you don’t need to do anything with view’s content—instead, this property provides access to the badge view so you can change where it appears in your view hierarchy if needed. For example, if you display a Live Photo view within a scroll view, you can move the badge view so that its position remains constant while the scroll view scrolls.

## See Also

### Accessing User Interface Icons for Live Photos

- [livePhotoBadgeImageWithOptions:](livephotobadgeimage%28options_%29.md): Returns an icon image for the specified Live Photo semantic options.
