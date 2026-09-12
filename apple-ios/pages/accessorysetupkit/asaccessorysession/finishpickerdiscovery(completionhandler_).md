> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession/finishpickerdiscovery(completionhandler:)](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/finishpickerdiscovery(completionhandler:))

# finishPickerDiscovery(completionHandler:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+

Finish the discovery session in the picker and show a timeout error.

## Declaration

```swift
func finishPickerDiscovery(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func finishPickerDiscovery() async throws
```

## Parameters

- `completionHandler`: A block or closure that executes after this operation completes. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the operation encounters an error.

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

Use this method if you previously set the picker display setting [discoveryTimeout](../aspickerdisplaysettings/discoverytimeout-swift.property.md) to [unbounded](../aspickerdisplaysettings/discoverytimeout-swift.struct/unbounded.md) in order to perform manual filtering of discovered accessories. Calling this method finishes the discovery session in the picker and shows a timeout error if the session didn’t find any desired accessories.

Calling this method after updating the picker with discovered accessories has no effect.

# finishPickerDiscovery: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+

Finish the discovery session in the picker and show a timeout error.

## Declaration

```objectivec
- (void) finishPickerDiscovery:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block or closure that executes after this operation completes. The completion handler receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if the operation encounters an error.

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

Use this method if you previously set the picker display setting [discoveryTimeout](../aspickerdisplaysettings/discoverytimeout-swift.property.md) to [ASPickerDisplaySettingsDiscoveryTimeoutUnbounded](../aspickerdisplaysettings/discoverytimeout-swift.struct/unbounded.md) in order to perform manual filtering of discovered accessories. Calling this method finishes the discovery session in the picker and shows a timeout error if the session didn’t find any desired accessories.

Calling this method after updating the picker with discovered accessories has no effect.
