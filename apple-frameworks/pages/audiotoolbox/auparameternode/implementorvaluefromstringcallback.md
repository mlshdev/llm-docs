> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/auparameternode/implementorvaluefromstringcallback

# implementorValueFromStringCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for converting a string to a parameter value.

## Declaration

```swift
var implementorValueFromStringCallback: AUImplementorValueFromStringCallback { get set }
```

## See Also

### Audio Unit Implementations

- [implementorValueObserver](implementorvalueobserver.md): The callback for parameter value changes.
- [implementorValueProvider](implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.
- [implementorStringFromValueCallback](implementorstringfromvaluecallback.md): The callback for providing a string representation of a parameter value.
- [implementorDisplayNameWithLengthCallback](implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.

# implementorValueFromStringCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback for converting a string to a parameter value.

## Declaration

```objectivec
@property (nonatomic, copy) AUImplementorValueFromStringCallback implementorValueFromStringCallback;
```

```objectivec
@property (atomic, copy) AUImplementorValueFromStringCallback implementorValueFromStringCallback;
```

## See Also

### Audio Unit Implementations

- [implementorValueObserver](implementorvalueobserver.md): The callback for parameter value changes.
- [implementorValueProvider](implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.
- [implementorStringFromValueCallback](implementorstringfromvaluecallback.md): The callback for providing a string representation of a parameter value.
- [implementorDisplayNameWithLengthCallback](implementordisplaynamewithlengthcallback.md): The callback for obtaining an abbreviated version of a parameter node display name.
