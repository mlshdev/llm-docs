> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsentityidentifier/init(uuid:qualifierdata:)-8xlg1](https://developer.apple.com/documentation/fskit/fsentityidentifier/init(uuid:qualifierdata:)-8xlg1)

# init(uuid:qualifierData:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates an entity identifier with the given UUID and qualifier data.

## Declaration

```swift
init?(uuid: UUID, qualifierData: Data)
```

## Parameters

- `uuid`: The UUID to use for this identifier.
- `qualifierData`: The data to distinguish entities that otherwise share the same UUID. Must be exactly eight bytes; any other length causes this initializer to return `nil`.

<a id="return-value"></a>

## Return Value

A new identifier, or `nil` if `qualifierData` is not exactly eight bytes long.

# initWithUUID:qualifierData: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates an entity identifier with the given UUID and qualifier data.

## Declaration

```objectivec
- (instancetype) initWithUUID:(NSUUID *) uuid qualifierData:(NSData *) qualifierData;
```

## Parameters

- `uuid`: The UUID to use for this identifier.
- `qualifierData`: The data to distinguish entities that otherwise share the same UUID. Must be exactly eight bytes; any other length causes this initializer to return `nil`.

<a id="return-value"></a>

## Return Value

A new identifier, or `nil` if `qualifierData` is not exactly eight bytes long.
