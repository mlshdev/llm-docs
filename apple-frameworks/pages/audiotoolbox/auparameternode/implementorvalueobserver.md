> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameternode/implementorvalueobserver](https://developer.apple.com/documentation/audiotoolbox/auparameternode/implementorvalueobserver)

# implementorValueObserver (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for parameter value changes.

## Declaration

```swift
var implementorValueObserver: AUImplementorValueObserver { get set }
```

<a id="Discussion"></a>

## Discussion

This block receives all externally-generated changes to parameter values. It should store the new value in its audio signal processing state (assuming that state is separate from the parameter object).

## See Also

### Audio Unit Implementations

- [implementorValueProvider](implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.
- [implementorStringFromValueCallback](implementorstringfromvaluecallback.md): The callback for providing a string representation of a parameter value.
- [implementorValueFromStringCallback](implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.
- [implementorDisplayNameWithLengthCallback](implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.

# implementorValueObserver (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for parameter value changes.

## Declaration

```objectivec
@property (nonatomic, copy) AUImplementorValueObserver implementorValueObserver;
```

```objectivec
@property (atomic, copy) AUImplementorValueObserver implementorValueObserver;
```

<a id="Discussion"></a>

## Discussion

This block receives all externally-generated changes to parameter values. It should store the new value in its audio signal processing state (assuming that state is separate from the parameter object).

## See Also

### Audio Unit Implementations

- [implementorValueProvider](implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.
- [implementorStringFromValueCallback](implementorstringfromvaluecallback.md): The callback for providing a string representation of a parameter value.
- [implementorValueFromStringCallback](implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.
- [implementorDisplayNameWithLengthCallback](implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.
