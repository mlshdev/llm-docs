> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/todictionary()](https://developer.apple.com/documentation/javascriptcore/jsvalue/todictionary())

# toDictionary() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts the JavaScript value to a dictionary.

## Declaration

```swift
func toDictionary() -> [AnyHashable : Any]!
```

<a id="return-value"></a>

## Return Value

The dictionary representation of the value.

<a id="Discussion"></a>

## Discussion

If the value is a JavaScript object, this method creates an [NSDictionary](../../foundation/nsdictionary.md) object of the corresponding size, and recursively copies and converts all enumerable properties of the object into the dictionary with correspondingly named keys. JavaScript converts each element to a native object using the rules listed in [Convert Between JavaScript and Native Types](../jsvalue.md#Convert-Between-JavaScript-and-Native-Types).

This method returns `nil` if the JavaScript value is `null` or `undefined`, and throws a JavaScript `TypeError` if the value is not a JavaScript object.

## See Also

### Reading and Converting JavaScript Values

- [toObject()](toobject%28%29.md): Converts the JavaScript value to a native object.
- [toObjectOf(\_:)](toobjectof%28__%29.md): Converts the JavaScript value to a native object of the specified class.
- [toBool()](tobool%28%29.md): Converts the JavaScript value to a native Boolean value.
- [toDouble()](todouble%28%29.md): Converts the JavaScript value to a native floating-point value.
- [toInt32()](toint32%28%29.md): Converts the JavaScript value to a native signed integer value.
- [toUInt32()](touint32%28%29.md): Converts the JavaScript value to a native unsigned integer value.
- [toNumber()](tonumber%28%29.md): Converts the JavaScript value to a [NSNumber](../../foundation/nsnumber.md) object.
- [toString()](tostring%28%29.md): Converts the JavaScript value to a native string.
- [toDate()](todate%28%29.md): Converts the JavaScript value to a date object.
- [toArray()](toarray%28%29.md): Converts the JavaScript value to an array.
- [toPoint()](topoint%28%29.md): Converts the value to a point structure.
- [toRange()](torange%28%29.md): Converts the value to a range.
- [toRect()](torect%28%29.md): Converts the value to a rectangle structure.
- [toSize()](tosize%28%29.md): Converts the value to a size.

# toDictionary (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts the JavaScript value to a dictionary.

## Declaration

```objectivec
- (NSDictionary *) toDictionary;
```

<a id="return-value"></a>

## Return Value

The dictionary representation of the value.

<a id="Discussion"></a>

## Discussion

If the value is a JavaScript object, this method creates an [NSDictionary](../../foundation/nsdictionary.md) object of the corresponding size, and recursively copies and converts all enumerable properties of the object into the dictionary with correspondingly named keys. JavaScript converts each element to a native object using the rules listed in [Convert Between JavaScript and Native Types](../jsvalue.md#Convert-Between-JavaScript-and-Native-Types).

This method returns `nil` if the JavaScript value is `null` or `undefined`, and throws a JavaScript `TypeError` if the value is not a JavaScript object.

## See Also

### Reading and Converting JavaScript Values

- [toObject](toobject%28%29.md): Converts the JavaScript value to a native object.
- [toObjectOfClass:](toobjectof%28__%29.md): Converts the JavaScript value to a native object of the specified class.
- [toBool](tobool%28%29.md): Converts the JavaScript value to a native Boolean value.
- [toDouble](todouble%28%29.md): Converts the JavaScript value to a native floating-point value.
- [toInt32](toint32%28%29.md): Converts the JavaScript value to a native signed integer value.
- [toUInt32](touint32%28%29.md): Converts the JavaScript value to a native unsigned integer value.
- [toNumber](tonumber%28%29.md): Converts the JavaScript value to a [NSNumber](../../foundation/nsnumber.md) object.
- [toString](tostring%28%29.md): Converts the JavaScript value to a native string.
- [toDate](todate%28%29.md): Converts the JavaScript value to a date object.
- [toArray](toarray%28%29.md): Converts the JavaScript value to an array.
- [toPoint](topoint%28%29.md): Converts the value to a point structure.
- [toRange](torange%28%29.md): Converts the value to a range.
- [toRect](torect%28%29.md): Converts the value to a rectangle structure.
- [toSize](tosize%28%29.md): Converts the value to a size.
