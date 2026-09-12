> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/tosize()](https://developer.apple.com/documentation/javascriptcore/jsvalue/tosize())

# toSize() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the value to a size.

## Declaration

```swift
func toSize() -> CGSize
```

<a id="return-value"></a>

## Return Value

A CoreGraphics size representation of the value.

<a id="Discussion"></a>

## Discussion

This method treats the value as a JavaScript object, reading the values of its `width` and `height` properties using the [toDouble()](todouble%28%29.md) method and creating a [CGSize](../../corefoundation/cgsize.md) structure from the result. If the value is not a JavaScript object or does not have the appropriate properties, the size’s width and height are each not a number (NaN).

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
- [toDictionary()](todictionary%28%29.md): Converts the JavaScript value to a dictionary.
- [toPoint()](topoint%28%29.md): Converts the value to a point structure.
- [toRange()](torange%28%29.md): Converts the value to a range.
- [toRect()](torect%28%29.md): Converts the value to a rectangle structure.

# toSize (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the value to a size.

## Declaration

```objectivec
- (CGSize) toSize;
```

<a id="return-value"></a>

## Return Value

A CoreGraphics size representation of the value.

<a id="Discussion"></a>

## Discussion

This method treats the value as a JavaScript object, reading the values of its `width` and `height` properties using the [toDouble](todouble%28%29.md) method and creating a [CGSize](../../corefoundation/cgsize.md) structure from the result. If the value is not a JavaScript object or does not have the appropriate properties, the size’s width and height are each not a number (NaN).

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
- [toDictionary](todictionary%28%29.md): Converts the JavaScript value to a dictionary.
- [toPoint](topoint%28%29.md): Converts the value to a point structure.
- [toRange](torange%28%29.md): Converts the value to a range.
- [toRect](torect%28%29.md): Converts the value to a rectangle structure.
