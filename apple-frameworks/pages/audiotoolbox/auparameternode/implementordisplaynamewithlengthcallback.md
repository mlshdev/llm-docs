> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameternode/implementordisplaynamewithlengthcallback](https://developer.apple.com/documentation/audiotoolbox/auparameternode/implementordisplaynamewithlengthcallback)

# implementorDisplayNameWithLengthCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for obtaining an abbreviated version of a parameter node display name.

## Declaration

```swift
var implementorDisplayNameWithLengthCallback: AUImplementorDisplayNameWithLengthCallback { get set }
```

## See Also

### Audio Unit Implementations

- [implementorValueObserver](implementorvalueobserver.md): The callback for parameter value changes.
- [implementorValueProvider](implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.
- [implementorStringFromValueCallback](implementorstringfromvaluecallback.md): The callback for providing a string representation of a parameter value.
- [implementorValueFromStringCallback](implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.

# implementorDisplayNameWithLengthCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for obtaining an abbreviated version of a parameter node display name.

## Declaration

```objectivec
@property (nonatomic, copy) AUImplementorDisplayNameWithLengthCallback implementorDisplayNameWithLengthCallback;
```

```objectivec
@property (atomic, copy) AUImplementorDisplayNameWithLengthCallback implementorDisplayNameWithLengthCallback;
```

## See Also

### Audio Unit Implementations

- [implementorValueObserver](implementorvalueobserver.md): The callback for parameter value changes.
- [implementorValueProvider](implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.
- [implementorStringFromValueCallback](implementorstringfromvaluecallback.md): The callback for providing a string representation of a parameter value.
- [implementorValueFromStringCallback](implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.
