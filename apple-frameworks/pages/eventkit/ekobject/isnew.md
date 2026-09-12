> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekobject/isnew](https://developer.apple.com/documentation/eventkit/ekobject/isnew)

# isNew (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether this object has ever been saved.

## Declaration

```swift
var isNew: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the object hasn’t been saved; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Saving and Restoring State

- [hasChanges](haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [refresh()](refresh%28%29.md): Merges changes to this object with the latest saved values.
- [reset()](reset%28%29.md): Returns this object to its saved state.
- [rollback()](rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.

# new (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether this object has ever been saved.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isNew) BOOL new;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the object hasn’t been saved; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Saving and Restoring State

- [hasChanges](haschanges.md): Returns whether this object or any of the objects it contains has uncommitted changes.
- [refresh](refresh%28%29.md): Merges changes to this object with the latest saved values.
- [reset](reset%28%29.md): Returns this object to its saved state.
- [rollback](rollback%28%29.md): Rolls back the property values of this object to its original state when it was first fetched.
