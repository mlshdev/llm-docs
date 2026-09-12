> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxaction/iscomplete](https://developer.apple.com/documentation/callkit/cxaction/iscomplete)

# isComplete (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the action has been performed by the provider.

## Declaration

```swift
var isComplete: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is initialized to [false](https://developer.apple.com/documentation/swift/false), and is set to [true](https://developer.apple.com/documentation/swift/true) when either the [fulfill()](fulfill%28%29.md) or [fail()](fail%28%29.md) method is called.

<a id="See-also"></a>

## See also

<a id="Related-Documentation"></a>

### Related Documentation

- [fulfill()](fulfill%28%29.md)
- [fail()](fail%28%29.md)

## See Also

### Accessing Action Attributes

- [uuid](uuid.md): The unique identifier for the action.
- [timeoutDate](timeoutdate.md): The time after which the action cannot be completed.

# complete (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the action has been performed by the provider.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isComplete) BOOL complete;
```

<a id="Discussion"></a>

## Discussion

This property is initialized to [false](https://developer.apple.com/documentation/swift/false), and is set to [true](https://developer.apple.com/documentation/swift/true) when either the [fulfill](fulfill%28%29.md) or [fail](fail%28%29.md) method is called.

<a id="See-also"></a>

## See also

<a id="Related-Documentation"></a>

### Related Documentation

- [fulfill](fulfill%28%29.md)
- [fail](fail%28%29.md)

## See Also

### Accessing Action Attributes

- [UUID](uuid.md): The unique identifier for the action.
- [timeoutDate](timeoutdate.md): The time after which the action cannot be completed.
