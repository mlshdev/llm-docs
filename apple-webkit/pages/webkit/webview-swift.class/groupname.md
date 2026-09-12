> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/groupname](https://developer.apple.com/documentation/webkit/webview-swift.class/groupname)

# groupName (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s group name.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var groupName: String! { get set }
```

<a id="Discussion"></a>

## Discussion

You might use this to set the group name of a `WebView` object after it is loaded from a nib file.

## See Also

### Related Documentation

- [init(frame:frameName:groupName:)](init%28frame_framename_groupname_%29.md): Deprecated. Initializes the receiver with a frame rectangle, frame name, and group name.

# groupName (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s group name.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * groupName;
```

<a id="Discussion"></a>

## Discussion

You might use this to set the group name of a `WebView` object after it is loaded from a nib file.

## See Also

### Related Documentation

- [initWithFrame:frameName:groupName:](init%28frame_framename_groupname_%29.md): Deprecated. Initializes the receiver with a frame rectangle, frame name, and group name.
