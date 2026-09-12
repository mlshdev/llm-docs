> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sessioncreationflags](https://developer.apple.com/documentation/security/sessioncreationflags)

# SessionCreationFlags (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The flags that affect the creation of a security session.

## Declaration

```swift
struct SessionCreationFlags
```

## Topics

### Initializers

- [init(rawValue:)](sessioncreationflags/init%28rawvalue_%29.md): Initializes a session creation flags value.

### Flags

- [sessionKeepCurrentBootstrap](sessioncreationflags/sessionkeepcurrentbootstrap.md): The caller has allocated sub-bootstrap.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SessionCreationFlags (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The flags that affect the creation of a security session.

## Declaration

```objectivec
enum SessionCreationFlags : UInt32;
```

## Topics

### Flags

- [sessionKeepCurrentBootstrap](sessioncreationflags/sessionkeepcurrentbootstrap.md): The caller has allocated sub-bootstrap.
