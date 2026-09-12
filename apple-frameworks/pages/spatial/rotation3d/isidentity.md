> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/isidentity](https://developer.apple.com/documentation/spatial/rotation3d/isidentity)

# isIdentity (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the rotation is the identity rotation.

## Declaration

```swift
var isIdentity: Bool { get }
```

# SPRotation3DIsIdentity (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the rotation is the identity rotation.

## Declaration

```objectivec
static bool SPRotation3DIsIdentity(SPRotation3D rotation);
```

## See Also

### Checking characteristics

- [SPRotation3DIsValid](../sprotation3disvalid.md): A Boolean value that indicates whether the rotation represents a valid value.
- [SPRotation3DInvalid](../sprotation3dinvalid.md): The null rotation that represents an invalid value.
