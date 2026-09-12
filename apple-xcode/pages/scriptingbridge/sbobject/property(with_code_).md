> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbobject/property(with:code:)](https://developer.apple.com/documentation/scriptingbridge/sbobject/property(with:code:))

# property(with:code:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an object of the designated scripting class representing the specified property of the receiver

## Declaration

```swift
func property(with cls: AnyClass, code: AEKeyword) -> SBObject
```

## Parameters

- `code`: A four-character code that uniquely identifies a property of the receiver.

<a id="return-value"></a>

## Return Value

An instance of the designated `class` that represents the receiver’s property identified by `code`.

<a id="discussion"></a>

## Discussion

`SBObject` subclasses use this method to implement application-specific property accessor methods. You should not need to call this method directly.

> **Note**

> This method doesn’t retrieve the value of the property. To get the value, call [get()](get%28%29.md).

## See Also

### Getting Properties and Elements

- [property(withCode:)](property%28withcode_%29.md): Returns an object representing the specified property of the receiver.
- [elementArray(withCode:)](elementarray%28withcode_%29.md): Returns an array containing every child of the receiver with the given class-type code.

# propertyWithClass:code: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an object of the designated scripting class representing the specified property of the receiver

## Declaration

```objectivec
- (SBObject *) propertyWithClass:(Class) cls code:(AEKeyword) code;
```

## Parameters

- `code`: A four-character code that uniquely identifies a property of the receiver.

<a id="return-value"></a>

## Return Value

An instance of the designated `class` that represents the receiver’s property identified by `code`.

<a id="discussion"></a>

## Discussion

`SBObject` subclasses use this method to implement application-specific property accessor methods. You should not need to call this method directly.

> **Note**

> This method doesn’t retrieve the value of the property. To get the value, call [get](get%28%29.md).

## See Also

### Getting Properties and Elements

- [propertyWithCode:](property%28withcode_%29.md): Returns an object representing the specified property of the receiver.
- [elementArrayWithCode:](elementarray%28withcode_%29.md): Returns an array containing every child of the receiver with the given class-type code.
