> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbusarray/subscript(_:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbusarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the bus at the specified index.

## Declaration

```swift
subscript(index: Int) -> AUAudioUnitBus { get }
```

## Parameters

- `index`: An index corresponding to a bus in the array.

<a id="return-value"></a>

## Return Value

The bus located at the specified index.

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [isCountChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [busType](bustype.md): Determines whether the bus array is for input or output.
- [setBusCount(\_:)](setbuscount%28__%29.md): Changes the number of busses in the array.
- [addObserver(toAllBusses:forKeyPath:options:context:)](addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.
- [removeObserver(fromAllBusses:forKeyPath:context:)](removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the bus at the specified index.

## Declaration

```objectivec
- (AUAudioUnitBus *) objectAtIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `index`: An index corresponding to a bus in the array.

<a id="return-value"></a>

## Return Value

The bus located at the specified index.

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [countChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [busType](bustype.md): Determines whether the bus array is for input or output.
- [setBusCount:error:](setbuscount%28__%29.md): Changes the number of busses in the array.
- [addObserverToAllBusses:forKeyPath:options:context:](addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.
- [removeObserverFromAllBusses:forKeyPath:context:](removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.
