> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbusarray/init(audiounit:bustype:busses:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbusarray/init(audiounit:bustype:busses:))

# init(audioUnit:busType:busses:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a bus array by making a copy of the supplied busses.

## Declaration

```swift
init(audioUnit owner: AUAudioUnit, busType: AUAudioUnitBusType, busses busArray: [AUAudioUnitBus])
```

## Parameters

- `owner`: The audio unit that owns the bus array.
- `busType`: Determines whether the busses are for input or output.
- `busArray`: An array of busses.

<a id="return-value"></a>

## Return Value

A newly-initialized bus array.

## See Also

### Initialization

- [init(audioUnit:busType:)](init%28audiounit_bustype_%29.md): Initializes an empty bus array.

# initWithAudioUnit:busType:busses: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a bus array by making a copy of the supplied busses.

## Declaration

```objectivec
- (instancetype) initWithAudioUnit:(AUAudioUnit *) owner busType:(AUAudioUnitBusType) busType busses:(NSArray<AUAudioUnitBus *> *) busArray;
```

## Parameters

- `owner`: The audio unit that owns the bus array.
- `busType`: Determines whether the busses are for input or output.
- `busArray`: An array of busses.

<a id="return-value"></a>

## Return Value

A newly-initialized bus array.

## See Also

### Initialization

- [initWithAudioUnit:busType:](init%28audiounit_bustype_%29.md): Initializes an empty bus array.
