> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:insertinputsuggestion:)

# webView(\_:insertInputSuggestion:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

## Declaration

```swift
optional func webView(_ webView: WKWebView, insertInputSuggestion inputSuggestion: UIInputSuggestion)
```

## Parameters

- `webView`: The web view where the input suggestion should be inserted.
- `inputSuggestion`: The input suggestion that the user or system selected.

<a id="discussion"></a>

## Discussion

Tells the delegate when the keyboard delivers an input suggestion.

# webView:insertInputSuggestion: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView insertInputSuggestion:(UIInputSuggestion *) inputSuggestion;
```

## Parameters

- `webView`: The web view where the input suggestion should be inserted.
- `inputSuggestion`: The input suggestion that the user or system selected.

<a id="discussion"></a>

## Discussion

Tells the delegate when the keyboard delivers an input suggestion.
