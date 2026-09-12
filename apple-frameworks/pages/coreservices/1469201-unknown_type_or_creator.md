> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1469201-unknown_type_or_creator](https://developer.apple.com/documentation/coreservices/1469201-unknown_type_or_creator)

# Unknown Type or Creator

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Represents an unknown file type or creator.

## Declaration

```objectivec
enum : OSType {
    ...
};
```

## Topics

### Constants

- [kLSUnknownType](1469201-unknown_type_or_creator/klsunknowntype.md): The value to supply as the file type (for example,to the `LSGetApplicationForInfo` function)if no file type information is available.
- [kLSUnknownCreator](1469201-unknown_type_or_creator/klsunknowncreator.md): The value to supply as the creator signatureif no file creator information is available.
