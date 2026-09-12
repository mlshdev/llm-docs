> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow/setwindowstate(_:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensionwindow/setwindowstate(_:for:completionhandler:))

# setWindowState(\_:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the state of the window.

## Declaration

```swift
optional func setWindowState(_ state: WKWebExtension.WindowState, for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func setWindowState(_ state: WKWebExtension.WindowState, for context: WKWebExtensionContext) async throws
```

## Parameters

- `state`: The new state of the window.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

The implementation of [windowState(for:)](windowstate%28for_%29.md) is a prerequisite.

Without it, this method will not be called.

## See Also

### Related Documentation

- [windowState(for:)](windowstate%28for_%29.md): Called when the state of the window is needed.

# setWindowState:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the state of the window.

## Declaration

```objectivec
- (void) setWindowState:(WKWebExtensionWindowState) state forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `state`: The new state of the window.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

The implementation of [windowStateForWebExtensionContext:](windowstate%28for_%29.md) is a prerequisite.

Without it, this method will not be called.

## See Also

### Related Documentation

- [windowStateForWebExtensionContext:](windowstate%28for_%29.md): Called when the state of the window is needed.
