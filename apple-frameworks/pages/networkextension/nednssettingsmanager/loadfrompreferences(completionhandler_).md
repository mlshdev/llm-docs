> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingsmanager/loadfrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nednssettingsmanager/loadfrompreferences(completionhandler:))

# loadFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Load your DNS settings configuration from the system networking preferences.

## Declaration

```swift
func loadFromPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func loadFromPreferences() async throws
```

## Parameters

- `completionHandler`: A block that takes an [NSError](../../foundation/nserror.md) object. This block runs on your application’s main thread after the load operation is complete. If an error occurs while loading the configuration, the block returns an `NSError` object.

<a id="Discussion"></a>

## Discussion

You must call this method at least once before calling [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md) for the first time after your app launches.

## See Also

### Managing DNS configurations

- [shared()](shared%28%29.md): Access the single instance of a DNS settings manager.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save your DNS settings configuration to the system networking preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove your DNS settings configuration from the system networking preferences.

# loadFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Load your DNS settings configuration from the system networking preferences.

## Declaration

```objectivec
- (void) loadFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that takes an [NSError](../../foundation/nserror.md) object. This block runs on your application’s main thread after the load operation is complete. If an error occurs while loading the configuration, the block returns an `NSError` object.

<a id="Discussion"></a>

## Discussion

You must call this method at least once before calling [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md) for the first time after your app launches.

## See Also

### Managing DNS configurations

- [sharedManager](shared%28%29.md): Access the single instance of a DNS settings manager.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save your DNS settings configuration to the system networking preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove your DNS settings configuration from the system networking preferences.
