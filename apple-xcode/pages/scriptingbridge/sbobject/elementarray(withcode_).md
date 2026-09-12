> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbobject/elementarray(withcode:)](https://developer.apple.com/documentation/scriptingbridge/sbobject/elementarray(withcode:))

# elementArray(withCode:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an array containing every child of the receiver with the given class-type code.

## Declaration

```swift
func elementArray(withCode code: DescType) -> SBElementArray
```

## Parameters

- `code`: A four-character code that identifies a scripting class.

<a id="return-value"></a>

## Return Value

An [SBElementArray](../sbelementarray.md) object containing every child of the receiver whose class matches `code`.

<a id="discussion"></a>

## Discussion

`SBObject` subclasses use this method to implement application-specific property accessor methods. You should not need to call this method directly.

> **Note**

> This method doesn’t retrieve the value of the property. To get the value, call [get()](get%28%29.md).

## See Also

### Getting Properties and Elements

- [property(with:code:)](property%28with_code_%29.md): Returns an object of the designated scripting class representing the specified property of the receiver
- [property(withCode:)](property%28withcode_%29.md): Returns an object representing the specified property of the receiver.

# elementArrayWithCode: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an array containing every child of the receiver with the given class-type code.

## Declaration

```objectivec
- (SBElementArray *) elementArrayWithCode:(DescType) code;
```

## Parameters

- `code`: A four-character code that identifies a scripting class.

<a id="return-value"></a>

## Return Value

An [SBElementArray](../sbelementarray.md) object containing every child of the receiver whose class matches `code`.

<a id="discussion"></a>

## Discussion

`SBObject` subclasses use this method to implement application-specific property accessor methods. You should not need to call this method directly.

> **Note**

> This method doesn’t retrieve the value of the property. To get the value, call [get](get%28%29.md).

## See Also

### Getting Properties and Elements

- [propertyWithClass:code:](property%28with_code_%29.md): Returns an object of the designated scripting class representing the specified property of the receiver
- [propertyWithCode:](property%28withcode_%29.md): Returns an object representing the specified property of the receiver.
