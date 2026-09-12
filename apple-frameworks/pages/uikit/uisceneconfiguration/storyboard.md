> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneconfiguration/storyboard](https://developer.apple.com/documentation/uikit/uisceneconfiguration/storyboard)

# storyboard (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The storyboard object that contains your scene’s initial view controller.

## Declaration

```swift
var storyboard: UIStoryboard? { get set }
```

<a id="Discussion"></a>

## Discussion

UIKit loads the initial view controller from the specified scene and displays it appropriately.

UIKit sets this property’s initial value using the [UISceneStoryboardFile](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uiscenestoryboardfile.md) key from the appropriate scene in your app’s `Info.plist` file.

## See Also

### Specifying the scene creation details

- [sceneClass](sceneclass.md): The class of the scene object that you want UIKit to create.
- [delegateClass](delegateclass.md): The class of the custom delegate object that you want UIKit to create.

# storyboard (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The storyboard object that contains your scene’s initial view controller.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIStoryboard * storyboard;
```

<a id="Discussion"></a>

## Discussion

UIKit loads the initial view controller from the specified scene and displays it appropriately.

UIKit sets this property’s initial value using the [UISceneStoryboardFile](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uiscenestoryboardfile.md) key from the appropriate scene in your app’s `Info.plist` file.

## See Also

### Specifying the scene creation details

- [sceneClass](sceneclass.md): The class of the scene object that you want UIKit to create.
- [delegateClass](delegateclass.md): The class of the custom delegate object that you want UIKit to create.
