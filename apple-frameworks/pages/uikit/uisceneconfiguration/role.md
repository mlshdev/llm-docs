> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneconfiguration/role](https://developer.apple.com/documentation/uikit/uisceneconfiguration/role)

# role (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The role assigned to the scene configuration.

## Declaration

```swift
var role: UISceneSession.Role { get }
```

<a id="Discussion"></a>

## Discussion

UIKit populates this property with an appropriate role value based on the contents of your app’s `Info.plist` file. You also specify this value when you create a new scene-configuration object.

## See Also

### Getting the configuration attributes

- [name](name.md): The app-specific name assigned to the scene configuration.
- [UISceneSession.Role](../uiscenesession/role-swift.struct.md): Constants that indicate the possible roles for a scene.

# role (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The role assigned to the scene configuration.

## Declaration

```objectivec
@property (nonatomic, readonly) UISceneSessionRole role;
```

<a id="Discussion"></a>

## Discussion

UIKit populates this property with an appropriate role value based on the contents of your app’s `Info.plist` file. You also specify this value when you create a new scene-configuration object.

## See Also

### Getting the configuration attributes

- [name](name.md): The app-specific name assigned to the scene configuration.
- [UISceneSessionRole](../uiscenesession/role-swift.struct.md): Constants that indicate the possible roles for a scene.
