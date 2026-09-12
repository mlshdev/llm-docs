> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsentityidentifier/qualifier](https://developer.apple.com/documentation/fskit/fsentityidentifier/qualifier)

# qualifier (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An optional piece of data to distinguish entities that otherwise share the same UUID.

## Declaration

```swift
var qualifier: Data? { get set }
```

## See Also

### Inspecting identifier properties

- [uuid](uuid.md): A UUID to uniquely identify this entity.

# qualifier (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An optional piece of data to distinguish entities that otherwise share the same UUID.

## Declaration

```objectivec
@property (copy, nullable) NSData * qualifier;
```

## See Also

### Inspecting identifier properties

- [uuid](uuid.md): A UUID to uniquely identify this entity.
