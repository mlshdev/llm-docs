> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/aranchor/identifier](https://developer.apple.com/documentation/arkit/aranchor/identifier)

# identifier (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A unique identifier for the anchor.

## Declaration

```swift
var identifier: UUID { get }
```

<a id="Discussion"></a>

## Discussion

Whether an anchor is created manually (with the [init(transform:)](init%28transform_%29.md) initializer) or automatically by ARKit (and provided to you through [ARSessionDelegate](../arsessiondelegate.md), [ARSCNViewDelegate](../arscnviewdelegate.md), or [ARSKViewDelegate](../arskviewdelegate.md) methods), each anchor automatically receives a unique identifier value.

You can use this value to determine which anchors accompanying a specific [ARFrame](../arframe.md) capture correspond to anchors in frames captured previously.

## See Also

### Tracking Anchors

- [sessionIdentifier](sessionidentifier.md): The unique identifier of the session that owns this anchor.
- [transform](transform.md): A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.

# identifier (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A unique identifier for the anchor.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUUID * identifier;
```

<a id="Discussion"></a>

## Discussion

Whether an anchor is created manually (with the [initWithTransform:](init%28transform_%29.md) initializer) or automatically by ARKit (and provided to you through [ARSessionDelegate](../arsessiondelegate.md), [ARSCNViewDelegate](../arscnviewdelegate.md), or [ARSKViewDelegate](../arskviewdelegate.md) methods), each anchor automatically receives a unique identifier value.

You can use this value to determine which anchors accompanying a specific [ARFrame](../arframe.md) capture correspond to anchors in frames captured previously.

## See Also

### Tracking Anchors

- [sessionIdentifier](sessionidentifier.md): The unique identifier of the session that owns this anchor.
- [transform](transform.md): A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.
