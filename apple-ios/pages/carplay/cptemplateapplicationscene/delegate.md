> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscene/delegate](https://developer.apple.com/documentation/carplay/cptemplateapplicationscene/delegate)

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The object that receives the scene’s life-cycle events.

## Declaration

```swift
var delegate: (any CPTemplateApplicationSceneDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the delegate object CarPlay creates from the class name you provide in the scene manifest of your app’s `Info.plist` file.

## See Also

### Responding to the Scene Life Cycle

- [CPTemplateApplicationSceneDelegate](../cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The object that receives the scene’s life-cycle events.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<CPTemplateApplicationSceneDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the delegate object CarPlay creates from the class name you provide in the scene manifest of your app’s `Info.plist` file.

## See Also

### Responding to the Scene Life Cycle

- [CPTemplateApplicationSceneDelegate](../cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.
