> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uideviceorientation/isportrait](https://developer.apple.com/documentation/uikit/uideviceorientation/isportrait)

# isPortrait (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst

A Boolean value that indicates whether the device is in a portrait orientation.

## Declaration

```swift
var isPortrait: Bool { get }
```

## See Also

### Determining the current orientation

- [isLandscape](islandscape.md): A Boolean value that indicates whether the device is in a landscape orientation.
- [isFlat](isflat.md): A Boolean value that indicates whether the specified orientation is face up or face down.
- [isValidInterfaceOrientation](isvalidinterfaceorientation.md): A Boolean value that indicates whether the specified orientation is one of the portrait or landscape orientations.

# UIDeviceOrientationIsPortrait (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst

A Boolean value that indicates whether the device is in a portrait orientation.

## Declaration

```objectivec
static BOOL UIDeviceOrientationIsPortrait(UIDeviceOrientation orientation);
```

## Parameters

- `orientation`: Specify the value of the [orientation](../uidevice/orientation.md) property of the [UIDevice](../uidevice.md) class.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device orientation is portrait; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining the current orientation

- [UIDeviceOrientationIsLandscape](islandscape.md): A Boolean value that indicates whether the device is in a landscape orientation.
- [UIDeviceOrientationIsFlat](isflat.md): A Boolean value that indicates whether the specified orientation is face up or face down.
- [UIDeviceOrientationIsValidInterfaceOrientation](isvalidinterfaceorientation.md): A Boolean value that indicates whether the specified orientation is one of the portrait or landscape orientations.
