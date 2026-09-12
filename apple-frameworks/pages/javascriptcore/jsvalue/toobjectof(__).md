> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/toobjectof(_:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/toobjectof(_:))

# toObjectOf(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts the JavaScript value to a native object of the specified class.

## Declaration

```swift
func toObjectOf(_ expectedClass: AnyClass!) -> Any!
```

## Parameters

- `expectedClass`: The Objective-C or Swift class type to convert the value to.

<a id="return-value"></a>

## Return Value

An Objective-C or Swift object representing the JavaScript value, or `nil` if the value cannot be converted to the expected class.

<a id="Discussion"></a>

## Discussion

Use this method to enforce a specific type conversion from JavaScript, or to retrieve Objective-C or Swift objects of custom classes that were bridged into JavaScript using the [JSExport](../jsexport.md) protocol.

## See Also

### Reading and Converting JavaScript Values

- [toObject()](toobject%28%29.md): Converts the JavaScript value to a native object.
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
- [toSize()](tosize%28%29.md): Converts the value to a size.

# toObjectOfClass: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts the JavaScript value to a native object of the specified class.

## Declaration

```objectivec
- (id) toObjectOfClass:(Class) expectedClass;
```

## Parameters

- `expectedClass`: The Objective-C or Swift class type to convert the value to.

<a id="return-value"></a>

## Return Value

An Objective-C or Swift object representing the JavaScript value, or `nil` if the value cannot be converted to the expected class.

<a id="Discussion"></a>

## Discussion

Use this method to enforce a specific type conversion from JavaScript, or to retrieve Objective-C or Swift objects of custom classes that were bridged into JavaScript using the [JSExport](../jsexport.md) protocol.

## See Also

### Reading and Converting JavaScript Values

- [toObject](toobject%28%29.md): Converts the JavaScript value to a native object.
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
- [toSize](tosize%28%29.md): Converts the value to a size.
