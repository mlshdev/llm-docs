> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/takeintegervaluefrom(_:)](https://developer.apple.com/documentation/appkit/nscell/takeintegervaluefrom(_:))

# takeIntegerValueFrom(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the value of the receiver’s cell to an integer value obtained from the specified object.

## Declaration

```swift
func takeIntegerValueFrom(_ sender: Any?)
```

## Parameters

- `sender`: The object from which to take the value. This object must implement the [integerValue](integervalue.md) property.

## See Also

### Related Documentation

- [integerValue](integervalue.md): The cell’s value as an integer value.

### Deriving Values

- [takeObjectValueFrom(\_:)](takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeIntValueFrom(\_:)](takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeStringValueFrom(\_:)](takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.
- [takeDoubleValueFrom(\_:)](takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.
- [takeFloatValueFrom(\_:)](takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.

# takeIntegerValueFrom: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the value of the receiver’s cell to an integer value obtained from the specified object.

## Declaration

```objectivec
- (void) takeIntegerValueFrom:(id) sender;
```

## Parameters

- `sender`: The object from which to take the value. This object must implement the [integerValue](integervalue.md) property.

## See Also

### Related Documentation

- [integerValue](integervalue.md): The cell’s value as an integer value.

### Deriving Values

- [takeObjectValueFrom:](takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeIntValueFrom:](takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeStringValueFrom:](takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.
- [takeDoubleValueFrom:](takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.
- [takeFloatValueFrom:](takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.
