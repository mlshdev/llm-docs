> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkwebextension/allrequestedmatchpatterns

# allRequestedMatchPatterns (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The set of websites that the extension requires access to for injected content and for receiving messages from websites.

## Declaration

```swift
var allRequestedMatchPatterns: Set<WKWebExtension.MatchPattern> { get }
```

# allRequestedMatchPatterns (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The set of websites that the extension requires access to for injected content and for receiving messages from websites.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<WKWebExtensionMatchPattern *> * allRequestedMatchPatterns;
```
