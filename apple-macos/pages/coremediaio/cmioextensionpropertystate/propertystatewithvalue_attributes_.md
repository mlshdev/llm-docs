> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionpropertystate/propertystatewithvalue:attributes:](https://developer.apple.com/documentation/coremediaio/cmioextensionpropertystate/propertystatewithvalue:attributes:)

# propertyStateWithValue:attributes:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new property state with a value and attributes.

## Declaration

```objectivec
+ (instancetype) propertyStateWithValue:(ObjectType) value attributes:(CMIOExtensionPropertyAttributes<id> *) attributes;
```

## Parameters

- `value`: The value to associate with the property state.
- `attributes`: The attributes for the property state.

<a id="return-value"></a>

## Return Value

A new property state.

## See Also

### Creating a Property State

- [propertyStateWithValue:](propertystatewithvalue_.md): Returns a new property state with a value.
- [initWithValue:](init%28value_%29.md): Creates a property state with a value.
- [initWithValue:attributes:](init%28value_attributes_%29.md): Creates a property state with a value and attributes.
