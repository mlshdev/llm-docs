> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreencell/maskedbackgroundview](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreencell/maskedbackgroundview)

# maskedBackgroundView (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The background view that performs the parallax effect.

## Declaration

```swift
var maskedBackgroundView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

The `maskedBackgroundView` property returns the current cell’s background view. Modify properties of this view to customize the parallax effect. Generally, you should add an opaque image to the view.

## See Also

### Accessing Cell Views

- [maskedContentView](maskedcontentview.md): The content view in focus.

# maskedBackgroundView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The background view that performs the parallax effect.

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * maskedBackgroundView;
```

<a id="Discussion"></a>

## Discussion

The `maskedBackgroundView` property returns the current cell’s background view. Modify properties of this view to customize the parallax effect. Generally, you should add an opaque image to the view.

## See Also

### Accessing Cell Views

- [maskedContentView](maskedcontentview.md): The content view in focus.
