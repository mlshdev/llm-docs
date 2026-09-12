> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/inputbusses](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/inputbusses)

# inputBusses (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array containing the audio unit’s input connection points.

## Declaration

```swift
var inputBusses: AUAudioUnitBusArray { get }
```

<a id="Discussion"></a>

## Discussion

Subclasses must override this property’s getter. The audio unit should return the same object every time it is asked for it, since hosts can install KVO observers on it.

## See Also

### Returning the Audio Busses

- [outputBusses](outputbusses.md): An array containing the audio unit’s output connection points.

# inputBusses (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An array containing the audio unit’s input connection points.

## Declaration

```objectivec
@property (nonatomic, readonly) AUAudioUnitBusArray * inputBusses;
```

```objectivec
@property (atomic, readonly) AUAudioUnitBusArray * inputBusses;
```

<a id="Discussion"></a>

## Discussion

Subclasses must override this property’s getter. The audio unit should return the same object every time it is asked for it, since hosts can install KVO observers on it.

## See Also

### Returning the Audio Busses

- [outputBusses](outputbusses.md): An array containing the audio unit’s output connection points.
