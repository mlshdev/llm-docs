> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstatus/active(status:)](https://developer.apple.com/documentation/fskit/fscontainerstatus/active(status:))

# active(status:) (Swift)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Returns a active container status instance with the provided error status.

## Declaration

```swift
class func active(status errorStatus: any Error) -> Self
```

## Parameters

- `errorStatus`: The error status, if any, for the new instance.

## See Also

### Creating a container status instance

- [blocked(status:)](blocked%28status_%29.md): Returns a blocked container status instance with the provided error status.
- [notReady(status:)](notready%28status_%29.md): Returns a not-ready container status instance with the provided error status.
- [ready(status:)](ready%28status_%29.md): Returns a ready container status instance with the provided error status.

# activeWithStatus: (Objective-C)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Returns a active container status instance with the provided error status.

## Declaration

```objectivec
+ (instancetype) activeWithStatus:(NSError *) errorStatus;
```

## Parameters

- `errorStatus`: The error status, if any, for the new instance.

## See Also

### Creating a container status instance

- [blockedWithStatus:](blocked%28status_%29.md): Returns a blocked container status instance with the provided error status.
- [notReadyWithStatus:](notready%28status_%29.md): Returns a not-ready container status instance with the provided error status.
- [readyWithStatus:](ready%28status_%29.md): Returns a ready container status instance with the provided error status.
