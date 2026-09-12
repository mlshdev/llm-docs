> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentruleliststore/removecontentrulelist(foridentifier:completionhandler:)](https://developer.apple.com/documentation/webkit/wkcontentruleliststore/removecontentrulelist(foridentifier:completionhandler:))

# removeContentRuleList(forIdentifier:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Removes a rule list from the current data store asynchronously.

## Declaration

```swift
func removeContentRuleList(forIdentifier identifier: String!, completionHandler: (((any Error)?) -> Void)!)
```

```swift
func removeContentRuleList(forIdentifier identifier: String!) async throws
```

## Parameters

- `identifier`: The unique identifier for the rule list.
- `completionHandler`: A completion handler block to call after the removal of the content rule list. This block has no return value and takes the following parameter:

  - **error**: `nil` on success, or an error object if the store encountered an error when deleting the rule list.

<a id="Discussion"></a>

## Discussion

This method also removes the persistent copy of the rules stored on disk.

## See Also

### Creating and Deleting Content Rule Lists

- [compileContentRuleList(forIdentifier:encodedContentRuleList:completionHandler:)](compilecontentrulelist%28foridentifier_encodedcontentrulelist_completionhandler_%29.md): Compiles the specified JSON content into a new rule list and adds it to the current data store.

# removeContentRuleListForIdentifier:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Removes a rule list from the current data store asynchronously.

## Declaration

```objectivec
- (void) removeContentRuleListForIdentifier:(NSString *) identifier completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `identifier`: The unique identifier for the rule list.
- `completionHandler`: A completion handler block to call after the removal of the content rule list. This block has no return value and takes the following parameter:

  - **error**: `nil` on success, or an error object if the store encountered an error when deleting the rule list.

<a id="Discussion"></a>

## Discussion

This method also removes the persistent copy of the rules stored on disk.

## See Also

### Creating and Deleting Content Rule Lists

- [compileContentRuleListForIdentifier:encodedContentRuleList:completionHandler:](compilecontentrulelist%28foridentifier_encodedcontentrulelist_completionhandler_%29.md): Compiles the specified JSON content into a new rule list and adds it to the current data store.
