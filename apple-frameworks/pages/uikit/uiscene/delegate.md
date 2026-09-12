> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/delegate](https://developer.apple.com/documentation/uikit/uiscene/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The object you use to receive life-cycle events associated with the scene.

## Declaration

```swift
var delegate: (any UISceneDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The system creates a default delegate object based on the the class name you provide in your app’s `Info.plist` file, or that your app delegate specifies when configuring the scene. You can change this default delegate object later, as needed.

## See Also

### Managing the life cycle of a scene

- [UISceneDelegate](../uiscenedelegate.md): The core methods you use to respond to life-cycle events occurring within a scene.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The object you use to receive life-cycle events associated with the scene.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<UISceneDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The system creates a default delegate object based on the the class name you provide in your app’s `Info.plist` file, or that your app delegate specifies when configuring the scene. You can change this default delegate object later, as needed.

## See Also

### Managing the life cycle of a scene

- [UISceneDelegate](../uiscenedelegate.md): The core methods you use to respond to life-cycle events occurring within a scene.
