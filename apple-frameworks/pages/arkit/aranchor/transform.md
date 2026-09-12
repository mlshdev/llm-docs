> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/aranchor/transform](https://developer.apple.com/documentation/arkit/aranchor/transform)

# transform (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.

## Declaration

```swift
var transform: simd_float4x4 { get }
```

## Mentioned In

- [Displaying an AR Experience with Metal](../displaying-an-ar-experience-with-metal.md)

<a id="Discussion"></a>

## Discussion

World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).

## See Also

### Tracking Anchors

- [identifier](identifier.md): A unique identifier for the anchor.
- [sessionIdentifier](sessionidentifier.md): The unique identifier of the session that owns this anchor.

# transform (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float4x4 transform;
```

## Mentioned In

- [Displaying an AR Experience with Metal](../displaying-an-ar-experience-with-metal.md)

<a id="Discussion"></a>

## Discussion

World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).

## See Also

### Tracking Anchors

- [identifier](identifier.md): A unique identifier for the anchor.
- [sessionIdentifier](sessionidentifier.md): The unique identifier of the session that owns this anchor.
