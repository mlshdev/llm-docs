> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionpropertystate/init(value:attributes:)](https://developer.apple.com/documentation/coremediaio/cmioextensionpropertystate/init(value:attributes:))

# init(value:attributes:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a property state with a value and attributes.

## Declaration

```swift
init(value: ObjectType?, attributes: CMIOExtensionPropertyAttributes<ObjectType>?)
```

## Parameters

- `value`: The value to associate with the property state.
- `attributes`: The attributes for the property state.

## See Also

### Creating a Property State

- [init(value:)](init%28value_%29.md): Creates a property state with a value.

# initWithValue:attributes: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a property state with a value and attributes.

## Declaration

```objectivec
- (instancetype) initWithValue:(ObjectType) value attributes:(CMIOExtensionPropertyAttributes<id> *) attributes;
```

## Parameters

- `value`: The value to associate with the property state.
- `attributes`: The attributes for the property state.

## See Also

### Creating a Property State

- [propertyStateWithValue:](propertystatewithvalue_.md): Returns a new property state with a value.
- [propertyStateWithValue:attributes:](propertystatewithvalue_attributes_.md): Returns a new property state with a value and attributes.
- [initWithValue:](init%28value_%29.md): Creates a property state with a value.
