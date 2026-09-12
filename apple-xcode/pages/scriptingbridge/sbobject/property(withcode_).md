> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbobject/property(withcode:)](https://developer.apple.com/documentation/scriptingbridge/sbobject/property(withcode:))

# property(withCode:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an object representing the specified property of the receiver.

## Declaration

```swift
func property(withCode code: AEKeyword) -> SBObject
```

## Parameters

- `code`: A four-character code that uniquely identifies a property of the receiver.

<a id="return-value"></a>

## Return Value

An object representing the receiver’s property as identified by `code`.

<a id="discussion"></a>

## Discussion

`SBObject` subclasses use this method to implement application-specific property accessor methods. You should not need to call this method directly.

## See Also

### Getting Properties and Elements

- [property(with:code:)](property%28with_code_%29.md): Returns an object of the designated scripting class representing the specified property of the receiver
- [elementArray(withCode:)](elementarray%28withcode_%29.md): Returns an array containing every child of the receiver with the given class-type code.

# propertyWithCode: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an object representing the specified property of the receiver.

## Declaration

```objectivec
- (SBObject *) propertyWithCode:(AEKeyword) code;
```

## Parameters

- `code`: A four-character code that uniquely identifies a property of the receiver.

<a id="return-value"></a>

## Return Value

An object representing the receiver’s property as identified by `code`.

<a id="discussion"></a>

## Discussion

`SBObject` subclasses use this method to implement application-specific property accessor methods. You should not need to call this method directly.

## See Also

### Getting Properties and Elements

- [propertyWithClass:code:](property%28with_code_%29.md): Returns an object of the designated scripting class representing the specified property of the receiver
- [elementArrayWithCode:](elementarray%28withcode_%29.md): Returns an array containing every child of the receiver with the given class-type code.
