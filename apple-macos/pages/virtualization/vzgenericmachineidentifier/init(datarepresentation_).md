> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgenericmachineidentifier/init(datarepresentation:)](https://developer.apple.com/documentation/virtualization/vzgenericmachineidentifier/init(datarepresentation:))

# init(dataRepresentation:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a new unique identifier for a VM with the provided data.

## Declaration

```swift
init?(dataRepresentation: Data)
```

## Parameters

- `dataRepresentation`: A data object that describes the machine identifier.

## See Also

### Creating a Machine Identifier

- [init()](init%28%29.md): Creates a new unique identifier for a VM.

# initWithDataRepresentation: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates a new unique identifier for a VM with the provided data.

## Declaration

```objectivec
- (instancetype) initWithDataRepresentation:(NSData *) dataRepresentation;
```

## Parameters

- `dataRepresentation`: A data object that describes the machine identifier.

## See Also

### Creating a Machine Identifier

- [init](init%28%29.md): Creates a new unique identifier for a VM.
