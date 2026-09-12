> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbobject/init()](https://developer.apple.com/documentation/scriptingbridge/sbobject/init())

# init() (Swift)

**Framework:** Scripting Bridge  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Initializes and returns an instance of an `SBObject` subclass.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An `SBObject` object or `nil` if the object could not be initialized.

<a id="discussion"></a>

## Discussion

Scripting Bridge does not actually create an object in the target application until you add the object returned from this method to an element array ([SBElementArray](../sbelementarray.md)).

## See Also

### Initializing a Scripting Bridge Object

- [init(data:)](init%28data_%29.md): Returns an instance of an `SBObject` subclass initialized with the given data.
- [init(properties:)](init%28properties_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties.
- [init(elementCode:properties:data:)](init%28elementcode_properties_data_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties and data and added to the designated element array.

# init (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Initializes and returns an instance of an `SBObject` subclass.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An `SBObject` object or `nil` if the object could not be initialized.

<a id="discussion"></a>

## Discussion

Scripting Bridge does not actually create an object in the target application until you add the object returned from this method to an element array ([SBElementArray](../sbelementarray.md)).

## See Also

### Initializing a Scripting Bridge Object

- [initWithData:](init%28data_%29.md): Returns an instance of an `SBObject` subclass initialized with the given data.
- [initWithProperties:](init%28properties_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties.
- [initWithElementCode:properties:data:](init%28elementcode_properties_data_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties and data and added to the designated element array.
