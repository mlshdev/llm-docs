> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/removeaccessory(_:completionhandler:)](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/removeaccessory(_:completionhandler:))

# removeAccessory(\_:completionHandler:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Removes an accessory.

## Declaration

```swift
func removeAccessory(_ accessory: ASAccessory, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeAccessory(_ accessory: ASAccessory) async throws
```

## Parameters

- `accessory`: The accessory to remove.
- `completionHandler`: A block or closure that executes after the remove operation completes. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the remove operation encounters an error.

## See Also

### Managing accessories

- [renameAccessory(\_:options:completionHandler:)](renameaccessory%28__options_completionhandler_%29.md): Displays a view to rename an accessory.
- [ASAccessory.RenameOptions](../asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.

# removeAccessory:completionHandler: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Removes an accessory.

## Declaration

```objectivec
- (void) removeAccessory:(ASAccessory *) accessory completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `accessory`: The accessory to remove.
- `completionHandler`: A block or closure that executes after the remove operation completes. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the remove operation encounters an error.

## See Also

### Managing accessories

- [renameAccessory:options:completionHandler:](renameaccessory%28__options_completionhandler_%29.md): Displays a view to rename an accessory.
- [ASAccessoryRenameOptions](../asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.
