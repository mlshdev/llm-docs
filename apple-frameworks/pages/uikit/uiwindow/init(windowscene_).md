> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/init(windowscene:)](https://developer.apple.com/documentation/uikit/uiwindow/init(windowscene:))

# init(windowScene:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a window and associates it with the specified scene object.

## Declaration

```swift
init(windowScene: UIWindowScene)
```

## Parameters

- `windowScene`: The scene object in which to display the window.

<a id="return-value"></a>

## Return Value

A new window object associated with the specified scene.

<a id="Discussion"></a>

## Discussion

This method creates the new window and automatically associates it with the specified scene. You can access this window later from the scene’s [windows](../uiwindowscene/windows.md) property.

# initWithWindowScene: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a window and associates it with the specified scene object.

## Declaration

```objectivec
- (instancetype) initWithWindowScene:(UIWindowScene *) windowScene;
```

## Parameters

- `windowScene`: The scene object in which to display the window.

<a id="return-value"></a>

## Return Value

A new window object associated with the specified scene.

<a id="Discussion"></a>

## Discussion

This method creates the new window and automatically associates it with the specified scene. You can access this window later from the scene’s [windows](../uiwindowscene/windows.md) property.
