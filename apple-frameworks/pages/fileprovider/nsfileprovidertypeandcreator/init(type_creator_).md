> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertypeandcreator/init(type:creator:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidertypeandcreator/init(type:creator:))

# init(type:creator:)

**Framework:** File Provider  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a structure that contains the provided type and creator codes.

## Declaration

```swift
init(type: OSType, creator: OSType)
```

## Parameters

- `type`: The first word of the `FinderInfo` structure. It matches the file type code.
- `creator`: The second word of the `FinderInfo` structure. It matches the creator code.

## See Also

### Creating Type and Creator Structures

- [init()](init%28%29.md): Returns a new type and creator structure with both codes set to `0`.
