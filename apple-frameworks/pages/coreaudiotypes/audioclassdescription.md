> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audioclassdescription](https://developer.apple.com/documentation/coreaudiotypes/audioclassdescription)

# AudioClassDescription (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that describes an audio codec.

## Declaration

```swift
struct AudioClassDescription
```

## Topics

### Accessing the Data

- [mType](audioclassdescription/mtype.md): A four character code that a manufacturer defines for a codec type.
- [mSubType](audioclassdescription/msubtype.md): A four character code that a manufacturer defines for a codec subtype.
- [mManufacturer](audioclassdescription/mmanufacturer.md): A four character code that identifies a codec manufacturer.

### Initializers

- [init()](audioclassdescription/init%28%29.md): Creates an empty audio class description.
- [init(mType:mSubType:mManufacturer:)](audioclassdescription/init%28mtype_msubtype_mmanufacturer_%29.md): Creates an audio class description for the type, subtype, and manufacturer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# AudioClassDescription (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that describes an audio codec.

## Declaration

```objectivec
struct AudioClassDescription;
```

## Topics

### Accessing the Data

- [mType](audioclassdescription/mtype.md): A four character code that a manufacturer defines for a codec type.
- [mSubType](audioclassdescription/msubtype.md): A four character code that a manufacturer defines for a codec subtype.
- [mManufacturer](audioclassdescription/mmanufacturer.md): A four character code that identifies a codec manufacturer.
