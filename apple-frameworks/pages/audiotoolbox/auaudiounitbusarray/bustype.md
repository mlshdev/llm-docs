> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbusarray/bustype](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbusarray/bustype)

# busType (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the bus array is for input or output.

## Declaration

```swift
var busType: AUAudioUnitBusType { get }
```

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [isCountChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [subscript(\_:)](subscript%28__%29.md): Returns the bus at the specified index.
- [setBusCount(\_:)](setbuscount%28__%29.md): Changes the number of busses in the array.
- [addObserver(toAllBusses:forKeyPath:options:context:)](addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.
- [removeObserver(fromAllBusses:forKeyPath:context:)](removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.

# busType (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the bus array is for input or output.

## Declaration

```objectivec
@property (nonatomic, readonly) AUAudioUnitBusType busType;
```

```objectivec
@property (atomic, readonly) AUAudioUnitBusType busType;
```

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [countChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the bus at the specified index.
- [setBusCount:error:](setbuscount%28__%29.md): Changes the number of busses in the array.
- [addObserverToAllBusses:forKeyPath:options:context:](addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.
- [removeObserverFromAllBusses:forKeyPath:context:](removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.
