> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/optionspageurl](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/optionspageurl)

# optionsPageURL (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The URL of the extension’s options page, if the extension has one.

## Declaration

```swift
var optionsPageURL: URL? { get }
```

<a id="discussion"></a>

## Discussion

Provides the URL for the dedicated options page, if provided by the extension; otherwise `nil` if no page is defined.

The app should provide access to this page through a user interface element.

> **Note**

> Navigation to the options page is only possible after this extension has been loaded.

## See Also

### Related Documentation

- [webViewConfiguration](webviewconfiguration.md): The web view configuration to use for web views that load pages from this extension.

# optionsPageURL (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The URL of the extension’s options page, if the extension has one.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * optionsPageURL;
```

<a id="discussion"></a>

## Discussion

Provides the URL for the dedicated options page, if provided by the extension; otherwise `nil` if no page is defined.

The app should provide access to this page through a user interface element.

> **Note**

> Navigation to the options page is only possible after this extension has been loaded.

## See Also

### Related Documentation

- [webViewConfiguration](webviewconfiguration.md): The web view configuration to use for web views that load pages from this extension.
