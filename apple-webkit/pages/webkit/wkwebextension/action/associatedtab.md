> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/action/associatedtab](https://developer.apple.com/documentation/webkit/wkwebextension/action/associatedtab)

# associatedTab (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The tab that this action is associated with, or `nil` if it’s the default action.

## Declaration

```swift
weak var associatedTab: (any WKWebExtensionTab)? { get }
```

<a id="discussion"></a>

## Discussion

When this property is `nil`, it indicates that the action is the default action and not associated with a specific tab.

# associatedTab (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The tab that this action is associated with, or `nil` if it’s the default action.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<WKWebExtensionTab> associatedTab;
```

<a id="discussion"></a>

## Discussion

When this property is `nil`, it indicates that the action is the default action and not associated with a specific tab.
