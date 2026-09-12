> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/options/matchbidirectionally](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/options/matchbidirectionally)

# matchBidirectionally (Swift)

**Framework:** WebKit  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates that two patterns should be checked in either direction while matching.

## Declaration

```swift
static var matchBidirectionally: WKWebExtension.MatchPattern.Options { get }
```

<a id="discussion"></a>

## Discussion

For example, A matches B, or B matches A. Invalid for matching URLs.

# WKWebExtensionMatchPatternOptionsMatchBidirectionally (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates that two patterns should be checked in either direction while matching.

## Declaration

```objectivec
WKWebExtensionMatchPatternOptionsMatchBidirectionally
```

<a id="discussion"></a>

## Discussion

For example, A matches B, or B matches A. Invalid for matching URLs.
