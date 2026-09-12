> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/diddeselecttabs(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/diddeselecttabs(_:))

# didDeselectTabs(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when tabs are deselected to fire appropriate events with only this extension.

## Declaration

```swift
func didDeselectTabs(_ deselectedTabs: [any WKWebExtensionTab])
```

## Parameters

- `deselectedTabs`: The set of tabs that were deselected.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension that tabs have been deselected. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

# didDeselectTabs: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when tabs are deselected to fire appropriate events with only this extension.

## Declaration

```objectivec
- (void) didDeselectTabs:(NSArray<id<WKWebExtensionTab>> *) deselectedTabs;
```

## Parameters

- `deselectedTabs`: The set of tabs that were deselected.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension that tabs have been deselected. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.
