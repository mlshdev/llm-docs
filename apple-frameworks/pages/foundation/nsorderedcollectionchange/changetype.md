> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectionchange/changetype](https://developer.apple.com/documentation/foundation/nsorderedcollectionchange/changetype)

# changeType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of change.

## Declaration

```swift
var changeType: NSCollectionChangeType { get }
```

## See Also

### Accessing the Change

- [index](index.md): The index location of the change.
- [object](object.md): An object the change inserts or removes.
- [associatedIndex](associatedindex.md): When this property is set to a value other than [NSNotFound](../nsnotfound-9t5v2.md), the receiver is one half of a move, and this value is the index of the change’s counterpart of the opposite type in the diff.

# changeType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of change.

## Declaration

```objectivec
@property (readonly) NSCollectionChangeType changeType;
```

## See Also

### Accessing the Change

- [index](index.md): The index location of the change.
- [object](object.md): An object the change inserts or removes.
- [associatedIndex](associatedindex.md): When this property is set to a value other than [NSNotFound](../nsnotfound-9t5v2.md), the receiver is one half of a move, and this value is the index of the change’s counterpart of the opposite type in the diff.
