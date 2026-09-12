> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbusarray/addobserver(toallbusses:forkeypath:options:context:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbusarray/addobserver(toallbusses:forkeypath:options:context:))

# addObserver(toAllBusses:forKeyPath:options:context:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a KVO observer for a given property on all busses in the array.

## Declaration

```swift
func addObserver(toAllBusses observer: NSObject, forKeyPath keyPath: String, options: NSKeyValueObservingOptions = [], context: UnsafeMutableRawPointer?)
```

## Parameters

- `observer`: The KVO observer.
- `keyPath`: The property’s key path.
- `options`: The KVO options.
- `context`: The KVO context.

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [isCountChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [busType](bustype.md): Determines whether the bus array is for input or output.
- [subscript(\_:)](subscript%28__%29.md): Returns the bus at the specified index.
- [setBusCount(\_:)](setbuscount%28__%29.md): Changes the number of busses in the array.
- [removeObserver(fromAllBusses:forKeyPath:context:)](removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.

# addObserverToAllBusses:forKeyPath:options:context: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a KVO observer for a given property on all busses in the array.

## Declaration

```objectivec
- (void) addObserverToAllBusses:(NSObject *) observer forKeyPath:(NSString *) keyPath options:(NSKeyValueObservingOptions) options context:(void *) context;
```

## Parameters

- `observer`: The KVO observer.
- `keyPath`: The property’s key path.
- `options`: The KVO options.
- `context`: The KVO context.

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [countChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [busType](bustype.md): Determines whether the bus array is for input or output.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the bus at the specified index.
- [setBusCount:error:](setbuscount%28__%29.md): Changes the number of busses in the array.
- [removeObserverFromAllBusses:forKeyPath:context:](removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.
