> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekobject/haschanges](https://developer.apple.com/documentation/eventkit/ekobject/haschanges)

# hasChanges (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

Returns whether this object or any of the objects it contains has uncommitted changes.

## Declaration

```swift
var hasChanges: Bool { get }
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if there are uncommitted changes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Saving and Restoring State

- [isNew](isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [refresh()](refresh%28%29.md): Merges changes to this object with the latest saved values.
- [reset()](reset%28%29.md): Returns this object to its saved state.
- [rollback()](rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.

# hasChanges (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

Returns whether this object or any of the objects it contains has uncommitted changes.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasChanges;
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if there are uncommitted changes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Saving and Restoring State

- [new](isnew.md): A Boolean value that indicates whether this object has ever been saved.
- [refresh](refresh%28%29.md): Merges changes to this object with the latest saved values.
- [reset](reset%28%29.md): Returns this object to its saved state.
- [rollback](rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.
