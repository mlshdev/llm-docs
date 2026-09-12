> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstatus/notready(status:)](https://developer.apple.com/documentation/fskit/fscontainerstatus/notready(status:))

# notReady(status:) (Swift)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Returns a not-ready container status instance with the provided error status.

## Declaration

```swift
class func notReady(status errorStatus: any Error) -> Self
```

## Parameters

- `errorStatus`: The error status, if any, for the new instance.

## See Also

### Creating a container status instance

- [active(status:)](active%28status_%29.md): Returns a active container status instance with the provided error status.
- [blocked(status:)](blocked%28status_%29.md): Returns a blocked container status instance with the provided error status.
- [ready(status:)](ready%28status_%29.md): Returns a ready container status instance with the provided error status.

# notReadyWithStatus: (Objective-C)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Returns a not-ready container status instance with the provided error status.

## Declaration

```objectivec
+ (instancetype) notReadyWithStatus:(NSError *) errorStatus;
```

## Parameters

- `errorStatus`: The error status, if any, for the new instance.

## See Also

### Creating a container status instance

- [activeWithStatus:](active%28status_%29.md): Returns a active container status instance with the provided error status.
- [blockedWithStatus:](blocked%28status_%29.md): Returns a blocked container status instance with the provided error status.
- [readyWithStatus:](ready%28status_%29.md): Returns a ready container status instance with the provided error status.
