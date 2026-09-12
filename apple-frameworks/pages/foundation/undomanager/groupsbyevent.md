> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/groupsbyevent](https://developer.apple.com/documentation/foundation/undomanager/groupsbyevent)

# groupsByEvent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.

## Declaration

```swift
var groupsByEvent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the manager automatically creates undo groups around each pass of the run loop, otherwise [false](https://developer.apple.com/documentation/swift/false).

The default is [true](https://developer.apple.com/documentation/swift/true). If you turn automatic grouping off, you must close groups explicitly before invoking either [undo()](undo%28%29.md) or [undoNestedGroup()](undonestedgroup%28%29.md).

## See Also

### Creating undo groups

- [beginUndoGrouping()](beginundogrouping%28%29.md): Marks the beginning of an undo group.
- [endUndoGrouping()](endundogrouping%28%29.md): Marks the end of an undo group.
- [groupingLevel](groupinglevel.md): The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.

# groupsByEvent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.

## Declaration

```objectivec
@property BOOL groupsByEvent;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the manager automatically creates undo groups around each pass of the run loop, otherwise [false](https://developer.apple.com/documentation/swift/false).

The default is [true](https://developer.apple.com/documentation/swift/true). If you turn automatic grouping off, you must close groups explicitly before invoking either [undo](undo%28%29.md) or [undoNestedGroup](undonestedgroup%28%29.md).

## See Also

### Creating undo groups

- [beginUndoGrouping](beginundogrouping%28%29.md): Marks the beginning of an undo group.
- [endUndoGrouping](endundogrouping%28%29.md): Marks the end of an undo group.
- [groupingLevel](groupinglevel.md): The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.
