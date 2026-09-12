> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/shadowimage(fortoolbarposition:)](https://developer.apple.com/documentation/uikit/uitoolbar/shadowimage(fortoolbarposition:))

# shadowImage(forToolbarPosition:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the image to use for the toolbar shadow in a given position.

## Declaration

```swift
func shadowImage(forToolbarPosition topOrBottom: UIBarPosition) -> UIImage?
```

## Parameters

- `topOrBottom`: A toolbar position constant. You can use this parameter to indicate whether the shadow image returned is intended for use in a toolbar at the top or bottom of the view.

<a id="return-value"></a>

## Return Value

The image to use for the toolbar shadow in the position specified by `topOrBottom`.

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which corresponds to the default shadow image being used. When non-`nil`, the return value represents the shadow that is used on the toolbar in the position specified by the `topOrBottom` parameter.

## See Also

### Adding a shadow

- [setShadowImage(\_:forToolbarPosition:)](setshadowimage%28__fortoolbarposition_%29.md): Sets the image to use for the toolbar shadow in a given position.

# shadowImageForToolbarPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the image to use for the toolbar shadow in a given position.

## Declaration

```objectivec
- (UIImage *) shadowImageForToolbarPosition:(UIBarPosition) topOrBottom;
```

## Parameters

- `topOrBottom`: A toolbar position constant. You can use this parameter to indicate whether the shadow image returned is intended for use in a toolbar at the top or bottom of the view.

<a id="return-value"></a>

## Return Value

The image to use for the toolbar shadow in the position specified by `topOrBottom`.

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which corresponds to the default shadow image being used. When non-`nil`, the return value represents the shadow that is used on the toolbar in the position specified by the `topOrBottom` parameter.

## See Also

### Adding a shadow

- [setShadowImage:forToolbarPosition:](setshadowimage%28__fortoolbarposition_%29.md): Sets the image to use for the toolbar shadow in a given position.
