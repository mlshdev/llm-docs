> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheel/issnapshot](https://developer.apple.com/documentation/gamecontroller/gcracingwheel/issnapshot)

# isSnapshot (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

A Boolean value that indicates whether the object is a snapshot of a racing wheel.

## Declaration

```swift
var isSnapshot: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the racing wheel is a snapshot at a moment in time of a real device; otherwise, it’s an actual racing wheel.

## See Also

### Creating snapshots

- [capture()](capture%28%29.md): Returns a snapshot of the racing wheel with its current element values.

# snapshot (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

A Boolean value that indicates whether the object is a snapshot of a racing wheel.

## Declaration

```objectivec
@property (atomic, readonly, getter=isSnapshot) BOOL snapshot;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the racing wheel is a snapshot at a moment in time of a real device; otherwise, it’s an actual racing wheel.

## See Also

### Creating snapshots

- [capture](capture%28%29.md): Returns a snapshot of the racing wheel with its current element values.
