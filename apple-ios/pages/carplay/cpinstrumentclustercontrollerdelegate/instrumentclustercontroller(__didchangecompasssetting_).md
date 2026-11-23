> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontrollerdelegate/instrumentclustercontroller(_:didchangecompasssetting:)

# instrumentClusterController(\_:didChangeCompassSetting:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate to adjust how your app displays compass information.

## Declaration

```swift
optional func instrumentClusterController(_ instrumentClusterController: CPInstrumentClusterController, didChangeCompassSetting compassSetting: CPInstrumentClusterSetting)
```

## Parameters

- `instrumentClusterController`: The controller object with the new setting.
- `compassSetting`: The new setting to apply to your content.

<a id="discussion"></a>

## Discussion

Some vehicles can ask your app to display the current compass heading along with the app’s other content. Use this method to either show or hide the information based on the provided setting value.

## See Also

### Responding to setting changes

- [instrumentClusterController(\_:didChangeSpeedLimitSetting:)](instrumentclustercontroller%28__didchangespeedlimitsetting_%29.md): Tells the delegate to adjust how your app displays speed limit information.

# instrumentClusterController:didChangeCompassSetting: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate to adjust how your app displays compass information.

## Declaration

```objectivec
- (void) instrumentClusterController:(CPInstrumentClusterController *) instrumentClusterController didChangeCompassSetting:(CPInstrumentClusterSetting) compassSetting;
```

## Parameters

- `instrumentClusterController`: The controller object with the new setting.
- `compassSetting`: The new setting to apply to your content.

<a id="discussion"></a>

## Discussion

Some vehicles can ask your app to display the current compass heading along with the app’s other content. Use this method to either show or hide the information based on the provided setting value.

## See Also

### Responding to setting changes

- [instrumentClusterController:didChangeSpeedLimitSetting:](instrumentclustercontroller%28__didchangespeedlimitsetting_%29.md): Tells the delegate to adjust how your app displays speed limit information.
