> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/presentationstyle/prominent](https://developer.apple.com/documentation/uikit/uiwindowscene/presentationstyle/prominent)

# UIWindowScene.PresentationStyle.prominent (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Presents prominently above others in the current space.

> For more information, see [UIWindowScene.PresentationStyle](../presentationstyle.md).

## Declaration

```swift
case prominent
```

<a id="Discussion"></a>

## Discussion

On iPad, the system displays the window scene modally, centered and elevated above the existing workspace. You should dedicate the scene to specific content within your app, like a document or file, and include buttons to close the scene.

## See Also

### Constants

- [UIWindowScene.PresentationStyle.automatic](automatic.md): Deprecated. The system determines the most appropriate style.
- [UIWindowScene.PresentationStyle.standard](standard.md): Deprecated. The default style of the system.

# UIWindowScenePresentationStyleProminent (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Presents prominently above others in the current space.

## Declaration

```objectivec
UIWindowScenePresentationStyleProminent
```

<a id="Discussion"></a>

## Discussion

On iPad, the system displays the window scene modally, centered and elevated above the existing workspace. You should dedicate the scene to specific content within your app, like a document or file, and include buttons to close the scene.

## See Also

### Constants

- [UIWindowScenePresentationStyleAutomatic](automatic.md): Deprecated. The system determines the most appropriate style.
- [UIWindowScenePresentationStyleStandard](standard.md): Deprecated. The default style of the system.
