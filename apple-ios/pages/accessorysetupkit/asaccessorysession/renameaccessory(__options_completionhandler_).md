> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/renameaccessory(_:options:completionhandler:)](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/renameaccessory(_:options:completionhandler:))

# renameAccessory(\_:options:completionHandler:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Displays a view to rename an accessory.

## Declaration

```swift
func renameAccessory(_ accessory: ASAccessory, options renameOptions: ASAccessory.RenameOptions = [], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func renameAccessory(_ accessory: ASAccessory, options renameOptions: ASAccessory.RenameOptions = []) async throws
```

## Parameters

- `accessory`: The accessory to rename.
- `renameOptions`: Options that affect the behavior of the rename operation.
- `completionHandler`: A block or closure that executes after the rename operation completes. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the rename operation encounters an error.

<a id="discussion"></a>

## Discussion

To rename a Wi-Fi SSID with this method, use the option [ssid](../asaccessory/renameoptions/ssid.md).

## See Also

### Managing accessories

- [ASAccessory.RenameOptions](../asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.
- [removeAccessory(\_:completionHandler:)](removeaccessory%28__completionhandler_%29.md): Removes an accessory.

# renameAccessory:options:completionHandler: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Displays a view to rename an accessory.

## Declaration

```objectivec
- (void) renameAccessory:(ASAccessory *) accessory options:(ASAccessoryRenameOptions) renameOptions completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `accessory`: The accessory to rename.
- `renameOptions`: Options that affect the behavior of the rename operation.
- `completionHandler`: A block or closure that executes after the rename operation completes. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the rename operation encounters an error.

<a id="discussion"></a>

## Discussion

To rename a Wi-Fi SSID with this method, use the option [ASAccessoryRenameSSID](../asaccessory/renameoptions/ssid.md).

## See Also

### Managing accessories

- [ASAccessoryRenameOptions](../asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.
- [removeAccessory:completionHandler:](removeaccessory%28__completionhandler_%29.md): Removes an accessory.
