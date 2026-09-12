> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprogressview/progressviewstyle](https://developer.apple.com/documentation/uikit/uiprogressview/progressviewstyle)

# progressViewStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current graphical style of the progress view.

## Declaration

```swift
var progressViewStyle: UIProgressView.Style { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant that specifies the style of the progress view. The default style is [UIProgressView.Style.default](style/default.md). For more on these constants, see [UIProgressView.Style](style.md).

## See Also

### Configuring the progress bar

- [progressTintColor](progresstintcolor.md): The color shown for the portion of the progress bar that’s filled.
- [progressImage](progressimage.md): An image to use for the portion of the progress bar that’s filled.
- [trackTintColor](tracktintcolor.md): The color shown for the portion of the progress bar that isn’t filled.
- [trackImage](trackimage.md): An image to use for the portion of the track that isn’t filled.

# progressViewStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current graphical style of the progress view.

## Declaration

```objectivec
@property (nonatomic) UIProgressViewStyle progressViewStyle;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant that specifies the style of the progress view. The default style is [UIProgressViewStyleDefault](style/default.md). For more on these constants, see [UIProgressViewStyle](style.md).

## See Also

### Configuring the progress bar

- [progressTintColor](progresstintcolor.md): The color shown for the portion of the progress bar that’s filled.
- [progressImage](progressimage.md): An image to use for the portion of the progress bar that’s filled.
- [trackTintColor](tracktintcolor.md): The color shown for the portion of the progress bar that isn’t filled.
- [trackImage](trackimage.md): An image to use for the portion of the track that isn’t filled.
