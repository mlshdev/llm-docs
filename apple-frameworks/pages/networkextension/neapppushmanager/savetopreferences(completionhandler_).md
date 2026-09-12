> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager/savetopreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/neapppushmanager/savetopreferences(completionhandler:))

# saveToPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Saves the manager’s configuration in the persistent store.

## Declaration

```swift
func saveToPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func saveToPreferences() async throws
```

## Parameters

- `completionHandler`: A completion block that the framework calls after it saves the configuration. If saving failed, the `error` parameter indicates the reason for the failure; otherwise, this parameter is `nil`.

## See Also

### Persisting manager settings

- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Loads the manager’s saved configuration from the persistent store.
- [loadAllFromPreferences(completionHandler:)](loadallfrompreferences%28completionhandler_%29.md): Loads all saved manager configurations asynchronously.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Removes the manager’s configuration from the persistent store.

# saveToPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Saves the manager’s configuration in the persistent store.

## Declaration

```objectivec
- (void) saveToPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A completion block that the framework calls after it saves the configuration. If saving failed, the `error` parameter indicates the reason for the failure; otherwise, this parameter is `nil`.

## See Also

### Persisting manager settings

- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Loads the manager’s saved configuration from the persistent store.
- [loadAllFromPreferencesWithCompletionHandler:](loadallfrompreferences%28completionhandler_%29.md): Loads all saved manager configurations asynchronously.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Removes the manager’s configuration from the persistent store.
