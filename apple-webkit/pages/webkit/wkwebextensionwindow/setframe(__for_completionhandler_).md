> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow/setframe(_:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensionwindow/setframe(_:for:completionhandler:))

# setFrame(\_:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the frame of the window.

## Declaration

```swift
optional func setFrame(_ frame: CGRect, for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func setFrame(_ frame: CGRect, for context: WKWebExtensionContext) async throws
```

## Parameters

- `frame`: The new frame of the window, in screen coordinates.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

On macOS, the implementation of both [frame(for:)](frame%28for_%29.md) and [screenFrame(for:)](screenframe%28for_%29.md) are prerequisites. On iOS, iPadOS, and visionOS, only [frame(for:)](frame%28for_%29.md) is a prerequisite. Without the respective method(s), this method will not be called.

## See Also

### Related Documentation

- [frame(for:)](frame%28for_%29.md): Called when the frame of the window is needed.
- [screenFrame(for:)](screenframe%28for_%29.md): Called when the screen frame containing the window is needed.

# setFrame:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the frame of the window.

## Declaration

```objectivec
- (void) setFrame:(CGRect) frame forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `frame`: The new frame of the window, in screen coordinates.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

On macOS, the implementation of both [frameForWebExtensionContext:](frame%28for_%29.md) and [screenFrameForWebExtensionContext:](screenframe%28for_%29.md) are prerequisites. On iOS, iPadOS, and visionOS, only [frameForWebExtensionContext:](frame%28for_%29.md) is a prerequisite. Without the respective method(s), this method will not be called.

## See Also

### Related Documentation

- [frameForWebExtensionContext:](frame%28for_%29.md): Called when the frame of the window is needed.
- [screenFrameForWebExtensionContext:](screenframe%28for_%29.md): Called when the screen frame containing the window is needed.
