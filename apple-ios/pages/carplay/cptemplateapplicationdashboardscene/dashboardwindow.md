> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationdashboardscene/dashboardwindow](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscene/dashboardwindow)

# dashboardWindow (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The window that belongs to the dashboard scene.

## Declaration

```swift
var dashboardWindow: UIWindow { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the window CarPlay creates for your dashboard scene. You draw your navigation app’s map content into this window for display in the dashboard.

# dashboardWindow (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The window that belongs to the dashboard scene.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) UIWindow * dashboardWindow;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the window CarPlay creates for your dashboard scene. You draw your navigation app’s map content into this window for display in the dashboard.
