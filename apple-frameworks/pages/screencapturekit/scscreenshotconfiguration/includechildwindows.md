> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotconfiguration/includechildwindows](https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/includechildwindows)

# includeChildWindows (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A Boolean that specifies whether the screenshot captures subwindows of the included apps and windows.

## Declaration

```swift
var includeChildWindows: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default taking a screenshot captures subwindows. For example, alerts, popovers, and sheets are captured by default.

# includeChildWindows (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A Boolean that specifies whether the screenshot captures subwindows of the included apps and windows.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL includeChildWindows;
```

<a id="discussion"></a>

## Discussion

By default taking a screenshot captures subwindows. For example, alerts, popovers, and sheets are captured by default.
