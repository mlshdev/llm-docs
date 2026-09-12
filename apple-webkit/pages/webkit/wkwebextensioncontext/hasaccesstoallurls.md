> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/hasaccesstoallurls](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/hasaccesstoallurls)

# hasAccessToAllURLs (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern.

## Declaration

```swift
var hasAccessToAllURLs: Bool { get }
```

<a id="discussion"></a>

## Discussion

This does not check for any `*` host patterns. In most cases you should use the broader [hasAccessToAllHosts](hasaccesstoallhosts.md).

## See Also

### Related Documentation

- [currentPermissionMatchPatterns](currentpermissionmatchpatterns.md): The currently granted permission match patterns that have not expired.
- [hasAccessToAllHosts](hasaccesstoallhosts.md): A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern or any `*` host patterns.

# hasAccessToAllURLs (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAccessToAllURLs;
```

<a id="discussion"></a>

## Discussion

This does not check for any `*` host patterns. In most cases you should use the broader [hasAccessToAllHosts](hasaccesstoallhosts.md).

## See Also

### Related Documentation

- [currentPermissionMatchPatterns](currentpermissionmatchpatterns.md): The currently granted permission match patterns that have not expired.
- [hasAccessToAllHosts](hasaccesstoallhosts.md): A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern or any `*` host patterns.
