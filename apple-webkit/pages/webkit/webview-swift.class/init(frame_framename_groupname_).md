> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/init(frame:framename:groupname:)](https://developer.apple.com/documentation/webkit/webview-swift.class/init(frame:framename:groupname:))

# init(frame:frameName:groupName:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes the receiver with a frame rectangle, frame name, and group name.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
init!(frame: NSRect, frameName: String!, groupName: String!)
```

## Parameters

- `frame`: The frame rectangle for the created view object.
- `frameName`: The web frame’s name. This should not be one of the predefined frame names (see the ````WebFrame```WebFrame/findNamed(_:)`` method for a description of their meaning), but a custom name or a name used in HTML source. This parameter can be ````nil\`.
- `groupName`: An arbitrary identifier used to group related frames. For example, JavaScript running in a frame can access any other frame in the same group. It’s up to the application how it chooses to scope related frames. This parameter can be `nil`.

<a id="return-value"></a>

## Return Value

An initialized view object or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the `WebView` class.

# initWithFrame:frameName:groupName: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes the receiver with a frame rectangle, frame name, and group name.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) frame frameName:(NSString *) frameName groupName:(NSString *) groupName;
```

## Parameters

- `frame`: The frame rectangle for the created view object.
- `frameName`: The web frame’s name. This should not be one of the predefined frame names (see the ````WebFrame```WebFrame/findNamed(_:)`` method for a description of their meaning), but a custom name or a name used in HTML source. This parameter can be ````nil\`.
- `groupName`: An arbitrary identifier used to group related frames. For example, JavaScript running in a frame can access any other frame in the same group. It’s up to the application how it chooses to scope related frames. This parameter can be `nil`.

<a id="return-value"></a>

## Return Value

An initialized view object or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the `WebView` class.
