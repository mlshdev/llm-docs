> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/requestedpermissionmatchpatterns](https://developer.apple.com/documentation/webkit/wkwebextension/requestedpermissionmatchpatterns)

# requestedPermissionMatchPatterns (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The set of websites that the extension requires access to for its base functionality.

## Declaration

```swift
var requestedPermissionMatchPatterns: Set<WKWebExtension.MatchPattern> { get }
```

# requestedPermissionMatchPatterns (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The set of websites that the extension requires access to for its base functionality.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<WKWebExtensionMatchPattern *> * requestedPermissionMatchPatterns;
```
