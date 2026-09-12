> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller/removeallcontentrulelists()](https://developer.apple.com/documentation/webkit/wkusercontentcontroller/removeallcontentrulelists())

# removeAllContentRuleLists() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Removes all rules lists from the content controller.

## Declaration

```swift
func removeAllContentRuleLists()
```

<a id="Discussion"></a>

## Discussion

This method removes the rule lists only from the user content controller object. You can still access rule lists from the [WKContentRuleListStore](../wkcontentruleliststore.md) objects you used to create them.

## See Also

### Adding and Removing Content Rules

- [add(\_:)](add%28__%29.md): Adds the specified content rule list to the content controller object.
- [remove(\_:)](remove%28__%29.md): Removes the specified rule list from the content controller object.
- [WKContentRuleList](../wkcontentrulelist.md): A compiled list of rules to apply to web content.

# removeAllContentRuleLists (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Removes all rules lists from the content controller.

## Declaration

```objectivec
- (void) removeAllContentRuleLists;
```

<a id="Discussion"></a>

## Discussion

This method removes the rule lists only from the user content controller object. You can still access rule lists from the [WKContentRuleListStore](../wkcontentruleliststore.md) objects you used to create them.

## See Also

### Adding and Removing Content Rules

- [addContentRuleList:](add%28__%29.md): Adds the specified content rule list to the content controller object.
- [removeContentRuleList:](remove%28__%29.md): Removes the specified rule list from the content controller object.
- [WKContentRuleList](../wkcontentrulelist.md): A compiled list of rules to apply to web content.
