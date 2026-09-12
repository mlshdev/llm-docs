> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbusarray/removeobserver(fromallbusses:forkeypath:context:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbusarray/removeobserver(fromallbusses:forkeypath:context:))

# removeObserver(fromAllBusses:forKeyPath:context:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes a KVO observer for a given property on all busses in the array.

## Declaration

```swift
func removeObserver(fromAllBusses observer: NSObject, forKeyPath keyPath: String, context: UnsafeMutableRawPointer?)
```

## Parameters

- `observer`: The KVO observer.
- `keyPath`: The property’s key path.
- `context`: The KVO context.

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [isCountChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [busType](bustype.md): Determines whether the bus array is for input or output.
- [subscript(\_:)](subscript%28__%29.md): Returns the bus at the specified index.
- [setBusCount(\_:)](setbuscount%28__%29.md): Changes the number of busses in the array.
- [addObserver(toAllBusses:forKeyPath:options:context:)](addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.

# removeObserverFromAllBusses:forKeyPath:context: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes a KVO observer for a given property on all busses in the array.

## Declaration

```objectivec
- (void) removeObserverFromAllBusses:(NSObject *) observer forKeyPath:(NSString *) keyPath context:(void *) context;
```

## Parameters

- `observer`: The KVO observer.
- `keyPath`: The property’s key path.
- `context`: The KVO context.

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [countChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [busType](bustype.md): Determines whether the bus array is for input or output.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the bus at the specified index.
- [setBusCount:error:](setbuscount%28__%29.md): Changes the number of busses in the array.
- [addObserverToAllBusses:forKeyPath:options:context:](addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.
