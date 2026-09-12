> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/updateauthorization(for:descriptor:completionhandler:)](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/updateauthorization(for:descriptor:completionhandler:))

# updateAuthorization(for:descriptor:completionHandler:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Displays a view to upgrade an accessory with additional technology permissions.

## Declaration

```swift
func updateAuthorization(for accessory: ASAccessory, descriptor: ASDiscoveryDescriptor, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateAuthorization(for accessory: ASAccessory, descriptor: ASDiscoveryDescriptor) async throws
```

## Parameters

- `accessory`: The accessory to update.
- `descriptor`: An updated descriptor that the picker uses to add new technology authorization for the provided accessory.
- `completionHandler`: A block or closure that executes after the picker is shown. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the upgrade operation encounters an error. In Swift, you can omit the completion handler by calling the method asynchronously and catching any error thrown by the method.

<a id="discussion"></a>

## Discussion

Call this method to upgrade previously-added SSID-based accessories to use WiFi Aware.

## See Also

### Managing authorization

- [finishAuthorization(for:settings:completionHandler:)](finishauthorization%28for_settings_completionhandler_%29.md): Finish authorization of a partially-setup accessory.
- [ASAccessorySettings](../asaccessorysettings.md): Properties of an accessory.
- [failAuthorization(for:completionHandler:)](failauthorization%28for_completionhandler_%29.md): End authorization of a partially-configured accessory as a failure.

# updateAuthorization:descriptor:completionHandler: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Displays a view to upgrade an accessory with additional technology permissions.

## Declaration

```objectivec
- (void) updateAuthorization:(ASAccessory *) accessory descriptor:(ASDiscoveryDescriptor *) descriptor completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `accessory`: The accessory to update.
- `descriptor`: An updated descriptor that the picker uses to add new technology authorization for the provided accessory.
- `completionHandler`: A block or closure that executes after the picker is shown. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the upgrade operation encounters an error. In Swift, you can omit the completion handler by calling the method asynchronously and catching any error thrown by the method.

<a id="discussion"></a>

## Discussion

Call this method to upgrade previously-added SSID-based accessories to use WiFi Aware.

## See Also

### Managing authorization

- [finishAuthorization:settings:completionHandler:](finishauthorization%28for_settings_completionhandler_%29.md): Finish authorization of a partially-setup accessory.
- [ASAccessorySettings](../asaccessorysettings.md): Properties of an accessory.
- [failAuthorization:completionHandler:](failauthorization%28for_completionhandler_%29.md): End authorization of a partially-configured accessory as a failure.
