> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/removefrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nefiltermanager/removefrompreferences(completionhandler:))

# removeFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Remove the filter configuration from the Network Extension preferences.

## Declaration

```swift
func removeFromPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeFromPreferences() async throws
```

## Parameters

- `completionHandler`: A block that takes an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the removal operation is complete. If the configuration does not exist in the Network Extension preferences or an error occurs while removing it, the error parameter will be set to an `NSError` object containing details about the error. See `NEFilterManagerError` for a list of possible errors. If the configuration is removed successfully the error parameter will be set to nil.

<a id="Discussion"></a>

## Discussion

After the configuration is removed from the preferences the `NEFilterManager` object will still contain the configuration parameters. Calling `loadFromPreferencesWithCompletionHandler:` will clear out the configuration parameters from the `NEFilterManager` object.

## See Also

### Managing the filter configuration

- [shared()](shared%28%29.md): Access the single instance of `NEFilterManager`.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load the filter configuration from the Network Extension preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save the filter configuration in the Network Extension preferences.

# removeFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Remove the filter configuration from the Network Extension preferences.

## Declaration

```objectivec
- (void) removeFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that takes an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the removal operation is complete. If the configuration does not exist in the Network Extension preferences or an error occurs while removing it, the error parameter will be set to an `NSError` object containing details about the error. See `NEFilterManagerError` for a list of possible errors. If the configuration is removed successfully the error parameter will be set to nil.

<a id="Discussion"></a>

## Discussion

After the configuration is removed from the preferences the `NEFilterManager` object will still contain the configuration parameters. Calling `loadFromPreferencesWithCompletionHandler:` will clear out the configuration parameters from the `NEFilterManager` object.

## See Also

### Managing the filter configuration

- [sharedManager](shared%28%29.md): Access the single instance of `NEFilterManager`.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load the filter configuration from the Network Extension preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save the filter configuration in the Network Extension preferences.
