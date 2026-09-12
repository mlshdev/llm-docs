> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sessionattributebits](https://developer.apple.com/documentation/security/sessionattributebits)

# SessionAttributeBits (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The attributes of a security session.

## Declaration

```swift
struct SessionAttributeBits
```

## Topics

### Initializers

- [init(rawValue:)](sessionattributebits/init%28rawvalue_%29.md): Initializes a session attribute bits structure.

### Bits

- [sessionIsRoot](sessionattributebits/sessionisroot.md): A bit that indicates the session is the root session.
- [sessionHasGraphicAccess](sessionattributebits/sessionhasgraphicaccess.md): A bit that indicates a graphic subsystem is available.
- [sessionHasTTY](sessionattributebits/sessionhastty.md): A bit that indicates `/dev/tty` is available.
- [sessionIsRemote](sessionattributebits/sessionisremote.md): A bit that indicates the session was initiated over the network.

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

# SessionAttributeBits (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The attributes of a security session.

## Declaration

```objectivec
enum SessionAttributeBits : UInt32;
```

## Topics

### Bits

- [sessionIsRoot](sessionattributebits/sessionisroot.md): A bit that indicates the session is the root session.
- [sessionHasGraphicAccess](sessionattributebits/sessionhasgraphicaccess.md): A bit that indicates a graphic subsystem is available.
- [sessionHasTTY](sessionattributebits/sessionhastty.md): A bit that indicates `/dev/tty` is available.
- [sessionIsRemote](sessionattributebits/sessionisremote.md): A bit that indicates the session was initiated over the network.
