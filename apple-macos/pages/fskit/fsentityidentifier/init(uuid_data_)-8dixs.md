> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsentityidentifier/init(uuid:data:)-8dixs](https://developer.apple.com/documentation/fskit/fsentityidentifier/init(uuid:data:)-8dixs)

# init(uuid:data:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates an entity identifier with the given UUID and qualifier data.

## Declaration

```swift
init(uuid: UUID, data qualifierData: Data)
```

## Parameters

- `uuid`: The UUID to use for this identifier.
- `qualifierData`: The data to distinguish entities that otherwise share the same UUID.

<a id="discussion"></a>

## Discussion

> **Warning**

> This initializer is annotated as returning a non-optional value but silently returns `nil` when `qualifierData` is not exactly eight bytes, which can surface as a null value in a non-optional Swift variable. Use [init(uuid:qualifierData:)](init%28uuid_qualifierdata_%29-8xlg1.md) instead, which is explicitly failable.

## See Also

### Creating an entity identifier

- [init()](init%28%29.md): Creates an entity identifier with a random UUID.
- [init(uuid:)](init%28uuid_%29-9e20k.md): Creates an entity identifier with the given UUID.
- [init(uuid:qualifier:)](init%28uuid_qualifier_%29-9ty70.md): Creates an entity identifier with the given UUID and qualifier data as a 64-bit unsigned integer.

# initWithUUID:data: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates an entity identifier with the given UUID and qualifier data.

## Declaration

```objectivec
- (instancetype) initWithUUID:(NSUUID *) uuid data:(NSData *) qualifierData;
```

## Parameters

- `uuid`: The UUID to use for this identifier.
- `qualifierData`: The data to distinguish entities that otherwise share the same UUID.

<a id="discussion"></a>

## Discussion

> **Warning**

> This initializer is annotated as returning a non-optional value but silently returns `nil` when `qualifierData` is not exactly eight bytes, which can surface as a null value in a non-optional Swift variable. Use [initWithUUID:qualifierData:](init%28uuid_qualifierdata_%29-8xlg1.md) instead, which is explicitly failable.

## See Also

### Creating an entity identifier

- [init](init%28%29.md): Creates an entity identifier with a random UUID.
- [initWithUUID:](init%28uuid_%29-9e20k.md): Creates an entity identifier with the given UUID.
- [initWithUUID:qualifier:](init%28uuid_qualifier_%29-9ty70.md): Creates an entity identifier with the given UUID and qualifier data as a 64-bit unsigned integer.
