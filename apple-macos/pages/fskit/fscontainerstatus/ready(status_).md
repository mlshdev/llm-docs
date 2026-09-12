> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstatus/ready(status:)](https://developer.apple.com/documentation/fskit/fscontainerstatus/ready(status:))

# ready(status:) (Swift)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Returns a ready container status instance with the provided error status.

## Declaration

```swift
class func ready(status errorStatus: any Error) -> Self
```

## Parameters

- `errorStatus`: The error status, if any, for the new instance.

## See Also

### Creating a container status instance

- [active(status:)](active%28status_%29.md): Returns a active container status instance with the provided error status.
- [blocked(status:)](blocked%28status_%29.md): Returns a blocked container status instance with the provided error status.
- [notReady(status:)](notready%28status_%29.md): Returns a not-ready container status instance with the provided error status.

# readyWithStatus: (Objective-C)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Returns a ready container status instance with the provided error status.

## Declaration

```objectivec
+ (instancetype) readyWithStatus:(NSError *) errorStatus;
```

## Parameters

- `errorStatus`: The error status, if any, for the new instance.

## See Also

### Creating a container status instance

- [activeWithStatus:](active%28status_%29.md): Returns a active container status instance with the provided error status.
- [blockedWithStatus:](blocked%28status_%29.md): Returns a blocked container status instance with the provided error status.
- [notReadyWithStatus:](notready%28status_%29.md): Returns a not-ready container status instance with the provided error status.
