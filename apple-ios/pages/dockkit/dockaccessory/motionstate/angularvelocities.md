> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockaccessory/motionstate/angularvelocities

# angularVelocities

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The angular velocity of each axis of rotation in radians.

## Declaration

```swift
let angularVelocities: Vector3D
```

<a id="discussion"></a>

## Discussion

The X, Y, and Z values are in radians per second corresponding to pitch, yaw, and roll axes.

## See Also

### Getting properties

- [angularPositions](angularpositions.md): The angles of the axes, in radians.
- [timestamp](timestamp.md): The current time, in UNIX epoch.
- [error](error.md): The error, if any.
