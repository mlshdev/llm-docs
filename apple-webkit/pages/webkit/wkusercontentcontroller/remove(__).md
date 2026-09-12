> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller/remove(_:)](https://developer.apple.com/documentation/webkit/wkusercontentcontroller/remove(_:))

# remove(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Removes the specified rule list from the content controller object.

## Declaration

```swift
func remove(_ contentRuleList: WKContentRuleList)
```

## Parameters

- `contentRuleList`: The rule list to remove.

<a id="Discussion"></a>

## Discussion

This method removes the rule list only from the user content controller object. You can still access the rule list from the [WKContentRuleListStore](../wkcontentruleliststore.md) object you used to create it.

## See Also

### Adding and Removing Content Rules

- [add(\_:)](add%28__%29.md): Adds the specified content rule list to the content controller object.
- [removeAllContentRuleLists()](removeallcontentrulelists%28%29.md): Removes all rules lists from the content controller.
- [WKContentRuleList](../wkcontentrulelist.md): A compiled list of rules to apply to web content.

# removeContentRuleList: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Removes the specified rule list from the content controller object.

## Declaration

```objectivec
- (void) removeContentRuleList:(WKContentRuleList *) contentRuleList;
```

## Parameters

- `contentRuleList`: The rule list to remove.

<a id="Discussion"></a>

## Discussion

This method removes the rule list only from the user content controller object. You can still access the rule list from the [WKContentRuleListStore](../wkcontentruleliststore.md) object you used to create it.

## See Also

### Adding and Removing Content Rules

- [addContentRuleList:](add%28__%29.md): Adds the specified content rule list to the content controller object.
- [removeAllContentRuleLists](removeallcontentrulelists%28%29.md): Removes all rules lists from the content controller.
- [WKContentRuleList](../wkcontentrulelist.md): A compiled list of rules to apply to web content.
