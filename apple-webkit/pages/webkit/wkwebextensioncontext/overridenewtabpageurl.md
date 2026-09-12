> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/overridenewtabpageurl](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/overridenewtabpageurl)

# overrideNewTabPageURL (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The URL to use as an alternative to the default new tab page, if the extension has one.

## Declaration

```swift
var overrideNewTabPageURL: URL? { get }
```

<a id="discussion"></a>

## Discussion

Provides the URL for a new tab page, if provided by the extension; otherwise `nil` if no page is defined.

The app should prompt the user for permission to use the extension’s new tab page as the default.

> **Note**

> Navigation to the override new tab page is only possible after this extension has been loaded.

## See Also

### Related Documentation

- [webViewConfiguration](webviewconfiguration.md): The web view configuration to use for web views that load pages from this extension.

# overrideNewTabPageURL (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The URL to use as an alternative to the default new tab page, if the extension has one.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * overrideNewTabPageURL;
```

<a id="discussion"></a>

## Discussion

Provides the URL for a new tab page, if provided by the extension; otherwise `nil` if no page is defined.

The app should prompt the user for permission to use the extension’s new tab page as the default.

> **Note**

> Navigation to the override new tab page is only possible after this extension has been loaded.

## See Also

### Related Documentation

- [webViewConfiguration](webviewconfiguration.md): The web view configuration to use for web views that load pages from this extension.
