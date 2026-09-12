> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemapping](https://developer.apple.com/documentation/coremedia/cmtimemapping)

# CMTimeMapping (Swift)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that maps a segment of a source time range to a target time range.

## Declaration

```swift
struct CMTimeMapping
```

## Topics

### Creating a Timebase

- [init(source:target:)](cmtimemapping/init%28source_target_%29.md): Creates a time mapping with a source and target time range.
- [init()](cmtimemapping/init%28%29.md): Creates an empty time mapping.

### Accessing Time Ranges

- [source](cmtimemapping/source.md): A time range on the source timeline.
- [target](cmtimemapping/target.md): A time range on the target timeline.

### Type Properties

- [invalid](cmtimemapping/invalid.md): An invalid time mapping.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CMTimeMapping (Objective-C)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that maps a segment of a source time range to a target time range.

## Declaration

```objectivec
typedef struct { ... } CMTimeMapping;
```

## Topics

### Accessing Time Ranges

- [source](cmtimemapping/source.md): A time range on the source timeline.
- [target](cmtimemapping/target.md): A time range on the target timeline.

### Type Properties

- [kCMTimeMappingInvalid](cmtimemapping/invalid.md): An invalid time mapping.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
