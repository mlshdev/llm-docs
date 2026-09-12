> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/groupinglevel](https://developer.apple.com/documentation/foundation/undomanager/groupinglevel)

# groupingLevel (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.

## Declaration

```swift
var groupingLevel: Int { get }
```

<a id="Discussion"></a>

## Discussion

An integer indicating the number of nested groups. If 0 is returned, there is no open undo or redo group.

## See Also

### Related Documentation

- [levelsOfUndo](levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.

### Creating undo groups

- [beginUndoGrouping()](beginundogrouping%28%29.md): Marks the beginning of an undo group.
- [endUndoGrouping()](endundogrouping%28%29.md): Marks the end of an undo group.
- [groupsByEvent](groupsbyevent.md): A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.

# groupingLevel (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.

## Declaration

```objectivec
@property (readonly) NSInteger groupingLevel;
```

<a id="Discussion"></a>

## Discussion

An integer indicating the number of nested groups. If 0 is returned, there is no open undo or redo group.

## See Also

### Related Documentation

- [levelsOfUndo](levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.

### Creating undo groups

- [beginUndoGrouping](beginundogrouping%28%29.md): Marks the beginning of an undo group.
- [endUndoGrouping](endundogrouping%28%29.md): Marks the end of an undo group.
- [groupsByEvent](groupsbyevent.md): A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.
