> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbobject/init(elementcode:properties:data:)](https://developer.apple.com/documentation/scriptingbridge/sbobject/init(elementcode:properties:data:))

# init(elementCode:properties:data:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBObject` subclass initialized with the specified properties and data and added to the designated element array.

## Declaration

```swift
init(elementCode code: DescType, properties: [String : Any]?, data: Any?)
```

## Parameters

- `code`: A four-character code used to identify an element in the target application’s scripting interface. See [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager) for details.
- `properties`: A dictionary with [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) keys specifying the four-character codes of properties (that is, attributes or to-one relationships) and the values for those properties. Pass `nil` if you are initializing the object by `data` only.
- `data`: An object containing data for the new `SBObject` object. The data varies according to the type of scripting object to be created. Pass `nil` if you initializing the object by `properties` only.

<a id="return-value"></a>

## Return Value

An `SBObject` object or `nil` if the object could not be initialized.

<a id="discussion"></a>

## Discussion

Unlike the other initializers of this class, this method not only initializes the `SBObject` object but adds it to a specified element array. This method is the designated initializer.

## See Also

### Initializing a Scripting Bridge Object

- [init()](init%28%29.md): Initializes and returns an instance of an `SBObject` subclass.
- [init(data:)](init%28data_%29.md): Returns an instance of an `SBObject` subclass initialized with the given data.
- [init(properties:)](init%28properties_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties.

# initWithElementCode:properties:data: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBObject` subclass initialized with the specified properties and data and added to the designated element array.

## Declaration

```objectivec
- (instancetype) initWithElementCode:(DescType) code properties:(NSDictionary<NSString *,id> *) properties data:(id) data;
```

## Parameters

- `code`: A four-character code used to identify an element in the target application’s scripting interface. See [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager) for details.
- `properties`: A dictionary with [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) keys specifying the four-character codes of properties (that is, attributes or to-one relationships) and the values for those properties. Pass `nil` if you are initializing the object by `data` only.
- `data`: An object containing data for the new `SBObject` object. The data varies according to the type of scripting object to be created. Pass `nil` if you initializing the object by `properties` only.

<a id="return-value"></a>

## Return Value

An `SBObject` object or `nil` if the object could not be initialized.

<a id="discussion"></a>

## Discussion

Unlike the other initializers of this class, this method not only initializes the `SBObject` object but adds it to a specified element array. This method is the designated initializer.

## See Also

### Initializing a Scripting Bridge Object

- [init](init%28%29.md): Initializes and returns an instance of an `SBObject` subclass.
- [initWithData:](init%28data_%29.md): Returns an instance of an `SBObject` subclass initialized with the given data.
- [initWithProperties:](init%28properties_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties.
