> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/isreadermodeavailable(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/isreadermodeavailable(for:))

# isReaderModeAvailable(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to check if reader mode is available for the tab.

## Declaration

```swift
optional func isReaderModeAvailable(for context: WKWebExtensionContext) -> Bool
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `NO` if not implemented.

## See Also

### Related Documentation

- [isReaderModeActive(for:)](isreadermodeactive%28for_%29.md): Called to check if the tab is currently showing reader mode.

# isReaderModeAvailableForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to check if reader mode is available for the tab.

## Declaration

```objectivec
- (BOOL) isReaderModeAvailableForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `NO` if not implemented.

## See Also

### Related Documentation

- [isReaderModeActiveForWebExtensionContext:](isreadermodeactive%28for_%29.md): Called to check if the tab is currently showing reader mode.
