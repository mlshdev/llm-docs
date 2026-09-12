> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webview(_:shouldchangeselecteddomrange:to:affinity:stillselecting:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webview(_:shouldchangeselecteddomrange:to:affinity:stillselecting:))

# webView(\_:shouldChangeSelectedDOMRange:to:affinity:stillSelecting:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to change the selected range.

## Declaration

```swift
optional func webView(_ webView: WebView!, shouldChangeSelectedDOMRange currentRange: DOMRange!, to proposedRange: DOMRange!, affinity selectionAffinity: NSSelectionAffinity, stillSelecting flag: Bool) -> Bool
```

## Parameters

- `webView`: The web view that the user is editing.
- `currentRange`: The old range the user wants to change.
- `proposedRange`: The new range the user wants to select.
- `selectionAffinity`: The direction of the selection.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the user is still selecting; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user is allowed to change the selected range; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [webViewDidChangeSelection(\_:)](webviewdidchangeselection%28__%29.md): Deprecated. Sent by the default notification center when the user changes the selection in the web view.

# webView:shouldChangeSelectedDOMRange:toDOMRange:affinity:stillSelecting: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to change the selected range.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView shouldChangeSelectedDOMRange:(DOMRange *) currentRange toDOMRange:(DOMRange *) proposedRange affinity:(NSSelectionAffinity) selectionAffinity stillSelecting:(BOOL) flag;
```

## Parameters

- `webView`: The web view that the user is editing.
- `currentRange`: The old range the user wants to change.
- `proposedRange`: The new range the user wants to select.
- `selectionAffinity`: The direction of the selection.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the user is still selecting; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user is allowed to change the selected range; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [webViewDidChangeSelection:](webviewdidchangeselection%28__%29.md): Deprecated. Sent by the default notification center when the user changes the selection in the web view.
