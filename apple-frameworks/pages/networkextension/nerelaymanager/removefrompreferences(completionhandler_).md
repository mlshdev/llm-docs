> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelaymanager/removefrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nerelaymanager/removefrompreferences(completionhandler:))

# removeFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Remove your relay configuration from the system networking preferences.

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

After you remove your configuration, the [NERelayManager](../nerelaymanager.md) object still contains the configuration parameters. Calling [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md) clears out the configuration parameters from the [NERelayManager](../nerelaymanager.md) object.

## See Also

### Managing relay configurations

- [shared()](shared%28%29.md): Access the single instance of a network relay manager.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load your relay configuration from the system networking preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save your relay configuration to the system networking preferences.

# removeFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Remove your relay configuration from the system networking preferences.

## Declaration

```objectivec
- (void) removeFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: An optional block that takes an [NSError](../../foundation/nserror.md) object. If specified, this block runs on your application’s main thread after your configuration is removed. If an error occurs while removing the configuration, the block returns an `NSError` object.

<a id="Discussion"></a>

## Discussion

After you remove your configuration, the [NERelayManager](../nerelaymanager.md) object still contains the configuration parameters. Calling [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md) clears out the configuration parameters from the [NERelayManager](../nerelaymanager.md) object.

## See Also

### Managing relay configurations

- [sharedManager](shared%28%29.md): Access the single instance of a network relay manager.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load your relay configuration from the system networking preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save your relay configuration to the system networking preferences.
