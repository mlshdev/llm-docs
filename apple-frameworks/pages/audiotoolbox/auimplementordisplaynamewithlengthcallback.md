> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auimplementordisplaynamewithlengthcallback](https://developer.apple.com/documentation/audiotoolbox/auimplementordisplaynamewithlengthcallback)

# AUImplementorDisplayNameWithLengthCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called to obtain a parameter node’s display name, possibly truncated to a desired length.

## Declaration

```swift
typealias AUImplementorDisplayNameWithLengthCallback = (AUParameterNode, Int) -> String
```

<a id="Discussion"></a>

## Discussion

This block is only of interest to audio unit subclasses.

The block returns a truncated parameter node display name.

The block takes the following parameters:

- **node**: The parameter node to query.
- **desiredLength**: The desired length, in characters, of the display name.

## See Also

### Related Documentation

- [implementorDisplayNameWithLengthCallback](auparameternode/implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.

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
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.
- [AUImplementorValueFromStringCallback](auimplementorvaluefromstringcallback.md): A block called to convert a string to a parameter value.

# AUImplementorDisplayNameWithLengthCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called to obtain a parameter node’s display name, possibly truncated to a desired length.

## Declaration

```objectivec
typedef NSString *(^)(AUParameterNode *, long) AUImplementorDisplayNameWithLengthCallback;
```

<a id="Discussion"></a>

## Discussion

This block is only of interest to audio unit subclasses.

The block returns a truncated parameter node display name.

The block takes the following parameters:

- **node**: The parameter node to query.
- **desiredLength**: The desired length, in characters, of the display name.

## See Also

### Related Documentation

- [implementorDisplayNameWithLengthCallback](auparameternode/implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.

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
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.
- [AUImplementorValueFromStringCallback](auimplementorvaluefromstringcallback.md): A block called to convert a string to a parameter value.
