> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsentityidentifier/qualifier

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
