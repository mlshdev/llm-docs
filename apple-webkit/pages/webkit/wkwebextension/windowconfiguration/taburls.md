> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/windowconfiguration/taburls](https://developer.apple.com/documentation/webkit/wkwebextension/windowconfiguration/taburls)

# tabURLs (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the URLs that the window should initially load as tabs.

## Declaration

```swift
var tabURLs: [URL] { get }
```

<a id="discussion"></a>

## Discussion

If [tabURLs](taburls.md) and [tabs](tabs.md) are both empty, the app’s default start page should appear in a tab.

## See Also

### Related Documentation

- [tabs](tabs.md): Indicates the existing tabs that should be moved to the window.

# tabURLs (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the URLs that the window should initially load as tabs.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSURL *> * tabURLs;
```

<a id="discussion"></a>

## Discussion

If [tabURLs](taburls.md) and [tabs](tabs.md) are both empty, the app’s default start page should appear in a tab.

## See Also

### Related Documentation

- [tabs](tabs.md): Indicates the existing tabs that should be moved to the window.
