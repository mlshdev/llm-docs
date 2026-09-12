> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameternode/implementorstringfromvaluecallback](https://developer.apple.com/documentation/audiotoolbox/auparameternode/implementorstringfromvaluecallback)

# implementorStringFromValueCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for providing a string representation of a parameter value.

## Declaration

```swift
var implementorStringFromValueCallback: AUImplementorStringFromValueCallback { get set }
```

## See Also

### Audio Unit Implementations

- [implementorValueObserver](implementorvalueobserver.md): The callback for parameter value changes.
- [implementorValueProvider](implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.
- [implementorValueFromStringCallback](implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.
- [implementorDisplayNameWithLengthCallback](implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.

# implementorStringFromValueCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for providing a string representation of a parameter value.

## Declaration

```objectivec
@property (nonatomic, copy) AUImplementorStringFromValueCallback implementorStringFromValueCallback;
```

```objectivec
@property (atomic, copy) AUImplementorStringFromValueCallback implementorStringFromValueCallback;
```

## See Also

### Audio Unit Implementations

- [implementorValueObserver](implementorvalueobserver.md): The callback for parameter value changes.
- [implementorValueProvider](implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.
- [implementorValueFromStringCallback](implementorvaluefromstringcallback.md): The callback for converting a string to a parameter value.
- [implementorDisplayNameWithLengthCallback](implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.
