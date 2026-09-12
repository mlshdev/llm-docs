> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsentityidentifier/init(uuid:)-9e20k](https://developer.apple.com/documentation/fskit/fsentityidentifier/init(uuid:)-9e20k)

# init(uuid:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 15.4+

Creates an entity identifier with the given UUID.

## Declaration

```swift
init(uuid: UUID)
```

## Parameters

- `uuid`: The UUID to use for this identifier.

## See Also

### Creating an entity identifier

- [init()](init%28%29.md): Creates an entity identifier with a random UUID.
- [init(uuid:data:)](init%28uuid_data_%29-8dixs.md): Deprecated. Creates an entity identifier with the given UUID and qualifier data.
- [init(uuid:qualifier:)](init%28uuid_qualifier_%29-9ty70.md): Creates an entity identifier with the given UUID and qualifier data as a 64-bit unsigned integer.

# initWithUUID: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Creates an entity identifier with the given UUID.

## Declaration

```objectivec
- (instancetype) initWithUUID:(NSUUID *) uuid;
```

## Parameters

- `uuid`: The UUID to use for this identifier.

## See Also

### Creating an entity identifier

- [init](init%28%29.md): Creates an entity identifier with a random UUID.
- [initWithUUID:data:](init%28uuid_data_%29-8dixs.md): Deprecated. Creates an entity identifier with the given UUID and qualifier data.
- [initWithUUID:qualifier:](init%28uuid_qualifier_%29-9ty70.md): Creates an entity identifier with the given UUID and qualifier data as a 64-bit unsigned integer.
