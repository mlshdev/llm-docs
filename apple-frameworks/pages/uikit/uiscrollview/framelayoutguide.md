> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/framelayoutguide](https://developer.apple.com/documentation/uikit/uiscrollview/framelayoutguide)

# frameLayoutGuide (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The layout guide based on the untransformed frame rectangle of the scroll view.

## Declaration

```swift
var frameLayoutGuide: UILayoutGuide { get }
```

<a id="Discussion"></a>

## Discussion

Use this layout guide when you want to create Auto Layout constraints that explicitly involve the frame rectangle of the scroll view itself, as opposed to its content rectangle.

## See Also

### Getting the layout guides

- [contentLayoutGuide](contentlayoutguide.md): The layout guide based on the untranslated content rectangle of the scroll view.

# frameLayoutGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The layout guide based on the untransformed frame rectangle of the scroll view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UILayoutGuide * frameLayoutGuide;
```

<a id="Discussion"></a>

## Discussion

Use this layout guide when you want to create Auto Layout constraints that explicitly involve the frame rectangle of the scroll view itself, as opposed to its content rectangle.

## See Also

### Getting the layout guides

- [contentLayoutGuide](contentlayoutguide.md): The layout guide based on the untranslated content rectangle of the scroll view.
