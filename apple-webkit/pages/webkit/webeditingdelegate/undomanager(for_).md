> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/undomanager(for:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/undomanager(for:))

# undoManager(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the undo manager to be used by a web view.

## Declaration

```swift
optional func undoManager(for webView: WebView!) -> UndoManager!
```

## Parameters

- `webView`: The web view that the user is editing.

<a id="return-value"></a>

## Return Value

The undo manager.

# undoManagerForWebView: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the undo manager to be used by a web view.

## Declaration

```objectivec
- (NSUndoManager *) undoManagerForWebView:(WebView *) webView;
```

## Parameters

- `webView`: The web view that the user is editing.

<a id="return-value"></a>

## Return Value

The undo manager.
