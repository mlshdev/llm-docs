> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationdashboardscene/delegate](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscene/delegate)

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The object that receives the dashboard scene’s life-cycle events.

## Declaration

```swift
var delegate: (any CPTemplateApplicationDashboardSceneDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the delegate object CarPlay creates from the class name you provide in the scene manifest of your app’s `Info.plist` file. You can update this property at runtime to provide an alternate delegate object.

## See Also

### Responding to the Dashboard Scene Life Cycle

- [CPTemplateApplicationDashboardSceneDelegate](../cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The object that receives the dashboard scene’s life-cycle events.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<CPTemplateApplicationDashboardSceneDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the delegate object CarPlay creates from the class name you provide in the scene manifest of your app’s `Info.plist` file. You can update this property at runtime to provide an alternate delegate object.

## See Also

### Responding to the Dashboard Scene Life Cycle

- [CPTemplateApplicationDashboardSceneDelegate](../cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
