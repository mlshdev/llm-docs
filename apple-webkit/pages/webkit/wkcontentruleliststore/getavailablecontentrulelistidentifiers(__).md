> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentruleliststore/getavailablecontentrulelistidentifiers(_:)](https://developer.apple.com/documentation/webkit/wkcontentruleliststore/getavailablecontentrulelistidentifiers(_:))

# getAvailableContentRuleListIdentifiers(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Fetches the identifiers for all rule lists in the store asynchronously.

## Declaration

```swift
func getAvailableContentRuleListIdentifiers(_ completionHandler: (([String]?) -> Void)!)
```

```swift
func availableIdentifiers() async -> [String]?
```

## Parameters

- `completionHandler`: A completion handler block to call with the results. This block has no return value and takes the following parameter:

  - **identifierArray**: An array of strings, each of which corresponds to an identifier for a rule list in the data store. Use each string to look up the associated [WKContentRuleList](../wkcontentrulelist.md) object. If the data store has no rule lists, the array is empty.

## See Also

### Accessing the Current Rule Lists

- [lookUpContentRuleList(forIdentifier:completionHandler:)](lookupcontentrulelist%28foridentifier_completionhandler_%29.md): Searches asynchronously for a specific rule list in the data store.

# getAvailableContentRuleListIdentifiers: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Fetches the identifiers for all rule lists in the store asynchronously.

## Declaration

```objectivec
- (void) getAvailableContentRuleListIdentifiers:(void (^)(NSArray<NSString *> *)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler block to call with the results. This block has no return value and takes the following parameter:

  - **identifierArray**: An array of strings, each of which corresponds to an identifier for a rule list in the data store. Use each string to look up the associated [WKContentRuleList](../wkcontentrulelist.md) object. If the data store has no rule lists, the array is empty.

## See Also

### Accessing the Current Rule Lists

- [lookUpContentRuleListForIdentifier:completionHandler:](lookupcontentrulelist%28foridentifier_completionhandler_%29.md): Searches asynchronously for a specific rule list in the data store.
