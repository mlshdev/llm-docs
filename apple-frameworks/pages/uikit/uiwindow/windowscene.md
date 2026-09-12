> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/windowscene](https://developer.apple.com/documentation/uikit/uiwindow/windowscene)

# windowScene (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The scene containing the window.

## Declaration

```swift
weak var windowScene: UIWindowScene? { get set }
```

<a id="Discussion"></a>

## Discussion

Changing the value of this property moves the window to the newly specified scene. Setting the property to `nil` removes the window from its current scene.

## See Also

### Getting related objects

- [avDisplayManager](avdisplaymanager.md): The display manager that handles requests for screen resolution, refresh rate, and HDR mode information.

# windowScene (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The scene containing the window.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) UIWindowScene * windowScene;
```

<a id="Discussion"></a>

## Discussion

Changing the value of this property moves the window to the newly specified scene. Setting the property to `nil` removes the window from its current scene.

## See Also

### Getting related objects

- [avDisplayManager](avdisplaymanager.md): The display manager that handles requests for screen resolution, refresh rate, and HDR mode information.
