> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbusarray/setbuscount(_:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbusarray/setbuscount(_:))

# setBusCount(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Changes the number of busses in the array.

## Declaration

```swift
func setBusCount(_ count: Int) throws
```

## Parameters

- `count`: The new number of busses in the array.

<a id="discussion"></a>

## Discussion

- [false](https://developer.apple.com/documentation/swift/false) if the operation failed.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [isCountChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [busType](bustype.md): Determines whether the bus array is for input or output.
- [subscript(\_:)](subscript%28__%29.md): Returns the bus at the specified index.
- [addObserver(toAllBusses:forKeyPath:options:context:)](addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.
- [removeObserver(fromAllBusses:forKeyPath:context:)](removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.

# setBusCount:error: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Changes the number of busses in the array.

## Declaration

```objectivec
- (BOOL) setBusCount:(NSUInteger) count error:(NSError **) outError;
```

## Parameters

- `count`: The new number of busses in the array.
- `outError`: Returns an error if the operation failed, or `nil` if it succeeded.

<a id="return-value"></a>

## Return Value

\- [true](https://developer.apple.com/documentation/swift/true) if the operation succeeded.

<a id="discussion"></a>

## Discussion

- [false](https://developer.apple.com/documentation/swift/false) if the operation failed.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Bus Array Methods and Properties

- [count](count.md): The number of busses in the array.
- [countChangeable](iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus array.
- [busType](bustype.md): Determines whether the bus array is for input or output.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the bus at the specified index.
- [addObserverToAllBusses:forKeyPath:options:context:](addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.
- [removeObserverFromAllBusses:forKeyPath:context:](removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.
