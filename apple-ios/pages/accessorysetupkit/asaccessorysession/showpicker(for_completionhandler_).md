> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/showpicker(for:completionhandler:)](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/showpicker(for:completionhandler:))

# showPicker(for:completionHandler:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Present a picker that shows discovered accessories matching an array of display items.

## Declaration

```swift
func showPicker(for displayItems: [ASPickerDisplayItem], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func showPicker(for displayItems: [ASPickerDisplayItem]) async throws
```

## Parameters

- `displayItems`: An array of [ASPickerDisplayItem](../aspickerdisplayitem.md) instances describing accessories your app can set up. The picker displays only discovered accessories that match the properties of items in this array.
- `completionHandler`: A block or closure that the picker calls when it completes the operation. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the picker encounters an error.

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

The session’s event handler receives events when this picker displays and dismisses, as well as when the person using the app picks an accessory.

To migrate previously-configured accessories to AccessorySetupKit, add instances of [ASMigrationDisplayItem](../asmigrationdisplayitem.md) to the `displayItems` array.

## See Also

### Displaying an accessory picker

- [showPicker(completionHandler:)](showpicker%28completionhandler_%29.md): Present a picker that shows accessories managed by a Device Discovery Extension in your app.

# showPickerForDisplayItems:completionHandler: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Present a picker that shows discovered accessories matching an array of display items.

## Declaration

```objectivec
- (void) showPickerForDisplayItems:(NSArray<ASPickerDisplayItem *> *) displayItems completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `displayItems`: An array of [ASPickerDisplayItem](../aspickerdisplayitem.md) instances describing accessories your app can set up. The picker displays only discovered accessories that match the properties of items in this array.
- `completionHandler`: A block or closure that the picker calls when it completes the operation. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the picker encounters an error.

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

The session’s event handler receives events when this picker displays and dismisses, as well as when the person using the app picks an accessory.

To migrate previously-configured accessories to AccessorySetupKit, add instances of [ASMigrationDisplayItem](../asmigrationdisplayitem.md) to the `displayItems` array.

## See Also

### Displaying an accessory picker

- [showPickerWithCompletionHandler:](showpicker%28completionhandler_%29.md): Present a picker that shows accessories managed by a Device Discovery Extension in your app.
