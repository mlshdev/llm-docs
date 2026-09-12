> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacmachineidentifier/init(datarepresentation:)](https://developer.apple.com/documentation/virtualization/vzmacmachineidentifier/init(datarepresentation:))

# init(dataRepresentation:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Create a machine identifier described by the specified data representation.

## Declaration

```swift
init?(dataRepresentation: Data)
```

## Parameters

- `dataRepresentation`: The opaque data representation of the machine identifier.

## See Also

### Creating a machine identifier

- [init()](init%28%29.md): Creates a new unique machine identifier.

# initWithDataRepresentation: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Create a machine identifier described by the specified data representation.

## Declaration

```objectivec
- (instancetype) initWithDataRepresentation:(NSData *) dataRepresentation;
```

## Parameters

- `dataRepresentation`: The opaque data representation of the machine identifier.

## See Also

### Creating a machine identifier

- [init](init%28%29.md): Creates a new unique machine identifier.
