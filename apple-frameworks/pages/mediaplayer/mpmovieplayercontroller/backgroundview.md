> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/backgroundview](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/backgroundview)

# backgroundView (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A customizable view that is displayed behind the movie content.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var backgroundView: UIView! { get }
```

<a id="Discussion"></a>

## Discussion

This view provides the backing content, on top of which the movie content is displayed. You can add subviews to the background view if you want to display custom background content.

This view is part of the view hierarchy returned by the [view](view.md) property.

## See Also

### Accessing the view

- [view](view.md): Deprecated. The view containing the movie content and controls.

# backgroundView (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A customizable view that is displayed behind the movie content.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * backgroundView;
```

<a id="Discussion"></a>

## Discussion

This view provides the backing content, on top of which the movie content is displayed. You can add subviews to the background view if you want to display custom background content.

This view is part of the view hierarchy returned by the [view](view.md) property.

## See Also

### Accessing the view

- [view](view.md): Deprecated. The view containing the movie content and controls.
