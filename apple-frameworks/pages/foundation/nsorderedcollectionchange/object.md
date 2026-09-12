> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectionchange/object](https://developer.apple.com/documentation/foundation/nsorderedcollectionchange/object)

# object (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object the change inserts or removes.

## Declaration

```swift
var object: Any? { get }
```

## See Also

### Accessing the Change

- [changeType](changetype.md): The type of change.
- [index](index.md): The index location of the change.
- [associatedIndex](associatedindex.md): When this property is set to a value other than [NSNotFound](../nsnotfound-9t5v2.md), the receiver is one half of a move, and this value is the index of the change’s counterpart of the opposite type in the diff.

# object (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object the change inserts or removes.

## Declaration

```objectivec
@property (strong, readonly, nullable) ObjectType object;
```

## See Also

### Accessing the Change

- [changeType](changetype.md): The type of change.
- [index](index.md): The index location of the change.
- [associatedIndex](associatedindex.md): When this property is set to a value other than [NSNotFound](../nsnotfound-9t5v2.md), the receiver is one half of a move, and this value is the index of the change’s counterpart of the opposite type in the diff.
