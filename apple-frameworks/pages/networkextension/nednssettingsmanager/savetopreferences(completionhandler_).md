> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingsmanager/savetopreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nednssettingsmanager/savetopreferences(completionhandler:))

# saveToPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Save your DNS settings configuration to the system networking preferences.

## Declaration

```swift
func saveToPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func saveToPreferences() async throws
```

## Parameters

- `completionHandler`: An optional block that takes an [NSError](../../foundation/nserror.md) object. If specified, this block runs on your application’s main thread after the save operation completes. If an error occurs while saving the configuration, the block returns an `NSError` object.

<a id="Discussion"></a>

## Discussion

You must call [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md) at least once before calling this method the first time after your app launches.

## See Also

### Managing DNS configurations

- [shared()](shared%28%29.md): Access the single instance of a DNS settings manager.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load your DNS settings configuration from the system networking preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove your DNS settings configuration from the system networking preferences.

# saveToPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Save your DNS settings configuration to the system networking preferences.

## Declaration

```objectivec
- (void) saveToPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: An optional block that takes an [NSError](../../foundation/nserror.md) object. If specified, this block runs on your application’s main thread after the save operation completes. If an error occurs while saving the configuration, the block returns an `NSError` object.

<a id="Discussion"></a>

## Discussion

You must call [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md) at least once before calling this method the first time after your app launches.

## See Also

### Managing DNS configurations

- [sharedManager](shared%28%29.md): Access the single instance of a DNS settings manager.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load your DNS settings configuration from the system networking preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove your DNS settings configuration from the system networking preferences.
