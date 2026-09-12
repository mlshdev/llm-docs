> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinterfaceorientation/isportrait](https://developer.apple.com/documentation/uikit/uiinterfaceorientation/isportrait)

# isPortrait (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A Boolean value that indicates whether the user interface is currently presented in a portrait orientation.

## Declaration

```swift
var isPortrait: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The interface orientation can be different than the device orientation. You typically call this function in your view controller code to check the current orientation.

## See Also

### Interface orientation

- [isLandscape](islandscape.md): A Boolean value that indicates whether the user interface is currently presented in a landscape orientation.

# UIInterfaceOrientationIsPortrait (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A Boolean value that indicates whether the user interface is currently presented in a portrait orientation.

## Declaration

```objectivec
static BOOL UIInterfaceOrientationIsPortrait(UIInterfaceOrientation orientation);
```

## Parameters

- `orientation`: Specify the orientation constant to check.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the interface orientation is portrait, otherwise returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The interface orientation can be different than the device orientation. You typically call this function in your view controller code to check the current orientation.

## See Also

### Interface orientation

- [UIInterfaceOrientationIsLandscape](islandscape.md): A Boolean value that indicates whether the user interface is currently presented in a landscape orientation.
