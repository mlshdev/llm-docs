> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/windows](https://developer.apple.com/documentation/uikit/uiwindowscene/windows)

# windows (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The windows associated with the scene.

## Declaration

```swift
var windows: [UIWindow] { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the windows associated with the scene. To remove the window from the current scene, or move it to a different scene, change the value of the window’s [windowScene](../uiwindow/windowscene.md) property.

## See Also

### Getting the active windows

- [keyWindow](keywindow.md): The key window associated with the scene.
- [screen](screen.md): The screen that displays the contents of the scene.

# windows (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The windows associated with the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<UIWindow *> * windows;
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the windows associated with the scene. To remove the window from the current scene, or move it to a different scene, change the value of the window’s [windowScene](../uiwindow/windowscene.md) property.

## See Also

### Getting the active windows

- [keyWindow](keywindow.md): The key window associated with the scene.
- [screen](screen.md): The screen that displays the contents of the scene.
