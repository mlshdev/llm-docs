> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/isnull](https://developer.apple.com/documentation/javascriptcore/jsvalue/isnull)

# isNull (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the instance corresponds to the JavaScript `null` value.

## Declaration

```swift
var isNull: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The JavaScript `null` value is used only in cases where an actual value is expected but none is applicable. Note that `null` is not the same as `undefined`.

## See Also

### Determining the Type of a JavaScript Value

- [isUndefined](isundefined.md): A Boolean value that indicates whether the instance corresponds to the JavaScript `undefined` value.
- [isBoolean](isboolean.md): A Boolean value that indicates whether the instance is a JavaScript Boolean value.
- [isNumber](isnumber.md): A Boolean value that indicates whether the instance is a JavaScript numeric value.
- [isString](isstring.md): A Boolean value that indicates whether the instance is a JavaScript `String` object.
- [isObject](isobject.md): A Boolean value that indicates whether the instance is a JavaScript object.
- [isArray](isarray.md): A Boolean value that indicates whether the instance is a JavaScript array value.
- [isDate](isdate.md): A Boolean value that indicates whether the instance is a JavaScript `Date` object.
- [isSymbol](issymbol.md): A Boolean value that indicates whether the instance is a symbol.

# isNull (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the instance corresponds to the JavaScript `null` value.

## Declaration

```objectivec
@property (readonly) BOOL isNull;
```

<a id="Discussion"></a>

## Discussion

The JavaScript `null` value is used only in cases where an actual value is expected but none is applicable. Note that `null` is not the same as `undefined`.

## See Also

### Determining the Type of a JavaScript Value

- [isUndefined](isundefined.md): A Boolean value that indicates whether the instance corresponds to the JavaScript `undefined` value.
- [isBoolean](isboolean.md): A Boolean value that indicates whether the instance is a JavaScript Boolean value.
- [isNumber](isnumber.md): A Boolean value that indicates whether the instance is a JavaScript numeric value.
- [isString](isstring.md): A Boolean value that indicates whether the instance is a JavaScript `String` object.
- [isObject](isobject.md): A Boolean value that indicates whether the instance is a JavaScript object.
- [isArray](isarray.md): A Boolean value that indicates whether the instance is a JavaScript array value.
- [isDate](isdate.md): A Boolean value that indicates whether the instance is a JavaScript `Date` object.
- [isSymbol](issymbol.md): A Boolean value that indicates whether the instance is a symbol.
