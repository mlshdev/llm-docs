> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/init(name:webframeview:webview:)](https://developer.apple.com/documentation/webkit/webframe/init(name:webframeview:webview:))

# init(name:webFrameView:webView:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes the receiver with a frame name, web frame view, and controlling web view.

## Declaration

```swift
init!(name: String!, webFrameView view: WebFrameView!, webView: WebView!)
```

## Parameters

- `name`: The frame name. Typically a custom name or `nil` (if none is specified). It would be inappropriate to use one of the predefined frame names described in [findNamed(\_:)](findnamed%28__%29.md) as they have special meanings.
- `view`: The view that displays this web frame—the view associated with the receiver.
- `webView`: The parent view that manages the main frame and its children.

<a id="return-value"></a>

## Return Value

An initialized web frame.

<a id="Discussion"></a>

## Discussion

Normally, you do not invoke this method directly. `WebView` objects automatically create the main frame and subsequent children when new content is loaded. Send a [load(\_:)](load%28__%29-47p2s.md) message to the main frame of a `WebView` to load web content.

This method is the designated initializer for the `WebFrame` class.

# initWithName:webFrameView:webView: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes the receiver with a frame name, web frame view, and controlling web view.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name webFrameView:(WebFrameView *) view webView:(WebView *) webView;
```

## Parameters

- `name`: The frame name. Typically a custom name or `nil` (if none is specified). It would be inappropriate to use one of the predefined frame names described in [findFrameNamed:](findnamed%28__%29.md) as they have special meanings.
- `view`: The view that displays this web frame—the view associated with the receiver.
- `webView`: The parent view that manages the main frame and its children.

<a id="return-value"></a>

## Return Value

An initialized web frame.

<a id="Discussion"></a>

## Discussion

Normally, you do not invoke this method directly. `WebView` objects automatically create the main frame and subsequent children when new content is loaded. Send a [loadRequest:](load%28__%29-47p2s.md) message to the main frame of a `WebView` to load web content.

This method is the designated initializer for the `WebFrame` class.
