> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbobject/init(properties:)](https://developer.apple.com/documentation/scriptingbridge/sbobject/init(properties:))

# init(properties:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBObject` subclass initialized with the specified properties.

## Declaration

```swift
init(properties: [AnyHashable : Any])
```

## Parameters

- `properties`: A dictionary with keys specifying the names of properties (that is, attributes or to-one relationships) and the values for those properties.

<a id="return-value"></a>

## Return Value

An `SBObject` object or `nil` if the object could not be initialized.

<a id="discussion"></a>

## Discussion

Scripting Bridge does not actually create an object in the target application until you add the object returned from this method to an element array ([SBElementArray](../sbelementarray.md)).

## See Also

### Initializing a Scripting Bridge Object

- [init()](init%28%29.md): Initializes and returns an instance of an `SBObject` subclass.
- [init(data:)](init%28data_%29.md): Returns an instance of an `SBObject` subclass initialized with the given data.
- [init(elementCode:properties:data:)](init%28elementcode_properties_data_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties and data and added to the designated element array.

# initWithProperties: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBObject` subclass initialized with the specified properties.

## Declaration

```objectivec
- (instancetype) initWithProperties:(NSDictionary *) properties;
```

## Parameters

- `properties`: A dictionary with keys specifying the names of properties (that is, attributes or to-one relationships) and the values for those properties.

<a id="return-value"></a>

## Return Value

An `SBObject` object or `nil` if the object could not be initialized.

<a id="discussion"></a>

## Discussion

Scripting Bridge does not actually create an object in the target application until you add the object returned from this method to an element array ([SBElementArray](../sbelementarray.md)).

## See Also

### Initializing a Scripting Bridge Object

- [init](init%28%29.md): Initializes and returns an instance of an `SBObject` subclass.
- [initWithData:](init%28data_%29.md): Returns an instance of an `SBObject` subclass initialized with the given data.
- [initWithElementCode:properties:data:](init%28elementcode_properties_data_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties and data and added to the designated element array.
