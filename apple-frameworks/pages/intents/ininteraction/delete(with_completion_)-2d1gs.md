> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction/delete(with:completion:)-2d1gs](https://developer.apple.com/documentation/intents/ininteraction/delete(with:completion:)-2d1gs)

# delete(with:completion:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Deletes the specified interactions that were donated by the calling app.

## Declaration

```swift
class func delete(with identifiers: [String], completion: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func delete(with identifiers: [String]) async throws
```

## Parameters

- `identifiers`: An array of strings containing the identifiers of the interactions that you want to delete. Each string corresponds to the value stored in the [identifier](identifier.md) property of the interaction object.
- `completion`: A block to execute with the results. Provide a block if you want to know whether the deletion action was successful. The block has no return value and takes the following parameter.

  - **error**: An error object indicating a problem occurred. On success, this parameter is `nil`. If there was an error, this parameter contains an error object describing what happened.

## Mentioned In

- [Deleting Donated Shortcuts](../../sirikit/deleting-donated-shortcuts.md)
- [Improving Siri Media Interactions and App Selection](../../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="Discussion"></a>

## Discussion

Call this method to delete a specific set of donated Siri interactions. Typically, you delete interactions when they are no longer relevant. If you provide a block in the `completion` parameter, the system executes your block asynchronously with the results.

## See Also

### Deleting Interactions from the System

- [deleteAll(completion:)](deleteall%28completion_%29.md): Deletes all interactions that you donated previously.
- [delete(with:completion:)](delete%28with_completion_%29-tcq9.md): Deletes the interactions with the specified group identifier.

# deleteInteractionsWithIdentifiers:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Deletes the specified interactions that were donated by the calling app.

## Declaration

```objectivec
+ (void) deleteInteractionsWithIdentifiers:(NSArray<NSString *> *) identifiers completion:(void (^)(NSError *error)) completion;
```

## Parameters

- `identifiers`: An array of strings containing the identifiers of the interactions that you want to delete. Each string corresponds to the value stored in the [identifier](identifier.md) property of the interaction object.
- `completion`: A block to execute with the results. Provide a block if you want to know whether the deletion action was successful. The block has no return value and takes the following parameter.

  - **error**: An error object indicating a problem occurred. On success, this parameter is `nil`. If there was an error, this parameter contains an error object describing what happened.

## Mentioned In

- [Deleting Donated Shortcuts](../../sirikit/deleting-donated-shortcuts.md)
- [Improving Siri Media Interactions and App Selection](../../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="Discussion"></a>

## Discussion

Call this method to delete a specific set of donated Siri interactions. Typically, you delete interactions when they are no longer relevant. If you provide a block in the `completion` parameter, the system executes your block asynchronously with the results.

## See Also

### Deleting Interactions from the System

- [deleteAllInteractionsWithCompletion:](deleteall%28completion_%29.md): Deletes all interactions that you donated previously.
- [deleteInteractionsWithGroupIdentifier:completion:](delete%28with_completion_%29-tcq9.md): Deletes the interactions with the specified group identifier.
