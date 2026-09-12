> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jstype](https://developer.apple.com/documentation/javascriptcore/jstype)

# JSType (Swift)

**Framework:** JavaScriptCore  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Constants that identify the type of a JavaScript value.

## Declaration

```swift
struct JSType
```

## Topics

### Constants

- [kJSTypeUndefined](kjstypeundefined.md): The unique undefined value.
- [kJSTypeNull](kjstypenull.md): The unique null value.
- [kJSTypeBoolean](kjstypeboolean.md): A primitive Boolean value.
- [kJSTypeNumber](kjstypenumber.md): A primitive number value.
- [kJSTypeString](kjstypestring.md): A primitive string value.
- [kJSTypeObject](kjstypeobject.md): An object value.
- [kJSTypeSymbol](kjstypesymbol.md): A primitive symbol value.

### Initializers

- [init(\_:)](jstype/init%28__%29.md): Creates a JavaScript type.
- [init(rawValue:)](jstype/init%28rawvalue_%29.md): Creates a JavaScript type with the specified raw value.
- [rawValue](jstype/rawvalue.md): The raw value that represents the JavaScript type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

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

# JSType (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Constants that identify the type of a JavaScript value.

## Declaration

```objectivec
typedef enum { ... } JSType;
```

## Topics

### Constants

- [kJSTypeUndefined](kjstypeundefined.md): The unique undefined value.
- [kJSTypeNull](kjstypenull.md): The unique null value.
- [kJSTypeBoolean](kjstypeboolean.md): A primitive Boolean value.
- [kJSTypeNumber](kjstypenumber.md): A primitive number value.
- [kJSTypeString](kjstypestring.md): A primitive string value.
- [kJSTypeObject](kjstypeobject.md): An object value.
- [kJSTypeSymbol](kjstypesymbol.md): A primitive symbol value.

### Enumeration Cases

- [kJSTypeBigInt](kjstypebigint.md)

## See Also

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
