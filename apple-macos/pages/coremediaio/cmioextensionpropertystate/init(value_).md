> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionpropertystate/init(value:)](https://developer.apple.com/documentation/coremediaio/cmioextensionpropertystate/init(value:))

# init(value:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a property state with a value.

## Declaration

```swift
convenience init(value: ObjectType?)
```

## Parameters

- `value`: The value to associate with the property state.

<a id="Discussion"></a>

## Discussion

The system supports the following value types: [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary), [NSArray](https://developer.apple.com/documentation/foundation/nsarray), [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSData](https://developer.apple.com/documentation/foundation/nsdata), and [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber).

## See Also

### Creating a Property State

- [init(value:attributes:)](init%28value_attributes_%29.md): Creates a property state with a value and attributes.

# initWithValue: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a property state with a value.

## Declaration

```objectivec
- (instancetype) initWithValue:(ObjectType) value;
```

## Parameters

- `value`: The value to associate with the property state.

<a id="Discussion"></a>

## Discussion

The system supports the following value types: [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary), [NSArray](https://developer.apple.com/documentation/foundation/nsarray), [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSData](https://developer.apple.com/documentation/foundation/nsdata), and [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber).

## See Also

### Creating a Property State

- [propertyStateWithValue:](propertystatewithvalue_.md): Returns a new property state with a value.
- [propertyStateWithValue:attributes:](propertystatewithvalue_attributes_.md): Returns a new property state with a value and attributes.
- [initWithValue:attributes:](init%28value_attributes_%29.md): Creates a property state with a value and attributes.
