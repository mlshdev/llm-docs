> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/setreadermodeactive(_:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/setreadermodeactive(_:for:completionhandler:))

# setReaderModeActive(\_:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the reader mode for the tab.

## Declaration

```swift
optional func setReaderModeActive(_ active: Bool, for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func setReaderModeActive(_ active: Bool, for context: WKWebExtensionContext) async throws
```

## Parameters

- `active`: A boolean value indicating whether to activate reader mode.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

No action is performed if not implemented.

## See Also

### Related Documentation

- [isReaderModeAvailable(for:)](isreadermodeavailable%28for_%29.md): Called to check if reader mode is available for the tab.
- [isReaderModeActive(for:)](isreadermodeactive%28for_%29.md): Called to check if the tab is currently showing reader mode.

# setReaderModeActive:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the reader mode for the tab.

## Declaration

```objectivec
- (void) setReaderModeActive:(BOOL) active forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `active`: A boolean value indicating whether to activate reader mode.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

No action is performed if not implemented.

## See Also

### Related Documentation

- [isReaderModeAvailableForWebExtensionContext:](isreadermodeavailable%28for_%29.md): Called to check if reader mode is available for the tab.
- [isReaderModeActiveForWebExtensionContext:](isreadermodeactive%28for_%29.md): Called to check if the tab is currently showing reader mode.
