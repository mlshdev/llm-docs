> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkwebextensioncontext/currentpermissionmatchpatterns

# currentPermissionMatchPatterns (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The currently granted permission match patterns that have not expired.

## Declaration

```swift
var currentPermissionMatchPatterns: Set<WKWebExtension.MatchPattern> { get }
```

## See Also

### Related Documentation

- [grantedPermissionMatchPatterns](grantedpermissionmatchpatterns.md): The currently granted permission match patterns and their expiration dates.

# currentPermissionMatchPatterns (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The currently granted permission match patterns that have not expired.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<WKWebExtensionMatchPattern *> * currentPermissionMatchPatterns;
```

## See Also

### Related Documentation

- [grantedPermissionMatchPatterns](grantedpermissionmatchpatterns.md): The currently granted permission match patterns and their expiration dates.
