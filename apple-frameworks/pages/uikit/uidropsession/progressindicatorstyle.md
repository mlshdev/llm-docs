> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropsession/progressindicatorstyle](https://developer.apple.com/documentation/uikit/uidropsession/progressindicatorstyle)

# progressIndicatorStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The drop-progress indicator style associated with the drop session.

## Declaration

```swift
var progressIndicatorStyle: UIDropSessionProgressIndicatorStyle { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the type of progress indicator displayed when the drop operation takes a significant amount of time. The [UIDropSessionProgressIndicatorStyle.default](../uidropsessionprogressindicatorstyle/default.md) style indicates that a progress indicator is shown by the system. If you prefer to show your own progress indicator, set this property to [UIDropSessionProgressIndicatorStyle.none](../uidropsessionprogressindicatorstyle/none.md).

# progressIndicatorStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The drop-progress indicator style associated with the drop session.

## Declaration

```objectivec
@property (nonatomic) UIDropSessionProgressIndicatorStyle progressIndicatorStyle;
```

<a id="Discussion"></a>

## Discussion

This property determines the type of progress indicator displayed when the drop operation takes a significant amount of time. The [UIDropSessionProgressIndicatorStyleDefault](../uidropsessionprogressindicatorstyle/default.md) style indicates that a progress indicator is shown by the system. If you prefer to show your own progress indicator, set this property to [UIDropSessionProgressIndicatorStyleNone](../uidropsessionprogressindicatorstyle/none.md).
