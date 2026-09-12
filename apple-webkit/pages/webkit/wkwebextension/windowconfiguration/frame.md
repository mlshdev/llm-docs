> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/windowconfiguration/frame](https://developer.apple.com/documentation/webkit/wkwebextension/windowconfiguration/frame)

# frame (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the frame where the window should be positioned on the main screen.

## Declaration

```swift
var frame: CGRect { get }
```

<a id="discussion"></a>

## Discussion

This frame should override the app’s default window position and size.

Individual components (e.g., `origin.x`, `size.width`) will be `NaN` if not specified.

# frame (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the frame where the window should be positioned on the main screen.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect frame;
```

<a id="discussion"></a>

## Discussion

This frame should override the app’s default window position and size.

Individual components (e.g., `origin.x`, `size.width`) will be `NaN` if not specified.
