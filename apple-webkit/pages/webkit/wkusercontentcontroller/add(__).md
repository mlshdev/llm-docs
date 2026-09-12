> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller/add(_:)](https://developer.apple.com/documentation/webkit/wkusercontentcontroller/add(_:))

# add(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Adds the specified content rule list to the content controller object.

## Declaration

```swift
func add(_ contentRuleList: WKContentRuleList)
```

## Parameters

- `contentRuleList`: The rule list to add. Create and retrieve rules lists using a `WKContentExtensionStore` object.

<a id="Discussion"></a>

## Discussion

Call this method to apply a set of content filtering rules to your web view’s configuration.

## See Also

### Adding and Removing Content Rules

- [remove(\_:)](remove%28__%29.md): Removes the specified rule list from the content controller object.
- [removeAllContentRuleLists()](removeallcontentrulelists%28%29.md): Removes all rules lists from the content controller.
- [WKContentRuleList](../wkcontentrulelist.md): A compiled list of rules to apply to web content.

# addContentRuleList: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Adds the specified content rule list to the content controller object.

## Declaration

```objectivec
- (void) addContentRuleList:(WKContentRuleList *) contentRuleList;
```

## Parameters

- `contentRuleList`: The rule list to add. Create and retrieve rules lists using a `WKContentExtensionStore` object.

<a id="Discussion"></a>

## Discussion

Call this method to apply a set of content filtering rules to your web view’s configuration.

## See Also

### Adding and Removing Content Rules

- [removeContentRuleList:](remove%28__%29.md): Removes the specified rule list from the content controller object.
- [removeAllContentRuleLists](removeallcontentrulelists%28%29.md): Removes all rules lists from the content controller.
- [WKContentRuleList](../wkcontentrulelist.md): A compiled list of rules to apply to web content.
