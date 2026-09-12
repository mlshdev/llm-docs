> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/hasaccesstoallhosts](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/hasaccesstoallhosts)

# hasAccessToAllHosts (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern or any `*` host patterns.

## Declaration

```swift
var hasAccessToAllHosts: Bool { get }
```

## See Also

### Related Documentation

- [currentPermissionMatchPatterns](currentpermissionmatchpatterns.md): The currently granted permission match patterns that have not expired.
- [hasAccessToAllURLs](hasaccesstoallurls.md): A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern.

# hasAccessToAllHosts (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern or any `*` host patterns.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAccessToAllHosts;
```

## See Also

### Related Documentation

- [currentPermissionMatchPatterns](currentpermissionmatchpatterns.md): The currently granted permission match patterns that have not expired.
- [hasAccessToAllURLs](hasaccesstoallurls.md): A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern.
