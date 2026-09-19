> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzmachardwaremodel/init(datarepresentation:)

# init(dataRepresentation:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates an instance of the hardware model described by the specified data representation.

## Declaration

```swift
init?(dataRepresentation: Data)
```

## Parameters

- `dataRepresentation`: The opaque data representation of the hardware model.

# initWithDataRepresentation: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates an instance of the hardware model described by the specified data representation.

## Declaration

```objectivec
- (instancetype) initWithDataRepresentation:(NSData *) dataRepresentation;
```

## Parameters

- `dataRepresentation`: The opaque data representation of the hardware model.
