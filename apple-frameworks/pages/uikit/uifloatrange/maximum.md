> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifloatrange/maximum](https://developer.apple.com/documentation/uikit/uifloatrange/maximum)

# maximum (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The maximum range of motion for sliding and pin attachments.

## Declaration

```swift
var maximum: CGFloat
```

<a id="Discussion"></a>

## Discussion

For sliding attachments, it represents the number of points to move along the axis of translation in the positive direction. For pin attachments, it represents the number of radians to rotate in the clockwise direction. This value must be greater than or equal to `0`.

## See Also

### Getting the range values

- [minimum](minimum.md): The minimum range of motion for sliding and pin attachments.

# maximum (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The maximum range of motion for sliding and pin attachments.

## Declaration

```objectivec
CGFloat maximum;
```

<a id="Discussion"></a>

## Discussion

For sliding attachments, it represents the number of points to move along the axis of translation in the positive direction. For pin attachments, it represents the number of radians to rotate in the clockwise direction. This value must be greater than or equal to `0`.

## See Also

### Getting the range values

- [minimum](minimum.md): The minimum range of motion for sliding and pin attachments.
