> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistatusbarmanager/statusbarframe](https://developer.apple.com/documentation/uikit/uistatusbarmanager/statusbarframe)

# statusBarFrame (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The frame rectangle of the status bar.

## Declaration

```swift
var statusBarFrame: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The frame rectangle is in the coordinate space of the associated [UIWindowScene](../uiwindowscene.md) object. If the status bar is hidden, the value of this property is [CGRectZero](../../coregraphics/cgrectzero.md).

# statusBarFrame (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The frame rectangle of the status bar.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect statusBarFrame;
```

<a id="Discussion"></a>

## Discussion

The frame rectangle is in the coordinate space of the associated [UIWindowScene](../uiwindowscene.md) object. If the status bar is hidden, the value of this property is [CGRectZero](../../coregraphics/cgrectzero.md).
