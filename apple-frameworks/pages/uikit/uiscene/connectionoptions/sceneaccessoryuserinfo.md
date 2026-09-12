> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions/sceneaccessoryuserinfo](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions/sceneaccessoryuserinfo)

# sceneAccessoryUserInfo (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An optional user info object, provided when creating the `UISceneAccessory` for this scene accessory.

## Declaration

```swift
var sceneAccessoryUserInfo: Any? { get }
```

## Mentioned In

- [Presenting content on a connected display](../../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

This object can be used to associate data to the scene accessory configuration to be passed to the scene delegate when the scene connects.

# sceneAccessoryUserInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An optional user info object, provided when creating the `UISceneAccessory` for this scene accessory.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) id sceneAccessoryUserInfo;
```

## Mentioned In

- [Presenting content on a connected display](../../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

This object can be used to associate data to the scene accessory configuration to be passed to the scene delegate when the scene connects.
