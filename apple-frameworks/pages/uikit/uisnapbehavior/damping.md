> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisnapbehavior/damping

# damping (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The amount of oscillation of a dynamic item during the conclusion of a snap.

## Declaration

```swift
var damping: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The valid range for damping extends from `0.0`, for maximum oscillation, through `1.0`, for minimum oscillation. The default value is `0.5`.

## See Also

### Configuring a snap behavior

- [snapPoint](snappoint.md): The point to which to snap.

# damping (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The amount of oscillation of a dynamic item during the conclusion of a snap.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat damping;
```

<a id="Discussion"></a>

## Discussion

The valid range for damping extends from `0.0`, for maximum oscillation, through `1.0`, for minimum oscillation. The default value is `0.5`.

## See Also

### Configuring a snap behavior

- [snapPoint](snappoint.md): The point to which to snap.
