> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekentitymask](https://developer.apple.com/documentation/eventkit/ekentitymask)

# EKEntityMask (Swift)

**Framework:** EventKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A bitmask of `EKEntityType` for specifying multiple entities at once.

## Declaration

```swift
struct EKEntityMask
```

## Topics

### Initializers

- [init(rawValue:)](ekentitymask/init%28rawvalue_%29.md): Creates an entity mask with the specified raw value.

### Constants

- [event](ekentitymask/event.md): Represents an event.
- [reminder](ekentitymask/reminder.md): Represents a reminder.

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

# EKEntityMask (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A bitmask of `EKEntityType` for specifying multiple entities at once.

## Declaration

```objectivec
enum EKEntityMask : NSUInteger;
```

## Topics

### Constants

- [EKEntityMaskEvent](ekentitymask/event.md): Represents an event.
- [EKEntityMaskReminder](ekentitymask/reminder.md): Represents a reminder.
