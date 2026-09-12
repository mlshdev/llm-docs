> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsentityidentifier/init(uuid:qualifier:)-9ty70](https://developer.apple.com/documentation/fskit/fsentityidentifier/init(uuid:qualifier:)-9ty70)

# init(uuid:qualifier:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 15.4+

Creates an entity identifier with the given UUID and qualifier data as a 64-bit unsigned integer.

## Declaration

```swift
init(uuid: UUID, qualifier: UInt64)
```

## Parameters

- `uuid`: The UUID to use for this identifier.
- `qualifier`: The data to distinguish entities that otherwise share the same UUID.

## See Also

### Creating an entity identifier

- [init()](init%28%29.md): Creates an entity identifier with a random UUID.
- [init(uuid:)](init%28uuid_%29-9e20k.md): Creates an entity identifier with the given UUID.
- [init(uuid:data:)](init%28uuid_data_%29-8dixs.md): Deprecated. Creates an entity identifier with the given UUID and qualifier data.

# initWithUUID:qualifier: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Creates an entity identifier with the given UUID and qualifier data as a 64-bit unsigned integer.

## Declaration

```objectivec
- (instancetype) initWithUUID:(NSUUID *) uuid qualifier:(uint64_t) qualifier;
```

## Parameters

- `uuid`: The UUID to use for this identifier.
- `qualifier`: The data to distinguish entities that otherwise share the same UUID.

## See Also

### Creating an entity identifier

- [init](init%28%29.md): Creates an entity identifier with a random UUID.
- [initWithUUID:](init%28uuid_%29-9e20k.md): Creates an entity identifier with the given UUID.
- [initWithUUID:data:](init%28uuid_data_%29-8dixs.md): Deprecated. Creates an entity identifier with the given UUID and qualifier data.
