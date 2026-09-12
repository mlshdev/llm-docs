> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneconfiguration/sceneclass](https://developer.apple.com/documentation/uikit/uisceneconfiguration/sceneclass)

# sceneClass (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The class of the scene object that you want UIKit to create.

## Declaration

```swift
var sceneClass: AnyClass? { get set }
```

<a id="Discussion"></a>

## Discussion

The class you specify must be [UIScene](../uiscene.md) or one of its subclasses. Typically, you specify the [UIWindowScene](../uiwindowscene.md) class for all windows associated with your app.

UIKit sets this property’s initial value using the [UISceneClassName](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uisceneclassname.md) key from the appropriate scene in your app’s `Info.plist` file.

## See Also

### Specifying the scene creation details

- [delegateClass](delegateclass.md): The class of the custom delegate object that you want UIKit to create.
- [storyboard](storyboard.md): The storyboard object that contains your scene’s initial view controller.

# sceneClass (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The class of the scene object that you want UIKit to create.

## Declaration

```objectivec
@property (nonatomic, nullable) Class sceneClass;
```

<a id="Discussion"></a>

## Discussion

The class you specify must be [UIScene](../uiscene.md) or one of its subclasses. Typically, you specify the [UIWindowScene](../uiwindowscene.md) class for all windows associated with your app.

UIKit sets this property’s initial value using the [UISceneClassName](../../bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/uiwindowscenesessionroleapplication/uisceneclassname.md) key from the appropriate scene in your app’s `Info.plist` file.

## See Also

### Specifying the scene creation details

- [delegateClass](delegateclass.md): The class of the custom delegate object that you want UIKit to create.
- [storyboard](storyboard.md): The storyboard object that contains your scene’s initial view controller.
