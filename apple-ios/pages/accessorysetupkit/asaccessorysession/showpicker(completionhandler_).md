> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/showpicker(completionhandler:)](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/showpicker(completionhandler:))

# showPicker(completionHandler:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Present a picker that shows accessories managed by a Device Discovery Extension in your app.

## Declaration

```swift
func showPicker(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func showPicker() async throws
```

## Parameters

- `completionHandler`: A block or closure that the picker calls when it completes the operation. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the picker encounters an error.

<a id="discussion"></a>

## Discussion

Use this method when your app includes a [DeviceDiscoveryExtension](https://developer.apple.com/documentation/devicediscoveryextension) for its supported accessories. If your app doesn’t use DDE, call [showPicker(for:completionHandler:)](showpicker%28for_completionhandler_%29.md) with an array of [ASPickerDisplayItem](../aspickerdisplayitem.md) instances instead.

The session’s event handler receives events when this picker displays and dismisses, as well as when the person using the app picks an accessory.

## See Also

### Displaying an accessory picker

- [showPicker(for:completionHandler:)](showpicker%28for_completionhandler_%29.md): Present a picker that shows discovered accessories matching an array of display items.

# showPickerWithCompletionHandler: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Present a picker that shows accessories managed by a Device Discovery Extension in your app.

## Declaration

```objectivec
- (void) showPickerWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block or closure that the picker calls when it completes the operation. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the picker encounters an error.

<a id="discussion"></a>

## Discussion

Use this method when your app includes a [DeviceDiscoveryExtension](https://developer.apple.com/documentation/devicediscoveryextension) for its supported accessories. If your app doesn’t use DDE, call [showPickerForDisplayItems:completionHandler:](showpicker%28for_completionhandler_%29.md) with an array of [ASPickerDisplayItem](../aspickerdisplayitem.md) instances instead.

The session’s event handler receives events when this picker displays and dismisses, as well as when the person using the app picks an accessory.

## See Also

### Displaying an accessory picker

- [showPickerForDisplayItems:completionHandler:](showpicker%28for_completionhandler_%29.md): Present a picker that shows discovered accessories matching an array of display items.
