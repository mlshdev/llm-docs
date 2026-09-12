> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/openwindows](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/openwindows)

# openWindows (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The open windows that are exposed to this extension.

## Declaration

```swift
var openWindows: [any WKWebExtensionWindow] { get }
```

<a id="discussion"></a>

## Discussion

Provides the windows that are open and visible to the extension, as updated by the [didOpenWindow(\_:)](didopenwindow%28__%29.md) and [didCloseWindow(\_:)](didclosewindow%28__%29.md) methods.

Initially populated by the windows returned by the extension controller delegate method [webExtensionController(\_:openWindowsFor:)](../wkwebextensioncontrollerdelegate/webextensioncontroller%28__openwindowsfor_%29.md).

## See Also

### Related Documentation

- [didOpenWindow(\_:)](didopenwindow%28__%29.md): Called by the app when a new window is opened to fire appropriate events with only this extension.
- [didCloseWindow(\_:)](didclosewindow%28__%29.md): Called by the app when a window is closed to fire appropriate events with only this extension.

# openWindows (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The open windows that are exposed to this extension.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<WKWebExtensionWindow>> * openWindows;
```

<a id="discussion"></a>

## Discussion

Provides the windows that are open and visible to the extension, as updated by the [didOpenWindow:](didopenwindow%28__%29.md) and [didCloseWindow:](didclosewindow%28__%29.md) methods.

Initially populated by the windows returned by the extension controller delegate method [webExtensionController:openWindowsForExtensionContext:](../wkwebextensioncontrollerdelegate/webextensioncontroller%28__openwindowsfor_%29.md).

## See Also

### Related Documentation

- [didOpenWindow:](didopenwindow%28__%29.md): Called by the app when a new window is opened to fire appropriate events with only this extension.
- [didCloseWindow:](didclosewindow%28__%29.md): Called by the app when a window is closed to fire appropriate events with only this extension.
