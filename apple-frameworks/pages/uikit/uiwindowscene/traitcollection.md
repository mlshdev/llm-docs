> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/traitcollection](https://developer.apple.com/documentation/uikit/uiwindowscene/traitcollection)

# traitCollection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The traits that describe the current environment of the scene.

## Declaration

```swift
var traitCollection: UITraitCollection { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to get additional information about the current scene, such as the size class and scale factor. For more information about the available traits, see [UITraitCollection](../uitraitcollection.md).

## See Also

### Getting the interface attributes

- [sizeRestrictions](sizerestrictions.md): The minimum and maximum size of the app’s windows.
- [UISceneSizeRestrictions](../uiscenesizerestrictions.md): An object that specifies the minimum and maximum sizes for resizable windows.

# traitCollection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The traits that describe the current environment of the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) UITraitCollection * traitCollection;
```

<a id="Discussion"></a>

## Discussion

Use this property to get additional information about the current scene, such as the size class and scale factor. For more information about the available traits, see [UITraitCollection](../uitraitcollection.md).

## See Also

### Getting the interface attributes

- [sizeRestrictions](sizerestrictions.md): The minimum and maximum size of the app’s windows.
- [UISceneSizeRestrictions](../uiscenesizerestrictions.md): An object that specifies the minimum and maximum sizes for resizable windows.
