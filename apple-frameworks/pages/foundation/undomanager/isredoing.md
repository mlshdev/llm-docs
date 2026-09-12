> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/isredoing](https://developer.apple.com/documentation/foundation/undomanager/isredoing)

# isRedoing (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the manager is in the process of performing a redo action.

## Declaration

```swift
var isRedoing: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the manager is performing its [redo()](redo%28%29.md) method, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Checking whether undo or redo is in process

- [isUndoing](isundoing.md): Returns a Boolean value that indicates whether the manager is in the process of performing an undo action.

# redoing (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the manager is in the process of performing a redo action.

## Declaration

```objectivec
@property (readonly, getter=isRedoing) BOOL redoing;
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the manager is performing its [redo](redo%28%29.md) method, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Checking whether undo or redo is in process

- [undoing](isundoing.md): Returns a Boolean value that indicates whether the manager is in the process of performing an undo action.
