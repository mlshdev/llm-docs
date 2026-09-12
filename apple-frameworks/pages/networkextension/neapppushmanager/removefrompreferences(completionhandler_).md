> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager/removefrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/neapppushmanager/removefrompreferences(completionhandler:))

# removeFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes the manager’s configuration from the persistent store.

## Declaration

```swift
func removeFromPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeFromPreferences() async throws
```

## Parameters

- `completionHandler`: A completion block that the framework calls after it removes the configuration. If removal failed, the `error` parameter indicates the reason for the failure; otherwise, this parameter is `nil`.

## See Also

### Persisting manager settings

- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Loads the manager’s saved configuration from the persistent store.
- [loadAllFromPreferences(completionHandler:)](loadallfrompreferences%28completionhandler_%29.md): Loads all saved manager configurations asynchronously.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Saves the manager’s configuration in the persistent store.

# removeFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes the manager’s configuration from the persistent store.

## Declaration

```objectivec
- (void) removeFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A completion block that the framework calls after it removes the configuration. If removal failed, the `error` parameter indicates the reason for the failure; otherwise, this parameter is `nil`.

## See Also

### Persisting manager settings

- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Loads the manager’s saved configuration from the persistent store.
- [loadAllFromPreferencesWithCompletionHandler:](loadallfrompreferences%28completionhandler_%29.md): Loads all saved manager configurations asynchronously.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Saves the manager’s configuration in the persistent store.
