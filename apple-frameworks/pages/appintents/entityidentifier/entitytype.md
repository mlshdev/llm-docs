> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityidentifier/entitytype](https://developer.apple.com/documentation/appintents/entityidentifier/entitytype)

# entityType

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The type of `AppEntity` represented by this identifier

## Declaration

```swift
let entityType: any AppEntity.Type
```

## See Also

### Getting the identifier details

- [identifier](identifier.md): Value uniquely identifying the entity instance within its type.
- [valueMaximumLength](valuemaximumlength.md): Maximum allowed length for the `identifier` value. This is a constraint imposed by the system and thus forces us to truncate the identifier if it exceeds the maximum length.
