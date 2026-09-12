> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/isundefined](https://developer.apple.com/documentation/javascriptcore/jsvalue/isundefined)

# isUndefined (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the instance corresponds to the JavaScript `undefined` value.

## Declaration

```swift
var isUndefined: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The JavaScript `undefined` value is used for variables that have not yet been assigned a value, for formal parameters in functions for which no actual parameter has been passed, and as the result of expressions or function calls that do not explicitly return a value. Note that `undefined` is not the same as `null`.

## See Also

### Determining the Type of a JavaScript Value

- [isNull](isnull.md): A Boolean value that indicates whether the instance corresponds to the JavaScript `null` value.
- [isBoolean](isboolean.md): A Boolean value that indicates whether the instance is a JavaScript Boolean value.
- [isNumber](isnumber.md): A Boolean value that indicates whether the instance is a JavaScript numeric value.
- [isString](isstring.md): A Boolean value that indicates whether the instance is a JavaScript `String` object.
- [isObject](isobject.md): A Boolean value that indicates whether the instance is a JavaScript object.
- [isArray](isarray.md): A Boolean value that indicates whether the instance is a JavaScript array value.
- [isDate](isdate.md): A Boolean value that indicates whether the instance is a JavaScript `Date` object.
- [isSymbol](issymbol.md): A Boolean value that indicates whether the instance is a symbol.

# isUndefined (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the instance corresponds to the JavaScript `undefined` value.

## Declaration

```objectivec
@property (readonly) BOOL isUndefined;
```

<a id="Discussion"></a>

## Discussion

The JavaScript `undefined` value is used for variables that have not yet been assigned a value, for formal parameters in functions for which no actual parameter has been passed, and as the result of expressions or function calls that do not explicitly return a value. Note that `undefined` is not the same as `null`.

## See Also

### Determining the Type of a JavaScript Value

- [isNull](isnull.md): A Boolean value that indicates whether the instance corresponds to the JavaScript `null` value.
- [isBoolean](isboolean.md): A Boolean value that indicates whether the instance is a JavaScript Boolean value.
- [isNumber](isnumber.md): A Boolean value that indicates whether the instance is a JavaScript numeric value.
- [isString](isstring.md): A Boolean value that indicates whether the instance is a JavaScript `String` object.
- [isObject](isobject.md): A Boolean value that indicates whether the instance is a JavaScript object.
- [isArray](isarray.md): A Boolean value that indicates whether the instance is a JavaScript array value.
- [isDate](isdate.md): A Boolean value that indicates whether the instance is a JavaScript `Date` object.
- [isSymbol](issymbol.md): A Boolean value that indicates whether the instance is a symbol.
