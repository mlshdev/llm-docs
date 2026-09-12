> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/updatepicker(showing:completionhandler:)](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/updatepicker(showing:completionhandler:))

# updatePicker(showing:completionHandler:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+

Updates the picker with app-filtered accessories.

## Declaration

```swift
func updatePicker(showing displayItems: [ASDiscoveredDisplayItem], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updatePicker(showing displayItems: [ASDiscoveredDisplayItem]) async throws
```

## Parameters

- `displayItems`: The app-filtered accessories to show in the picker.
- `completionHandler`: A block or closure that executes after the updatePicker operation completes. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the operation encounters an error.

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

You use this method when your picker uses the [filterDiscoveryResults](../aspickerdisplaysettings/options-swift.struct/filterdiscoveryresults.md) option to enable manual filtering of discovered accessories. After creating customized [ASDiscoveredDisplayItem](../asdiscovereddisplayitem.md) instances for included accessories, call this method to update the picker to show your app-filtered accessories with updated assets.

# updatePickerShowingDiscoveredDisplayItems:completionHandler: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+

Updates the picker with app-filtered accessories.

## Declaration

```objectivec
- (void) updatePickerShowingDiscoveredDisplayItems:(NSArray<ASDiscoveredDisplayItem *> *) displayItems completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `displayItems`: The app-filtered accessories to show in the picker.
- `completionHandler`: A block or closure that executes after the updatePicker operation completes. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the operation encounters an error.

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

You use this method when your picker uses the [ASPickerDisplaySettingsOptionFilterDiscoveryResults](../aspickerdisplaysettings/options-swift.struct/filterdiscoveryresults.md) option to enable manual filtering of discovered accessories. After creating customized [ASDiscoveredDisplayItem](../asdiscovereddisplayitem.md) instances for included accessories, call this method to update the picker to show your app-filtered accessories with updated assets.
