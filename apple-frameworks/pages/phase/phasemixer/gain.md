> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemixer/gain](https://developer.apple.com/documentation/phase/phasemixer/gain)

# gain (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The mixer’s volume.

## Declaration

```swift
var gain: Double { get }
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value to the range between `0` and `1`, where `0` silences the mixer’s volume and `1` doesn’t modify the volume.

## See Also

### Adjusting Volume

- [gainMetaParameter](gainmetaparameter.md): A parameter that changes the mixer’s volume gradually over a period of time.

# gain (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The mixer’s volume.

## Declaration

```objectivec
@property (nonatomic, readonly) double gain;
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value to the range between `0` and `1`, where `0` silences the mixer’s volume and `1` doesn’t modify the volume.

## See Also

### Adjusting Volume

- [gainMetaParameter](gainmetaparameter.md): A parameter that changes the mixer’s volume gradually over a period of time.
