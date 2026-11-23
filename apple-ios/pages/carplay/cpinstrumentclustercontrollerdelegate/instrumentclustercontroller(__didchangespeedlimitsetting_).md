> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontrollerdelegate/instrumentclustercontroller(_:didchangespeedlimitsetting:)

# instrumentClusterController(\_:didChangeSpeedLimitSetting:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate to adjust how your app displays speed limit information.

## Declaration

```swift
optional func instrumentClusterController(_ instrumentClusterController: CPInstrumentClusterController, didChangeSpeedLimitSetting speedLimitSetting: CPInstrumentClusterSetting)
```

## Parameters

- `instrumentClusterController`: The controller object with the new setting.
- `speedLimitSetting`: The new setting to apply to your content.

<a id="discussion"></a>

## Discussion

Some vehicles can ask your app to display speed limit information along with the app’s other content. Use this method to either show or hide the information based on the provided setting value.

## See Also

### Responding to setting changes

- [instrumentClusterController(\_:didChangeCompassSetting:)](instrumentclustercontroller%28__didchangecompasssetting_%29.md): Tells the delegate to adjust how your app displays compass information.

# instrumentClusterController:didChangeSpeedLimitSetting: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate to adjust how your app displays speed limit information.

## Declaration

```objectivec
- (void) instrumentClusterController:(CPInstrumentClusterController *) instrumentClusterController didChangeSpeedLimitSetting:(CPInstrumentClusterSetting) speedLimitSetting;
```

## Parameters

- `instrumentClusterController`: The controller object with the new setting.
- `speedLimitSetting`: The new setting to apply to your content.

<a id="discussion"></a>

## Discussion

Some vehicles can ask your app to display speed limit information along with the app’s other content. Use this method to either show or hide the information based on the provided setting value.

## See Also

### Responding to setting changes

- [instrumentClusterController:didChangeCompassSetting:](instrumentclustercontroller%28__didchangecompasssetting_%29.md): Tells the delegate to adjust how your app displays compass information.
