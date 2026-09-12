> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifloatrange/minimum](https://developer.apple.com/documentation/uikit/uifloatrange/minimum)

# minimum (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The minimum range of motion for sliding and pin attachments.

## Declaration

```swift
var minimum: CGFloat
```

<a id="Discussion"></a>

## Discussion

For sliding attachments, it represents the number of points to move along the axis of translation in the negative direction. For pin attachments, it represents the number of radians to rotate in the counter-clockwise direction. This value must be less than or equal to `0`.

## See Also

### Getting the range values

- [maximum](maximum.md): The maximum range of motion for sliding and pin attachments.

# minimum (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The minimum range of motion for sliding and pin attachments.

## Declaration

```objectivec
CGFloat minimum;
```

<a id="Discussion"></a>

## Discussion

For sliding attachments, it represents the number of points to move along the axis of translation in the negative direction. For pin attachments, it represents the number of radians to rotate in the counter-clockwise direction. This value must be less than or equal to `0`.

## See Also

### Getting the range values

- [maximum](maximum.md): The maximum range of motion for sliding and pin attachments.
