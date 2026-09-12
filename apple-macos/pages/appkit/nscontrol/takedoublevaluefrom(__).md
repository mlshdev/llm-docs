> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/takedoublevaluefrom(_:)](https://developer.apple.com/documentation/appkit/nscontrol/takedoublevaluefrom(_:))

# takeDoubleValueFrom(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.

## Declaration

```swift
func takeDoubleValueFrom(_ sender: Any?)
```

## Parameters

- `sender`: The object from which to take the value. This object must respond to the [doubleValue](doublevalue.md) property.

<a id="Discussion"></a>

## Discussion

You can use this method to link action messages between controls. It permits one control or cell (`sender`) to affect the value of another control (the receiver) by invoking this method in an action message to the receiver. For example, a text field can be made the target of a slider. Whenever the slider is moved, it sends this message to the text field. The text field then obtains the slider’s value, turns it into a text string, and displays it.

## See Also

### Interacting with Other Controls

- [takeFloatValueFrom(\_:)](takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.
- [takeIntValueFrom(\_:)](takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntegerValueFrom(\_:)](takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an `NSInteger` value obtained from the specified object.
- [takeObjectValueFrom(\_:)](takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeStringValueFrom(\_:)](takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.

# takeDoubleValueFrom: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the value of the receiver’s cell to a double-precision floating-point value obtained from the specified object.

## Declaration

```objectivec
- (void) takeDoubleValueFrom:(id) sender;
```

## Parameters

- `sender`: The object from which to take the value. This object must respond to the [doubleValue](doublevalue.md) property.

<a id="Discussion"></a>

## Discussion

You can use this method to link action messages between controls. It permits one control or cell (`sender`) to affect the value of another control (the receiver) by invoking this method in an action message to the receiver. For example, a text field can be made the target of a slider. Whenever the slider is moved, it sends this message to the text field. The text field then obtains the slider’s value, turns it into a text string, and displays it.

## See Also

### Interacting with Other Controls

- [takeFloatValueFrom:](takefloatvaluefrom%28__%29.md): Sets the value of the receiver’s cell to a single-precision floating-point value obtained from the specified object.
- [takeIntValueFrom:](takeintvaluefrom%28__%29.md): Sets the value of the receiver’s cell to an integer value obtained from the specified object.
- [takeIntegerValueFrom:](takeintegervaluefrom%28__%29.md): Sets the value of the receiver’s cell to an `NSInteger` value obtained from the specified object.
- [takeObjectValueFrom:](takeobjectvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the object value obtained from the specified object.
- [takeStringValueFrom:](takestringvaluefrom%28__%29.md): Sets the value of the receiver’s cell to the string value obtained from the specified object.
