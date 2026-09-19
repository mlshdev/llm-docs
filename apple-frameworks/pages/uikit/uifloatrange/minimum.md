> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uifloatrange/minimum

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
