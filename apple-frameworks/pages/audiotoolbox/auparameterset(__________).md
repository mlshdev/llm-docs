> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameterset(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/auparameterset(_:_:_:_:_:))

# AUParameterSet(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AUParameterSet(_ inSendingListener: AUParameterListenerRef?, _ inSendingObject: UnsafeMutableRawPointer?, _ inParameter: UnsafePointer<AudioUnitParameter>, _ inValue: AudioUnitParameterValue, _ inBufferOffsetInFrames: UInt32) -> OSStatus
```

## See Also

### Monitoring Parameter Changes

- [AUListenerCreateWithDispatchQueue(\_:\_:\_:\_:)](aulistenercreatewithdispatchqueue%28________%29.md)
- [AUListenerCreate(\_:\_:\_:\_:\_:\_:)](aulistenercreate%28____________%29.md)
- [AUParameterListenerNotify(\_:\_:\_:)](auparameterlistenernotify%28______%29.md)
- [AUParameterFormatValue(\_:\_:\_:\_:)](auparameterformatvalue%28________%29.md)
- [AUParameterValueFromLinear(\_:\_:)](auparametervaluefromlinear%28____%29.md)
- [AUParameterValueToLinear(\_:\_:)](auparametervaluetolinear%28____%29.md)
- [AUParameterListenerBlock](auparameterlistenerblock.md)
- [AUParameterListenerProc](auparameterlistenerproc.md)
- [AUParameterListenerRef](auparameterlistenerref.md)
- [AUImplementorDisplayNameWithLengthCallback](auimplementordisplaynamewithlengthcallback.md): A block called to obtain a parameter node’s display name, possibly truncated to a desired length.
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.
- [AUImplementorValueFromStringCallback](auimplementorvaluefromstringcallback.md): A block called to convert a string to a parameter value.

# AUParameterSet (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AUParameterSet(AUParameterListenerRef inSendingListener, void *inSendingObject, const AudioUnitParameter *inParameter, AudioUnitParameterValue inValue, UInt32 inBufferOffsetInFrames);
```

## See Also

### Monitoring Parameter Changes

- [AUListenerCreateWithDispatchQueue](aulistenercreatewithdispatchqueue%28________%29.md)
- [AUListenerCreate](aulistenercreate%28____________%29.md)
- [AUParameterListenerNotify](auparameterlistenernotify%28______%29.md)
- [AUParameterFormatValue](auparameterformatvalue%28________%29.md)
- [AUParameterValueFromLinear](auparametervaluefromlinear%28____%29.md)
- [AUParameterValueToLinear](auparametervaluetolinear%28____%29.md)
- [AUParameterListenerBlock](auparameterlistenerblock.md)
- [AUParameterListenerProc](auparameterlistenerproc.md)
- [AUParameterListenerRef](auparameterlistenerref.md)
- [AUImplementorDisplayNameWithLengthCallback](auimplementordisplaynamewithlengthcallback.md): A block called to obtain a parameter node’s display name, possibly truncated to a desired length.
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.
- [AUImplementorValueFromStringCallback](auimplementorvaluefromstringcallback.md): A block called to convert a string to a parameter value.
