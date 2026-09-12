> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesession/role-swift.property](https://developer.apple.com/documentation/uikit/uiscenesession/role-swift.property)

# role (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The role played by the scene’s content.

## Declaration

```swift
var role: UISceneSession.Role { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how the user interacts with the content of the associated scene. UIKit sets the initial value of this property based on the information in your app’s `Info.plist` file. If you don’t provide scene configuration data for your app, UIKit sets the role to an appropriate value.

## See Also

### Getting the scene information

- [scene](scene.md): The scene associated with the current session.
- [UISceneSession.Role](role-swift.struct.md): Constants that indicate the possible roles for a scene.

# role (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The role played by the scene’s content.

## Declaration

```objectivec
@property (nonatomic, readonly) UISceneSessionRole role;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how the user interacts with the content of the associated scene. UIKit sets the initial value of this property based on the information in your app’s `Info.plist` file. If you don’t provide scene configuration data for your app, UIKit sets the role to an appropriate value.

## See Also

### Getting the scene information

- [scene](scene.md): The scene associated with the current session.
- [UISceneSessionRole](role-swift.struct.md): Constants that indicate the possible roles for a scene.
