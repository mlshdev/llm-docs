> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameternode/implementorvalueprovider](https://developer.apple.com/documentation/audiotoolbox/auparameternode/implementorvalueprovider)

# implementorValueProvider (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for refreshing known stale values in a parameter tree.

## Declaration

```swift
var implementorValueProvider: AUImplementorValueProvider { get set }
```

<a id="Discussion"></a>

## Discussion

The audio unit should return the current value for this parameter; the parameter node object then stores this value.

## See Also

### Audio Unit Implementations

- [implementorValueObserver](implementorvalueobserver.md): The callback for parameter value changes.
- [implementorStringFromValueCallback](implementorstringfromvaluecallback.md): The callback for providing a string representation of a parameter value.
- [implementorValueFromStringCallback](implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.
- [implementorDisplayNameWithLengthCallback](implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.

# implementorValueProvider (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for refreshing known stale values in a parameter tree.

## Declaration

```objectivec
@property (nonatomic, copy) AUImplementorValueProvider implementorValueProvider;
```

```objectivec
@property (atomic, copy) AUImplementorValueProvider implementorValueProvider;
```

<a id="Discussion"></a>

## Discussion

The audio unit should return the current value for this parameter; the parameter node object then stores this value.

## See Also

### Audio Unit Implementations

- [implementorValueObserver](implementorvalueobserver.md): The callback for parameter value changes.
- [implementorStringFromValueCallback](implementorstringfromvaluecallback.md): The callback for providing a string representation of a parameter value.
- [implementorValueFromStringCallback](implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.
- [implementorDisplayNameWithLengthCallback](implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.
