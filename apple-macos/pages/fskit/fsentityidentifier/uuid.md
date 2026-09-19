> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsentityidentifier/uuid

# uuid (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A UUID to uniquely identify this entity.

## Declaration

```swift
var uuid: UUID { get set }
```

## See Also

### Inspecting identifier properties

- [qualifier](qualifier.md): An optional piece of data to distinguish entities that otherwise share the same UUID.

# uuid (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A UUID to uniquely identify this entity.

## Declaration

```objectivec
@property (copy) NSUUID * uuid;
```

## See Also

### Inspecting identifier properties

- [qualifier](qualifier.md): An optional piece of data to distinguish entities that otherwise share the same UUID.
