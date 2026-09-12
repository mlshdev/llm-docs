> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/takeobjectvaluefrom(_:)](https://developer.apple.com/documentation/appkit/nscell/takeobjectvaluefrom(_:))

# takeObjectValueFrom(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the value of the receiver’s cell to the object value obtained from the specified object.

## Declaration

```swift
func takeObjectValueFrom(_ sender: Any?)
```

## Parameters

- `sender`: The object from which to take the value. This object must support the [objectValue](objectvalue.md) property.

## See Also

### Related Documentation

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.

### Deriving Values

- [takeIntegerValueFrom(\_:)](takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntValueFrom(\_:)](takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeStringValueFrom(\_:)](takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.
- [takeDoubleValueFrom(\_:)](takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.
- [takeFloatValueFrom(\_:)](takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.

# takeObjectValueFrom: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the value of the receiver’s cell to the object value obtained from the specified object.

## Declaration

```objectivec
- (void) takeObjectValueFrom:(id) sender;
```

## Parameters

- `sender`: The object from which to take the value. This object must support the [objectValue](objectvalue.md) property.

## See Also

### Related Documentation

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.

### Deriving Values

- [takeIntegerValueFrom:](takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntValueFrom:](takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeStringValueFrom:](takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.
- [takeDoubleValueFrom:](takedoublevaluefrom%28__%29.md): Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.
- [takeFloatValueFrom:](takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.
