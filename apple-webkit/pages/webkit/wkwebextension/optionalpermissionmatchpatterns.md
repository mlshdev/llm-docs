> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/optionalpermissionmatchpatterns](https://developer.apple.com/documentation/webkit/wkwebextension/optionalpermissionmatchpatterns)

# optionalPermissionMatchPatterns (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The set of websites that the extension may need access to for optional functionality.

## Declaration

```swift
var optionalPermissionMatchPatterns: Set<WKWebExtension.MatchPattern> { get }
```

<a id="discussion"></a>

## Discussion

These match patterns can be requested by the extension at a later time.

# optionalPermissionMatchPatterns (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The set of websites that the extension may need access to for optional functionality.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<WKWebExtensionMatchPattern *> * optionalPermissionMatchPatterns;
```

<a id="discussion"></a>

## Discussion

These match patterns can be requested by the extension at a later time.
