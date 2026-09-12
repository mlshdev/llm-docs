> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/finishauthorization(for:settings:completionhandler:)](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/finishauthorization(for:settings:completionhandler:))

# finishAuthorization(for:settings:completionHandler:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Finish authorization of a partially-setup accessory.

## Declaration

```swift
func finishAuthorization(for accessory: ASAccessory, settings: ASAccessorySettings, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func finishAuthorization(for accessory: ASAccessory, settings: ASAccessorySettings) async throws
```

<a id="discussion"></a>

## Discussion

Use this method in scenarios where an accessory has multiple wireless interfaces. For example, when an accessory has both Bluetooth and Wi-Fi, and your descriptor may only provides an SSID prefix. In this case, the Bluetooth interface onboards first and your app needs to then finish authorization with the full SSID.

## See Also

### Managing authorization

- [ASAccessorySettings](../asaccessorysettings.md): Properties of an accessory.
- [failAuthorization(for:completionHandler:)](failauthorization%28for_completionhandler_%29.md): End authorization of a partially-configured accessory as a failure.
- [updateAuthorization(for:descriptor:completionHandler:)](updateauthorization%28for_descriptor_completionhandler_%29.md): Displays a view to upgrade an accessory with additional technology permissions.

# finishAuthorization:settings:completionHandler: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Finish authorization of a partially-setup accessory.

## Declaration

```objectivec
- (void) finishAuthorization:(ASAccessory *) accessory settings:(ASAccessorySettings *) settings completionHandler:(void (^)(NSError *error)) completionHandler;
```

<a id="discussion"></a>

## Discussion

Use this method in scenarios where an accessory has multiple wireless interfaces. For example, when an accessory has both Bluetooth and Wi-Fi, and your descriptor may only provides an SSID prefix. In this case, the Bluetooth interface onboards first and your app needs to then finish authorization with the full SSID.

## See Also

### Managing authorization

- [ASAccessorySettings](../asaccessorysettings.md): Properties of an accessory.
- [failAuthorization:completionHandler:](failauthorization%28for_completionhandler_%29.md): End authorization of a partially-configured accessory as a failure.
- [updateAuthorization:descriptor:completionHandler:](updateauthorization%28for_descriptor_completionhandler_%29.md): Displays a view to upgrade an accessory with additional technology permissions.
