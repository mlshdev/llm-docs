> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auimplementorvaluefromstringcallback](https://developer.apple.com/documentation/audiotoolbox/auimplementorvaluefromstringcallback)

# AUImplementorValueFromStringCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called to convert a string to a parameter value.

## Declaration

```swift
typealias AUImplementorValueFromStringCallback = (AUParameter, String) -> AUValue
```

<a id="Discussion"></a>

## Discussion

This block is only of interest to audio unit subclasses.

The block returns the current value of the parameter.

The block takes the following parameters:

- **param**: The parameter whose value will be changed.
- **string**: The string that contains the new parameter value.

## See Also

### Related Documentation

- [implementorValueFromStringCallback](auparameternode/implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.

### Monitoring Parameter Changes

- [AUListenerCreateWithDispatchQueue(\_:\_:\_:\_:)](aulistenercreatewithdispatchqueue%28________%29.md)
- [AUListenerCreate(\_:\_:\_:\_:\_:\_:)](aulistenercreate%28____________%29.md)
- [AUParameterListenerNotify(\_:\_:\_:)](auparameterlistenernotify%28______%29.md)
- [AUParameterFormatValue(\_:\_:\_:\_:)](auparameterformatvalue%28________%29.md)
- [AUParameterSet(\_:\_:\_:\_:\_:)](auparameterset%28__________%29.md)
- [AUParameterValueFromLinear(\_:\_:)](auparametervaluefromlinear%28____%29.md)
- [AUParameterValueToLinear(\_:\_:)](auparametervaluetolinear%28____%29.md)
- [AUParameterListenerBlock](auparameterlistenerblock.md)
- [AUParameterListenerProc](auparameterlistenerproc.md)
- [AUParameterListenerRef](auparameterlistenerref.md)
- [AUImplementorDisplayNameWithLengthCallback](auimplementordisplaynamewithlengthcallback.md): A block called to obtain a parameter node’s display name, possibly truncated to a desired length.
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.

# AUImplementorValueFromStringCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called to convert a string to a parameter value.

## Declaration

```objectivec
typedef float (^)(AUParameter *, NSString *) AUImplementorValueFromStringCallback;
```

<a id="Discussion"></a>

## Discussion

This block is only of interest to audio unit subclasses.

The block returns the current value of the parameter.

The block takes the following parameters:

- **param**: The parameter whose value will be changed.
- **string**: The string that contains the new parameter value.

## See Also

### Related Documentation

- [implementorValueFromStringCallback](auparameternode/implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.

### Monitoring Parameter Changes

- [AUListenerCreateWithDispatchQueue](aulistenercreatewithdispatchqueue%28________%29.md)
- [AUListenerCreate](aulistenercreate%28____________%29.md)
- [AUParameterListenerNotify](auparameterlistenernotify%28______%29.md)
- [AUParameterFormatValue](auparameterformatvalue%28________%29.md)
- [AUParameterSet](auparameterset%28__________%29.md)
- [AUParameterValueFromLinear](auparametervaluefromlinear%28____%29.md)
- [AUParameterValueToLinear](auparametervaluetolinear%28____%29.md)
- [AUParameterListenerBlock](auparameterlistenerblock.md)
- [AUParameterListenerProc](auparameterlistenerproc.md)
- [AUParameterListenerRef](auparameterlistenerref.md)
- [AUImplementorDisplayNameWithLengthCallback](auimplementordisplaynamewithlengthcallback.md): A block called to obtain a parameter node’s display name, possibly truncated to a desired length.
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.
