> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/tonumber()](https://developer.apple.com/documentation/javascriptcore/jsvalue/tonumber())

# toNumber() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts the JavaScript value to a [NSNumber](../../foundation/nsnumber.md) object.

## Declaration

```swift
func toNumber() -> NSNumber!
```

<a id="return-value"></a>

## Return Value

A [NSNumber](../../foundation/nsnumber.md) object encapsulating the native representation of the value.

<a id="Discussion"></a>

## Discussion

If the value represents a Boolean value, the resulting [NSNumber](../../foundation/nsnumber.md) object is created as with the [numberWithBool:](../../foundation/nsnumber/numberwithbool_.md) method. Otherwise, this method uses JavaScript type coercion to convert the value to a JavaScript numeric value and creates a [NSNumber](../../foundation/nsnumber.md) object wrapping the result.

## See Also

### Reading and Converting JavaScript Values

- [toObject()](toobject%28%29.md): Converts the JavaScript value to a native object.
- [toObjectOf(\_:)](toobjectof%28__%29.md): Converts the JavaScript value to a native object of the specified class.
- [toBool()](tobool%28%29.md): Converts the JavaScript value to a native Boolean value.
- [toDouble()](todouble%28%29.md): Converts the JavaScript value to a native floating-point value.
- [toInt32()](toint32%28%29.md): Converts the JavaScript value to a native signed integer value.
- [toUInt32()](touint32%28%29.md): Converts the JavaScript value to a native unsigned integer value.
- [toString()](tostring%28%29.md): Converts the JavaScript value to a native string.
- [toDate()](todate%28%29.md): Converts the JavaScript value to a date object.
- [toArray()](toarray%28%29.md): Converts the JavaScript value to an array.
- [toDictionary()](todictionary%28%29.md): Converts the JavaScript value to a dictionary.
- [toPoint()](topoint%28%29.md): Converts the value to a point structure.
- [toRange()](torange%28%29.md): Converts the value to a range.
- [toRect()](torect%28%29.md): Converts the value to a rectangle structure.
- [toSize()](tosize%28%29.md): Converts the value to a size.

# toNumber (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts the JavaScript value to a [NSNumber](../../foundation/nsnumber.md) object.

## Declaration

```objectivec
- (NSNumber *) toNumber;
```

<a id="return-value"></a>

## Return Value

A [NSNumber](../../foundation/nsnumber.md) object encapsulating the native representation of the value.

<a id="Discussion"></a>

## Discussion

If the value represents a Boolean value, the resulting [NSNumber](../../foundation/nsnumber.md) object is created as with the [numberWithBool:](../../foundation/nsnumber/numberwithbool_.md) method. Otherwise, this method uses JavaScript type coercion to convert the value to a JavaScript numeric value and creates a [NSNumber](../../foundation/nsnumber.md) object wrapping the result.

## See Also

### Reading and Converting JavaScript Values

- [toObject](toobject%28%29.md): Converts the JavaScript value to a native object.
- [toObjectOfClass:](toobjectof%28__%29.md): Converts the JavaScript value to a native object of the specified class.
- [toBool](tobool%28%29.md): Converts the JavaScript value to a native Boolean value.
- [toDouble](todouble%28%29.md): Converts the JavaScript value to a native floating-point value.
- [toInt32](toint32%28%29.md): Converts the JavaScript value to a native signed integer value.
- [toUInt32](touint32%28%29.md): Converts the JavaScript value to a native unsigned integer value.
- [toString](tostring%28%29.md): Converts the JavaScript value to a native string.
- [toDate](todate%28%29.md): Converts the JavaScript value to a date object.
- [toArray](toarray%28%29.md): Converts the JavaScript value to an array.
- [toDictionary](todictionary%28%29.md): Converts the JavaScript value to a dictionary.
- [toPoint](topoint%28%29.md): Converts the value to a point structure.
- [toRange](torange%28%29.md): Converts the value to a range.
- [toRect](torect%28%29.md): Converts the value to a rectangle structure.
- [toSize](tosize%28%29.md): Converts the value to a size.
