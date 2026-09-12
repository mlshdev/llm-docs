> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/supportsmultiplescenes](https://developer.apple.com/documentation/uikit/uiapplication/supportsmultiplescenes)

# supportsMultipleScenes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the app may display multiple scenes simultaneously.

## Declaration

```swift
var supportsMultipleScenes: Bool { get }
```

<a id="Discussion"></a>

## Discussion

UIKit sets this property to [true](https://developer.apple.com/documentation/swift/true) when the system allows the app to display multiple scenes and the app’s `Info.plist` file includes the [UIApplicationSupportsMultipleScenes](../../bundleresources/information-property-list/uiapplicationscenemanifest/uiapplicationsupportsmultiplescenes.md) key with a value of [true](https://developer.apple.com/documentation/swift/true). If either of those conditions isn’t true, the value of this property is [false](https://developer.apple.com/documentation/swift/false).

Use the [connectedScenes](connectedscenes.md) property to determine whether multiple scenes are present.

## See Also

### Getting scene information

- [connectedScenes](connectedscenes.md): The app’s currently connected scenes.
- [openSessions](opensessions.md): The sessions whose scenes are either currently active or archived by the system.

# supportsMultipleScenes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the app may display multiple scenes simultaneously.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsMultipleScenes;
```

<a id="Discussion"></a>

## Discussion

UIKit sets this property to [true](https://developer.apple.com/documentation/swift/true) when the system allows the app to display multiple scenes and the app’s `Info.plist` file includes the [UIApplicationSupportsMultipleScenes](../../bundleresources/information-property-list/uiapplicationscenemanifest/uiapplicationsupportsmultiplescenes.md) key with a value of [true](https://developer.apple.com/documentation/swift/true). If either of those conditions isn’t true, the value of this property is [false](https://developer.apple.com/documentation/swift/false).

Use the [connectedScenes](connectedscenes.md) property to determine whether multiple scenes are present.

## See Also

### Getting scene information

- [connectedScenes](connectedscenes.md): The app’s currently connected scenes.
- [openSessions](opensessions.md): The sessions whose scenes are either currently active or archived by the system.
