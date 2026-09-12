> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbusarray/init(audiounit:bustype:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbusarray/init(audiounit:bustype:))

# init(audioUnit:busType:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an empty bus array.

## Declaration

```swift
convenience init(audioUnit owner: AUAudioUnit, busType: AUAudioUnitBusType)
```

## Parameters

- `owner`: The audio unit that owns the bus array.
- `busType`: Determines whether the bus array is for input or output.

<a id="return-value"></a>

## Return Value

A newly-initialized bus array.

## See Also

### Initialization

- [init(audioUnit:busType:busses:)](init%28audiounit_bustype_busses_%29.md): Initializes a bus array by making a copy of the supplied busses.

# initWithAudioUnit:busType: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an empty bus array.

## Declaration

```objectivec
- (instancetype) initWithAudioUnit:(AUAudioUnit *) owner busType:(AUAudioUnitBusType) busType;
```

## Parameters

- `owner`: The audio unit that owns the bus array.
- `busType`: Determines whether the bus array is for input or output.

<a id="return-value"></a>

## Return Value

A newly-initialized bus array.

## See Also

### Initialization

- [initWithAudioUnit:busType:busses:](init%28audiounit_bustype_busses_%29.md): Initializes a bus array by making a copy of the supplied busses.
