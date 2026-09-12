> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalueref](https://developer.apple.com/documentation/javascriptcore/jsvalueref)

# JSValueRef (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript value.

## Declaration

```swift
typealias JSValueRef = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

This is the base type for all JavaScript values, and polymorphic functions on them.

## Topics

### Testing the Value’s Type

- [JSValueGetType(\_:\_:)](jsvaluegettype%28____%29.md): Returns a JavaScript value’s type.
- [JSValueIsUndefined(\_:\_:)](jsvalueisundefined%28____%29.md): Tests whether a JavaScript value’s type is the undefined type.
- [JSValueIsNull(\_:\_:)](jsvalueisnull%28____%29.md): Tests whether a JavaScript value’s type is the null type.
- [JSValueIsBoolean(\_:\_:)](jsvalueisboolean%28____%29.md): Tests whether a JavaScript value is Boolean.
- [JSValueIsNumber(\_:\_:)](jsvalueisnumber%28____%29.md): Tests whether a JavaScript value’s type is the number type.
- [JSValueIsString(\_:\_:)](jsvalueisstring%28____%29.md): Tests whether a JavaScript value’s type is the string type.
- [JSValueIsSymbol(\_:\_:)](jsvalueissymbol%28____%29.md): Tests whether a JavaScript value’s type is the symbol type.
- [JSValueIsObject(\_:\_:)](jsvalueisobject%28____%29.md): Tests whether a JavaScript value’s type is the object type.
- [JSValueIsObjectOfClass(\_:\_:\_:)](jsvalueisobjectofclass%28______%29.md): Tests whether a JavaScript value is an object with a specified class in its class chain.
- [JSValueIsArray(\_:\_:)](jsvalueisarray%28____%29.md): Tests whether a JavaScript value is an array.
- [JSValueIsDate(\_:\_:)](jsvalueisdate%28____%29.md): Tests whether a JavaScript value is a date.
- [JSValueGetTypedArrayType(\_:\_:\_:)](jsvaluegettypedarraytype%28______%29.md): Returns a JavaScript value’s typed array type.
- [JSType](jstype.md): Constants that identify the type of a JavaScript value.

### Creating Values

- [JSValueMakeUndefined(\_:)](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull(\_:)](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeBoolean(\_:\_:)](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeNumber(\_:\_:)](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeString(\_:\_:)](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.
- [JSValueMakeSymbol(\_:\_:)](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.

### Converting to Primitive Values

- [JSValueToBoolean(\_:\_:)](jsvaluetoboolean%28____%29.md): Converts a JavaScript value to a Boolean and returns the resulting Boolean.
- [JSValueToNumber(\_:\_:\_:)](jsvaluetonumber%28______%29.md): Converts a JavaScript value to a number and returns the resulting number.
- [JSValueToStringCopy(\_:\_:\_:)](jsvaluetostringcopy%28______%29.md): Converts a JavaScript value to a string and copies the result into a JavaScript string.
- [JSValueToObject(\_:\_:\_:)](jsvaluetoobject%28______%29.md): Converts a JavaScript value to an object and returns the resulting object.

### Converting to and from JSON-Formatted Strings

- [JSValueMakeFromJSONString(\_:\_:)](jsvaluemakefromjsonstring%28____%29.md): Creates a JavaScript value from a JSON-formatted string.
- [JSValueCreateJSONString(\_:\_:\_:\_:)](jsvaluecreatejsonstring%28________%29.md): Creates a JavaScript string that contains the JSON-serialized representation of a JavaScript value.

### Comparing Values

- [JSValueIsEqual(\_:\_:\_:\_:)](jsvalueisequal%28________%29.md): Tests whether two JavaScript values are equal.
- [JSValueIsStrictEqual(\_:\_:\_:)](jsvalueisstrictequal%28______%29.md): Tests whether two JavaScript values are strict equal.
- [JSValueIsInstanceOfConstructor(\_:\_:\_:\_:)](jsvalueisinstanceofconstructor%28________%29.md): Tests whether a JavaScript value is an object that the specified constructor creates.

### Supporting Garbage Collection

- [JSValueProtect(\_:\_:)](jsvalueprotect%28____%29.md): Protects a JavaScript value from garbage collection.
- [JSValueUnprotect(\_:\_:)](jsvalueunprotect%28____%29.md): Unprotects a JavaScript value from garbage collection.

## See Also

### JavaScript Data Types

- [JSObjectRef](jsobjectref.md): A JavaScript object.

# JSValueRef (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript value.

## Declaration

```objectivec
typedef const struct OpaqueJSValue * JSValueRef;
```

<a id="Discussion"></a>

## Discussion

This is the base type for all JavaScript values, and polymorphic functions on them.

## Topics

### Testing the Value’s Type

- [JSValueGetType](jsvaluegettype%28____%29.md): Returns a JavaScript value’s type.
- [JSValueIsUndefined](jsvalueisundefined%28____%29.md): Tests whether a JavaScript value’s type is the undefined type.
- [JSValueIsNull](jsvalueisnull%28____%29.md): Tests whether a JavaScript value’s type is the null type.
- [JSValueIsBoolean](jsvalueisboolean%28____%29.md): Tests whether a JavaScript value is Boolean.
- [JSValueIsNumber](jsvalueisnumber%28____%29.md): Tests whether a JavaScript value’s type is the number type.
- [JSValueIsString](jsvalueisstring%28____%29.md): Tests whether a JavaScript value’s type is the string type.
- [JSValueIsSymbol](jsvalueissymbol%28____%29.md): Tests whether a JavaScript value’s type is the symbol type.
- [JSValueIsObject](jsvalueisobject%28____%29.md): Tests whether a JavaScript value’s type is the object type.
- [JSValueIsObjectOfClass](jsvalueisobjectofclass%28______%29.md): Tests whether a JavaScript value is an object with a specified class in its class chain.
- [JSValueIsArray](jsvalueisarray%28____%29.md): Tests whether a JavaScript value is an array.
- [JSValueIsDate](jsvalueisdate%28____%29.md): Tests whether a JavaScript value is a date.
- [JSValueGetTypedArrayType](jsvaluegettypedarraytype%28______%29.md): Returns a JavaScript value’s typed array type.
- [JSType](jstype.md): Constants that identify the type of a JavaScript value.

### Creating Values

- [JSValueMakeUndefined](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeBoolean](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeNumber](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeString](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.
- [JSValueMakeSymbol](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.

### Converting to Primitive Values

- [JSValueToBoolean](jsvaluetoboolean%28____%29.md): Converts a JavaScript value to a Boolean and returns the resulting Boolean.
- [JSValueToNumber](jsvaluetonumber%28______%29.md): Converts a JavaScript value to a number and returns the resulting number.
- [JSValueToStringCopy](jsvaluetostringcopy%28______%29.md): Converts a JavaScript value to a string and copies the result into a JavaScript string.
- [JSValueToObject](jsvaluetoobject%28______%29.md): Converts a JavaScript value to an object and returns the resulting object.

### Converting to and from JSON-Formatted Strings

- [JSValueMakeFromJSONString](jsvaluemakefromjsonstring%28____%29.md): Creates a JavaScript value from a JSON-formatted string.
- [JSValueCreateJSONString](jsvaluecreatejsonstring%28________%29.md): Creates a JavaScript string that contains the JSON-serialized representation of a JavaScript value.

### Comparing Values

- [JSValueIsEqual](jsvalueisequal%28________%29.md): Tests whether two JavaScript values are equal.
- [JSValueIsStrictEqual](jsvalueisstrictequal%28______%29.md): Tests whether two JavaScript values are strict equal.
- [JSValueIsInstanceOfConstructor](jsvalueisinstanceofconstructor%28________%29.md): Tests whether a JavaScript value is an object that the specified constructor creates.

### Supporting Garbage Collection

- [JSValueProtect](jsvalueprotect%28____%29.md): Protects a JavaScript value from garbage collection.
- [JSValueUnprotect](jsvalueunprotect%28____%29.md): Unprotects a JavaScript value from garbage collection.

## See Also

### JavaScript Data Types

- [JSObjectRef](jsobjectref.md): A JavaScript object.
