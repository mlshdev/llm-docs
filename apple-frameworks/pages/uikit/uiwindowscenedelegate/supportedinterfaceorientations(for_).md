> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscenedelegate/supportedinterfaceorientations(for:)](https://developer.apple.com/documentation/uikit/uiwindowscenedelegate/supportedinterfaceorientations(for:))

# supportedInterfaceOrientations(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Returns the interface orientations supported by the window scene. The returned value replaces the app’s UISupportedInterfaceOrientations Info.plist value for this scene. If not implemented, the Info.plist value is used.

## Declaration

```swift
optional func supportedInterfaceOrientations(for windowScene: UIWindowScene) -> UIInterfaceOrientationMask
```

# supportedInterfaceOrientationsForWindowScene: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Returns the interface orientations supported by the window scene. The returned value replaces the app’s UISupportedInterfaceOrientations Info.plist value for this scene. If not implemented, the Info.plist value is used.

## Declaration

```objectivec
- (UIInterfaceOrientationMask) supportedInterfaceOrientationsForWindowScene:(UIWindowScene *) windowScene;
```
