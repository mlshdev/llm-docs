> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameterformatvalue(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/auparameterformatvalue(_:_:_:_:))

# AUParameterFormatValue(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AUParameterFormatValue(_ inParameterValue: Float64, _ inParameter: UnsafePointer<AudioUnitParameter>, _ inTextBuffer: UnsafeMutablePointer<CChar>, _ inDigits: UInt32) -> UnsafeMutablePointer<CChar>
```

## See Also

### Monitoring Parameter Changes

- [AUListenerCreateWithDispatchQueue(\_:\_:\_:\_:)](aulistenercreatewithdispatchqueue%28________%29.md)
- [AUListenerCreate(\_:\_:\_:\_:\_:\_:)](aulistenercreate%28____________%29.md)
- [AUParameterListenerNotify(\_:\_:\_:)](auparameterlistenernotify%28______%29.md)
- [AUParameterSet(\_:\_:\_:\_:\_:)](auparameterset%28__________%29.md)
- [AUParameterValueFromLinear(\_:\_:)](auparametervaluefromlinear%28____%29.md)
- [AUParameterValueToLinear(\_:\_:)](auparametervaluetolinear%28____%29.md)
- [AUParameterListenerBlock](auparameterlistenerblock.md)
- [AUParameterListenerProc](auparameterlistenerproc.md)
- [AUParameterListenerRef](auparameterlistenerref.md)
- [AUImplementorDisplayNameWithLengthCallback](auimplementordisplaynamewithlengthcallback.md): A block called to obtain a parameter node’s display name, possibly truncated to a desired length.
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.
- [AUImplementorValueFromStringCallback](auimplementorvaluefromstringcallback.md): A block called to convert a string to a parameter value.

# AUParameterFormatValue (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern char *AUParameterFormatValue(Float64 inParameterValue, const AudioUnitParameter *inParameter, char *inTextBuffer, UInt32 inDigits);
```

## See Also

### Monitoring Parameter Changes

- [AUListenerCreateWithDispatchQueue](aulistenercreatewithdispatchqueue%28________%29.md)
- [AUListenerCreate](aulistenercreate%28____________%29.md)
- [AUParameterListenerNotify](auparameterlistenernotify%28______%29.md)
- [AUParameterSet](auparameterset%28__________%29.md)
- [AUParameterValueFromLinear](auparametervaluefromlinear%28____%29.md)
- [AUParameterValueToLinear](auparametervaluetolinear%28____%29.md)
- [AUParameterListenerBlock](auparameterlistenerblock.md)
- [AUParameterListenerProc](auparameterlistenerproc.md)
- [AUParameterListenerRef](auparameterlistenerref.md)
- [AUImplementorDisplayNameWithLengthCallback](auimplementordisplaynamewithlengthcallback.md): A block called to obtain a parameter node’s display name, possibly truncated to a desired length.
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.
- [AUImplementorValueFromStringCallback](auimplementorvaluefromstringcallback.md): A block called to convert a string to a parameter value.
