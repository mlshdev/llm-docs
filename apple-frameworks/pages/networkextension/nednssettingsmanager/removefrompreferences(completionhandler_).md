> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingsmanager/removefrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nednssettingsmanager/removefrompreferences(completionhandler:))

# removeFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Remove your DNS settings configuration from the system networking preferences.

## Declaration

```swift
func removeFromPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeFromPreferences() async throws
```

## Parameters

- `completionHandler`: An optional block that takes an [NSError](../../foundation/nserror.md) object. If specified, this block runs on your application’s main thread after your configuration is removed. If an error occurs while removing the configuration, the block returns an `NSError` object.

<a id="Discussion"></a>

## Discussion

After you remove your configuration, the `NEDNSSettingsManager` object still contains the configuration parameters. Calling [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md) clears out the configuration parameters from the `NEDNSSettingsManager` object.

## See Also

### Managing DNS configurations

- [shared()](shared%28%29.md): Access the single instance of a DNS settings manager.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load your DNS settings configuration from the system networking preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save your DNS settings configuration to the system networking preferences.

# removeFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Remove your DNS settings configuration from the system networking preferences.

## Declaration

```objectivec
- (void) removeFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: An optional block that takes an [NSError](../../foundation/nserror.md) object. If specified, this block runs on your application’s main thread after your configuration is removed. If an error occurs while removing the configuration, the block returns an `NSError` object.

<a id="Discussion"></a>

## Discussion

After you remove your configuration, the `NEDNSSettingsManager` object still contains the configuration parameters. Calling [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md) clears out the configuration parameters from the `NEDNSSettingsManager` object.

## See Also

### Managing DNS configurations

- [sharedManager](shared%28%29.md): Access the single instance of a DNS settings manager.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load your DNS settings configuration from the system networking preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save your DNS settings configuration to the system networking preferences.
