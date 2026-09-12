> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/tabconfiguration/parenttab](https://developer.apple.com/documentation/webkit/wkwebextension/tabconfiguration/parenttab)

# parentTab (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the parent tab with which the tab should be related.

## Declaration

```swift
var parentTab: (any WKWebExtensionTab)? { get }
```

<a id="discussion"></a>

## Discussion

If this property is `nil`, no parent tab was specified.

# parentTab (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the parent tab with which the tab should be related.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) id<WKWebExtensionTab> parentTab;
```

<a id="discussion"></a>

## Discussion

If this property is `nil`, no parent tab was specified.
