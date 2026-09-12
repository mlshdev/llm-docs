> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/interfaceorientation](https://developer.apple.com/documentation/uikit/uiwindowscene/interfaceorientation)

# interfaceOrientation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 26.0) · iPadOS 13.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The orientation to use when displaying content in your windows.

> Use effectiveGeometry.interfaceOrientation instead.

## Declaration

```swift
var interfaceOrientation: UIInterfaceOrientation { get }
```

<a id="Discussion"></a>

## Discussion

The interface orientation normally corresponds to the device orientation, but it might also be different. For example, the interface orientation does not always match the device orientation when the user enables rotation lock for the device.

## See Also

### Deprecated symbols

- [coordinateSpace](coordinatespace.md): Deprecated. The coordinate space occupied by the scene.

# interfaceOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 26.0) · iPadOS 13.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The orientation to use when displaying content in your windows.

> Use effectiveGeometry.interfaceOrientation instead.

## Declaration

```objectivec
@property (nonatomic, readonly) UIInterfaceOrientation interfaceOrientation;
```

<a id="Discussion"></a>

## Discussion

The interface orientation normally corresponds to the device orientation, but it might also be different. For example, the interface orientation does not always match the device orientation when the user enables rotation lock for the device.

## See Also

### Deprecated symbols

- [coordinateSpace](coordinatespace.md): Deprecated. The coordinate space occupied by the scene.
