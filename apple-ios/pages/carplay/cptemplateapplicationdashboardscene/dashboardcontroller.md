> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationdashboardscene/dashboardcontroller](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscene/dashboardcontroller)

# dashboardController (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The controller that manages the dashboard scene’s shortcut buttons.

## Declaration

```swift
var dashboardController: CPDashboardController { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the controller CarPlay creates when it connects your navigation app’s dashboard scene. You use this controller to manage the shortcut buttons CarPlay displays in the dashboard when there’s no active navigation session.

## See Also

### Accessing the Dashboard Controller

- [CPDashboardController](../cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.

# dashboardController (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The controller that manages the dashboard scene’s shortcut buttons.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) CPDashboardController * dashboardController;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the controller CarPlay creates when it connects your navigation app’s dashboard scene. You use this controller to manage the shortcut buttons CarPlay displays in the dashboard when there’s no active navigation session.

## See Also

### Accessing the Dashboard Controller

- [CPDashboardController](../cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.
