> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentruleliststore/lookupcontentrulelist(foridentifier:completionhandler:)](https://developer.apple.com/documentation/webkit/wkcontentruleliststore/lookupcontentrulelist(foridentifier:completionhandler:))

# lookUpContentRuleList(forIdentifier:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Searches asynchronously for a specific rule list in the data store.

## Declaration

```swift
func lookUpContentRuleList(forIdentifier identifier: String!, completionHandler: ((WKContentRuleList?, (any Error)?) -> Void)!)
```

```swift
func contentRuleList(forIdentifier identifier: String!) async throws -> WKContentRuleList?
```

## Parameters

- `identifier`: The identifier of the list you want.
- `completionHandler`: A completion handler block to call with the results of the search. This block has no return value and takes the following parameters:

  - **ruleList**: The [WKContentRuleList](../wkcontentrulelist.md) object with the specified identifier. This parameter is `nil` if the error occurs during the search.
  - **error**: `nil` on success, or an error object if an error occurs during the search.

## See Also

### Accessing the Current Rule Lists

- [getAvailableContentRuleListIdentifiers(\_:)](getavailablecontentrulelistidentifiers%28__%29.md): Fetches the identifiers for all rule lists in the store asynchronously.

# lookUpContentRuleListForIdentifier:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Searches asynchronously for a specific rule list in the data store.

## Declaration

```objectivec
- (void) lookUpContentRuleListForIdentifier:(NSString *) identifier completionHandler:(void (^)(WKContentRuleList *, NSError *)) completionHandler;
```

## Parameters

- `identifier`: The identifier of the list you want.
- `completionHandler`: A completion handler block to call with the results of the search. This block has no return value and takes the following parameters:

  - **ruleList**: The [WKContentRuleList](../wkcontentrulelist.md) object with the specified identifier. This parameter is `nil` if the error occurs during the search.
  - **error**: `nil` on success, or an error object if an error occurs during the search.

## See Also

### Accessing the Current Rule Lists

- [getAvailableContentRuleListIdentifiers:](getavailablecontentrulelistidentifiers%28__%29.md): Fetches the identifiers for all rule lists in the store asynchronously.
