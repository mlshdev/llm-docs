> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentruleliststore/compilecontentrulelist(foridentifier:encodedcontentrulelist:completionhandler:)](https://developer.apple.com/documentation/webkit/wkcontentruleliststore/compilecontentrulelist(foridentifier:encodedcontentrulelist:completionhandler:))

# compileContentRuleList(forIdentifier:encodedContentRuleList:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Compiles the specified JSON content into a new rule list and adds it to the current data store.

## Declaration

```swift
func compileContentRuleList(forIdentifier identifier: String!, encodedContentRuleList: String!, completionHandler: ((WKContentRuleList?, (any Error)?) -> Void)!)
```

```swift
func compileContentRuleList(forIdentifier identifier: String!, encodedContentRuleList: String!) async throws -> WKContentRuleList?
```

## Parameters

- `identifier`: A unique identifier for the new list. If a list with the specified identifier already exists in the store, this method overwrites the old rule list with the new content.
- `encodedContentRuleList`: The JSON source for the new rule list. For information about how to format the JSON content, see [Creating a content blocker](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker).
- `completionHandler`: A completion handler block to call after compilation finishes. This block has no return value and takes the following parameters:

  - **ruleList**: The [WKContentRuleList](../wkcontentrulelist.md) object that encapsulates the compiled rules derived from the `encodedContentRuleList` parameter. This parameter is `nil` if an error occurs during compilation.
  - **error**: `nil` on success, or an error object if a problem occurred.

## See Also

### Creating and Deleting Content Rule Lists

- [removeContentRuleList(forIdentifier:completionHandler:)](removecontentrulelist%28foridentifier_completionhandler_%29.md): Removes a rule list from the current data store asynchronously.

# compileContentRuleListForIdentifier:encodedContentRuleList:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Compiles the specified JSON content into a new rule list and adds it to the current data store.

## Declaration

```objectivec
- (void) compileContentRuleListForIdentifier:(NSString *) identifier encodedContentRuleList:(NSString *) encodedContentRuleList completionHandler:(void (^)(WKContentRuleList *, NSError *)) completionHandler;
```

## Parameters

- `identifier`: A unique identifier for the new list. If a list with the specified identifier already exists in the store, this method overwrites the old rule list with the new content.
- `encodedContentRuleList`: The JSON source for the new rule list. For information about how to format the JSON content, see [Creating a content blocker](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker).
- `completionHandler`: A completion handler block to call after compilation finishes. This block has no return value and takes the following parameters:

  - **ruleList**: The [WKContentRuleList](../wkcontentrulelist.md) object that encapsulates the compiled rules derived from the `encodedContentRuleList` parameter. This parameter is `nil` if an error occurs during compilation.
  - **error**: `nil` on success, or an error object if a problem occurred.

## See Also

### Creating and Deleting Content Rule Lists

- [removeContentRuleListForIdentifier:completionHandler:](removecontentrulelist%28foridentifier_completionhandler_%29.md): Removes a rule list from the current data store asynchronously.
