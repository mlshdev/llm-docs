> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/takefloatvaluefrom(_:)](https://developer.apple.com/documentation/appkit/nscell/takefloatvaluefrom(_:))

# takeFloatValueFrom(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.

## Declaration

```swift
func takeFloatValueFrom(_ sender: Any?)
```

## Parameters

- `sender`: The object from which to take the value. This object must implement the [floatValue](floatvalue.md) property.

## See Also

### Related Documentation

- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.

### Deriving Values

- [takeObjectValueFrom(\_:)](takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeIntegerValueFrom(\_:)](takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntValueFrom(\_:)](takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeStringValueFrom(\_:)](takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.
- [takeDoubleValueFrom(\_:)](takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.

# takeFloatValueFrom: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.

## Declaration

```objectivec
- (void) takeFloatValueFrom:(id) sender;
```

## Parameters

- `sender`: The object from which to take the value. This object must implement the [floatValue](floatvalue.md) property.

## See Also

### Related Documentation

- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.

### Deriving Values

- [takeObjectValueFrom:](takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeIntegerValueFrom:](takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntValueFrom:](takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeStringValueFrom:](takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.
- [takeDoubleValueFrom:](takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.
