> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/setshadowimage(_:fortoolbarposition:)](https://developer.apple.com/documentation/uikit/uitoolbar/setshadowimage(_:fortoolbarposition:))

# setShadowImage(\_:forToolbarPosition:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the image to use for the toolbar shadow in a given position.

## Declaration

```swift
func setShadowImage(_ shadowImage: UIImage?, forToolbarPosition topOrBottom: UIBarPosition)
```

## Parameters

- `shadowImage`: The image to use for the toolbar shadow in the position specified by `topOrBottom`.
- `topOrBottom`: A toolbar position constant. You can use this parameter to indicate whether the `shadowImage` is intended for a toolbar at the top or bottom of the view.

<a id="Discussion"></a>

## Discussion

When the `shadowImage` parameter is `nil`, the default shadow will be used. When non-`nil`, the `shadowImage` property is a custom shadow image to show instead of the default. Using the `topOrBottom` parameter, you can set a different shadow for toolbars at the top and bottom of the view. For a custom shadow image to be shown, a custom background image must also be set with the [setBackgroundImage(\_:forToolbarPosition:barMetrics:)](setbackgroundimage%28__fortoolbarposition_barmetrics_%29.md) method. If the default background image is used, then the default shadow image will be used regardless of the value of the `shadowImage` parameter.

## See Also

### Adding a shadow

- [shadowImage(forToolbarPosition:)](shadowimage%28fortoolbarposition_%29.md): Returns the image to use for the toolbar shadow in a given position.

# setShadowImage:forToolbarPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the image to use for the toolbar shadow in a given position.

## Declaration

```objectivec
- (void) setShadowImage:(UIImage *) shadowImage forToolbarPosition:(UIBarPosition) topOrBottom;
```

## Parameters

- `shadowImage`: The image to use for the toolbar shadow in the position specified by `topOrBottom`.
- `topOrBottom`: A toolbar position constant. You can use this parameter to indicate whether the `shadowImage` is intended for a toolbar at the top or bottom of the view.

<a id="Discussion"></a>

## Discussion

When the `shadowImage` parameter is `nil`, the default shadow will be used. When non-`nil`, the `shadowImage` property is a custom shadow image to show instead of the default. Using the `topOrBottom` parameter, you can set a different shadow for toolbars at the top and bottom of the view. For a custom shadow image to be shown, a custom background image must also be set with the [setBackgroundImage:forToolbarPosition:barMetrics:](setbackgroundimage%28__fortoolbarposition_barmetrics_%29.md) method. If the default background image is used, then the default shadow image will be used regardless of the value of the `shadowImage` parameter.

## See Also

### Adding a shadow

- [shadowImageForToolbarPosition:](shadowimage%28fortoolbarposition_%29.md): Returns the image to use for the toolbar shadow in a given position.
