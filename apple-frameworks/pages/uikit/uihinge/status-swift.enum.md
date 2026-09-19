> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uihinge/status-swift.enum

# UIHinge.Status (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The status of an individual hinge

## Declaration

```swift
enum Status
```

## Topics

### Getting the hinge status

- [UIHinge.Status.closed](status-swift.enum/closed.md): Beta. The hinge is closed
- [UIHinge.Status.fullyOpen](status-swift.enum/fullyopen.md): Beta. The hinge is open as far as the device allows
- [UIHinge.Status.partiallyOpen](status-swift.enum/partiallyopen.md): Beta. The hinge is partially open
- [UIHinge.Status.unknown](status-swift.enum/unknown.md): Beta. The status of the hinge is unknown

### Initializers

- [init(rawValue:)](status-swift.enum/init%28rawvalue_%29.md): Beta.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the hinge state

- [angle](angle.md): Beta. The current angle of the hinge, in radians.
- [status](status-swift.property.md): Beta. The current status of the hinge

# UIHingeStatus (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The status of an individual hinge

## Declaration

```objectivec
enum UIHingeStatus : NSInteger;
```

## Topics

### Getting the hinge status

- [UIHingeStatusClosed](status-swift.enum/closed.md): Beta. The hinge is closed
- [UIHingeStatusFullyOpen](status-swift.enum/fullyopen.md): Beta. The hinge is open as far as the device allows
- [UIHingeStatusPartiallyOpen](status-swift.enum/partiallyopen.md): Beta. The hinge is partially open
- [UIHingeStatusUnknown](status-swift.enum/unknown.md): Beta. The status of the hinge is unknown

## See Also

### Getting the hinge state

- [angle](angle.md): Beta. The current angle of the hinge, in radians.
- [status](status-swift.property.md): Beta. The current status of the hinge
