> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audioclassdescription/init(mtype:msubtype:mmanufacturer:)](https://developer.apple.com/documentation/coreaudiotypes/audioclassdescription/init(mtype:msubtype:mmanufacturer:))

# init(mType:mSubType:mManufacturer:)

**Framework:** Core Audio Types  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an audio class description for the type, subtype, and manufacturer.

## Declaration

```swift
init(mType: OSType, mSubType: OSType, mManufacturer: OSType)
```

## Parameters

- `mType`: A four character code that a manufacturer defines for a codec type.
- `mSubType`: A four character code that a manufacturer defines for a codec subtype.
- `mManufacturer`: A four character code that identifies a codec manufacturer.

## See Also

### Initializers

- [init()](init%28%29.md): Creates an empty audio class description.
