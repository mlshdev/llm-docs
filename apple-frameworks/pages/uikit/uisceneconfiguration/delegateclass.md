> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneconfiguration/delegateclass](https://developer.apple.com/documentation/uikit/uisceneconfiguration/delegateclass)

# delegateClass (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The class of the custom delegate object that you want UIKit to create.

## Declaration

```swift
var delegateClass: AnyClass? { get set }
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

If you specified [UIWindowScene](../uiwindowscene.md) in the [sceneClass](sceneclass.md) property, your delegate class must conform to the [UIWindowSceneDelegate](../uiwindowscenedelegate.md) protocol. Otherwise, you must specify a class that conforms to the [UISceneDelegate](../uiscenedelegate.md) protocol.

UIKit sets this property’s initial value using the [UISceneDelegateClassName](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uiscenedelegateclassname.md) key from the appropriate scene in your app’s `Info.plist` file.

## See Also

### Specifying the scene creation details

- [sceneClass](sceneclass.md): The class of the scene object that you want UIKit to create.
- [storyboard](storyboard.md): The storyboard object that contains your scene’s initial view controller.

# delegateClass (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The class of the custom delegate object that you want UIKit to create.

## Declaration

```objectivec
@property (nonatomic, nullable) Class delegateClass;
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

If you specified [UIWindowScene](../uiwindowscene.md) in the [sceneClass](sceneclass.md) property, your delegate class must conform to the [UIWindowSceneDelegate](../uiwindowscenedelegate.md) protocol. Otherwise, you must specify a class that conforms to the [UISceneDelegate](../uiscenedelegate.md) protocol.

UIKit sets this property’s initial value using the [UISceneDelegateClassName](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uiscenedelegateclassname.md) key from the appropriate scene in your app’s `Info.plist` file.

## See Also

### Specifying the scene creation details

- [sceneClass](sceneclass.md): The class of the scene object that you want UIKit to create.
- [storyboard](storyboard.md): The storyboard object that contains your scene’s initial view controller.
