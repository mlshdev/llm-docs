> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager/loadfrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/neapppushmanager/loadfrompreferences(completionhandler:))

# loadFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Loads the manager’s saved configuration from the persistent store.

## Declaration

```swift
func loadFromPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func loadFromPreferences() async throws
```

## Parameters

- `completionHandler`: A completion block that the framework calls after it loads the configuration. If loading failed, the `error` parameter indicates the reason for the failure; otherwise, this parameter is `nil`.

## See Also

### Persisting manager settings

- [loadAllFromPreferences(completionHandler:)](loadallfrompreferences%28completionhandler_%29.md): Loads all saved manager configurations asynchronously.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Saves the manager’s configuration in the persistent store.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Removes the manager’s configuration from the persistent store.

# loadFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Loads the manager’s saved configuration from the persistent store.

## Declaration

```objectivec
- (void) loadFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A completion block that the framework calls after it loads the configuration. If loading failed, the `error` parameter indicates the reason for the failure; otherwise, this parameter is `nil`.

## See Also

### Persisting manager settings

- [loadAllFromPreferencesWithCompletionHandler:](loadallfrompreferences%28completionhandler_%29.md): Loads all saved manager configurations asynchronously.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Saves the manager’s configuration in the persistent store.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Removes the manager’s configuration from the persistent store.
