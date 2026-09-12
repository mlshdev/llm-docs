> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemixerdefinition/gain](https://developer.apple.com/documentation/phase/phasemixerdefinition/gain)

# gain (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The mixer’s volume.

## Declaration

```swift
var gain: Double { get set }
```

<a id="Discussion"></a>

## Discussion

This property modifies the volume of all the mixer’s audio in the output’s final stages. The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` doesn’t modify the audio’s original volume.

## See Also

### Controlling Volume

- [gainMetaParameterDefinition](gainmetaparameterdefinition.md): A template for a parameter that changes the mixer’s volume gradually over a period of time.

# gain (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The mixer’s volume.

## Declaration

```objectivec
@property (nonatomic) double gain;
```

<a id="Discussion"></a>

## Discussion

This property modifies the volume of all the mixer’s audio in the output’s final stages. The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` doesn’t modify the audio’s original volume.

## See Also

### Controlling Volume

- [gainMetaParameterDefinition](gainmetaparameterdefinition.md): A template for a parameter that changes the mixer’s volume gradually over a period of time.
