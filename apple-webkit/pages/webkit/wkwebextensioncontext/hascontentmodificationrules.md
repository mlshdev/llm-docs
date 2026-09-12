> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/hascontentmodificationrules](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/hascontentmodificationrules)

# hasContentModificationRules (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A boolean value indicating whether the extension includes rules used for content modification or blocking.

## Declaration

```swift
var hasContentModificationRules: Bool { get }
```

<a id="discussion"></a>

## Discussion

This includes both static rules available in the extension’s manifest and dynamic rules applied during a browsing session.

# hasContentModificationRules (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A boolean value indicating whether the extension includes rules used for content modification or blocking.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasContentModificationRules;
```

<a id="discussion"></a>

## Discussion

This includes both static rules available in the extension’s manifest and dynamic rules applied during a browsing session.
