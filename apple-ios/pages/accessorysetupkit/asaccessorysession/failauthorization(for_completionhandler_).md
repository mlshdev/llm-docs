> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/failauthorization(for:completionhandler:)](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/failauthorization(for:completionhandler:))

# failAuthorization(for:completionHandler:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

End authorization of a partially-configured accessory as a failure.

## Declaration

```swift
func failAuthorization(for accessory: ASAccessory, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func failAuthorization(for accessory: ASAccessory) async throws
```

## See Also

### Managing authorization

- [finishAuthorization(for:settings:completionHandler:)](finishauthorization%28for_settings_completionhandler_%29.md): Finish authorization of a partially-setup accessory.
- [ASAccessorySettings](../asaccessorysettings.md): Properties of an accessory.
- [updateAuthorization(for:descriptor:completionHandler:)](updateauthorization%28for_descriptor_completionhandler_%29.md): Displays a view to upgrade an accessory with additional technology permissions.

# failAuthorization:completionHandler: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

End authorization of a partially-configured accessory as a failure.

## Declaration

```objectivec
- (void) failAuthorization:(ASAccessory *) accessory completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Managing authorization

- [finishAuthorization:settings:completionHandler:](finishauthorization%28for_settings_completionhandler_%29.md): Finish authorization of a partially-setup accessory.
- [ASAccessorySettings](../asaccessorysettings.md): Properties of an accessory.
- [updateAuthorization:descriptor:completionHandler:](updateauthorization%28for_descriptor_completionhandler_%29.md): Displays a view to upgrade an accessory with additional technology permissions.
