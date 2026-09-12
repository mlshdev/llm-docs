> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/tostring()](https://developer.apple.com/documentation/javascriptcore/jsvalue/tostring())

# toString() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts the JavaScript value to a native string.

## Declaration

```swift
func toString() -> String!
```

<a id="return-value"></a>

## Return Value

The string representation of the value.

<a id="Discussion"></a>

## Discussion

This method uses JavaScript type coercion rules to convert the value to a JavaScript string, then creates a native string from the result. Thus, this method can return a string even when the [isString](isstring.md) property is [false](https://developer.apple.com/documentation/swift/false); for example, an empty object becomes the string `"[object Object]"`.

## See Also

### Reading and Converting JavaScript Values

- [toObject()](toobject%28%29.md): Converts the JavaScript value to a native object.
- [toObjectOf(\_:)](toobjectof%28__%29.md): Converts the JavaScript value to a native object of the specified class.
- [toBool()](tobool%28%29.md): Converts the JavaScript value to a native Boolean value.
- [toDouble()](todouble%28%29.md): Converts the JavaScript value to a native floating-point value.
- [toInt32()](toint32%28%29.md): Converts the JavaScript value to a native signed integer value.
- [toUInt32()](touint32%28%29.md): Converts the JavaScript value to a native unsigned integer value.
- [toNumber()](tonumber%28%29.md): Converts the JavaScript value to a [NSNumber](../../foundation/nsnumber.md) object.
- [toDate()](todate%28%29.md): Converts the JavaScript value to a date object.
- [toArray()](toarray%28%29.md): Converts the JavaScript value to an array.
- [toDictionary()](todictionary%28%29.md): Converts the JavaScript value to a dictionary.
- [toPoint()](topoint%28%29.md): Converts the value to a point structure.
- [toRange()](torange%28%29.md): Converts the value to a range.
- [toRect()](torect%28%29.md): Converts the value to a rectangle structure.
- [toSize()](tosize%28%29.md): Converts the value to a size.

# toString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts the JavaScript value to a native string.

## Declaration

```objectivec
- (NSString *) toString;
```

<a id="return-value"></a>

## Return Value

The string representation of the value.

<a id="Discussion"></a>

## Discussion

This method uses JavaScript type coercion rules to convert the value to a JavaScript string, then creates a native string from the result. Thus, this method can return a string even when the [isString](isstring.md) property is [false](https://developer.apple.com/documentation/swift/false); for example, an empty object becomes the string `"[object Object]"`.

## See Also

### Reading and Converting JavaScript Values

- [toObject](toobject%28%29.md): Converts the JavaScript value to a native object.
- [toObjectOfClass:](toobjectof%28__%29.md): Converts the JavaScript value to a native object of the specified class.
- [toBool](tobool%28%29.md): Converts the JavaScript value to a native Boolean value.
- [toDouble](todouble%28%29.md): Converts the JavaScript value to a native floating-point value.
- [toInt32](toint32%28%29.md): Converts the JavaScript value to a native signed integer value.
- [toUInt32](touint32%28%29.md): Converts the JavaScript value to a native unsigned integer value.
- [toNumber](tonumber%28%29.md): Converts the JavaScript value to a [NSNumber](../../foundation/nsnumber.md) object.
- [toDate](todate%28%29.md): Converts the JavaScript value to a date object.
- [toArray](toarray%28%29.md): Converts the JavaScript value to an array.
- [toDictionary](todictionary%28%29.md): Converts the JavaScript value to a dictionary.
- [toPoint](topoint%28%29.md): Converts the value to a point structure.
- [toRange](torange%28%29.md): Converts the value to a range.
- [toRect](torect%28%29.md): Converts the value to a rectangle structure.
- [toSize](tosize%28%29.md): Converts the value to a size.
