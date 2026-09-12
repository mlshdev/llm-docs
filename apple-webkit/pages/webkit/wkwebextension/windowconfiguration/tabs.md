> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/windowconfiguration/tabs](https://developer.apple.com/documentation/webkit/wkwebextension/windowconfiguration/tabs)

# tabs (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the existing tabs that should be moved to the window.

## Declaration

```swift
var tabs: [any WKWebExtensionTab] { get }
```

<a id="discussion"></a>

## Discussion

If [tabs](tabs.md) and [tabURLs](taburls.md) are both empty, the app’s default start page should appear in a tab.

## See Also

### Related Documentation

- [tabURLs](taburls.md): Indicates the URLs that the window should initially load as tabs.

# tabs (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the existing tabs that should be moved to the window.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<WKWebExtensionTab>> * tabs;
```

<a id="discussion"></a>

## Discussion

If [tabs](tabs.md) and [tabURLs](taburls.md) are both empty, the app’s default start page should appear in a tab.

## See Also

### Related Documentation

- [tabURLs](taburls.md): Indicates the URLs that the window should initially load as tabs.
