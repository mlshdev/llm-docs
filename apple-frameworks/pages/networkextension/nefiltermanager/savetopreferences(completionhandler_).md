> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/savetopreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nefiltermanager/savetopreferences(completionhandler:))

# saveToPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Save the filter configuration in the Network Extension preferences.

## Declaration

```swift
func saveToPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func saveToPreferences() async throws
```

## Parameters

- `completionHandler`: A block that takes an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the save operation is complete. If the configuration could not be saved to the preferences, the error parameter will be set to an `NSError` object containing details about the error. See `NEFilterManagerError` for a list of possible errors. If the configuration is saved successfully then the error parameter will be set to nil.

<a id="Discussion"></a>

## Discussion

You must call `loadFromPreferencesWithCompletionHandler:` at least once before calling this method the first time after your app launches.

## See Also

### Managing the filter configuration

- [shared()](shared%28%29.md): Access the single instance of `NEFilterManager`.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load the filter configuration from the Network Extension preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove the filter configuration from the Network Extension preferences.

# saveToPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Save the filter configuration in the Network Extension preferences.

## Declaration

```objectivec
- (void) saveToPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that takes an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the save operation is complete. If the configuration could not be saved to the preferences, the error parameter will be set to an `NSError` object containing details about the error. See `NEFilterManagerError` for a list of possible errors. If the configuration is saved successfully then the error parameter will be set to nil.

<a id="Discussion"></a>

## Discussion

You must call `loadFromPreferencesWithCompletionHandler:` at least once before calling this method the first time after your app launches.

## See Also

### Managing the filter configuration

- [sharedManager](shared%28%29.md): Access the single instance of `NEFilterManager`.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load the filter configuration from the Network Extension preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove the filter configuration from the Network Extension preferences.
