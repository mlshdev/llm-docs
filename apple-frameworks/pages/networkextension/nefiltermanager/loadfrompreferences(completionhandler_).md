> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/loadfrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nefiltermanager/loadfrompreferences(completionhandler:))

# loadFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Load the filter configuration from the Network Extension preferences.

## Declaration

```swift
func loadFromPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func loadFromPreferences() async throws
```

## Parameters

- `completionHandler`: A block that takes an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the load operation is complete. If the configuration does not exist in the Network Extension preferences or is loaded successfully, the error parameter will be nil. If an error occurred while loading the configuration, the error parameter will be set to an `NSError` object containing details about the error. See `NEFilterManagerError` for a list of possible errors.

<a id="Discussion"></a>

## Discussion

You must call this method at least once before calling `saveToPreferencesWithCompletionHandler`: for the first time after your app launches.

## See Also

### Managing the filter configuration

- [shared()](shared%28%29.md): Access the single instance of `NEFilterManager`.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save the filter configuration in the Network Extension preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove the filter configuration from the Network Extension preferences.

# loadFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Load the filter configuration from the Network Extension preferences.

## Declaration

```objectivec
- (void) loadFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that takes an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the load operation is complete. If the configuration does not exist in the Network Extension preferences or is loaded successfully, the error parameter will be nil. If an error occurred while loading the configuration, the error parameter will be set to an `NSError` object containing details about the error. See `NEFilterManagerError` for a list of possible errors.

<a id="Discussion"></a>

## Discussion

You must call this method at least once before calling `saveToPreferencesWithCompletionHandler`: for the first time after your app launches.

## See Also

### Managing the filter configuration

- [sharedManager](shared%28%29.md): Access the single instance of `NEFilterManager`.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save the filter configuration in the Network Extension preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove the filter configuration from the Network Extension preferences.
