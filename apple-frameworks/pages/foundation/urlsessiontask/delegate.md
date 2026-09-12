> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/delegate](https://developer.apple.com/documentation/foundation/urlsessiontask/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A delegate specific to the task.

## Declaration

```swift
var delegate: (any URLSessionTaskDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

This task-specific delegate receives messages from the task before the session’s [delegate](../urlsession/delegate.md) receives them. This is similar to the behavior of the `delegate` parameter used by the asychronous methods in [URLSession](../urlsession.md) like [bytes(for:delegate:)](../urlsession/bytes%28for_delegate_%29.md) and [data(for:delegate:)](../urlsession/data%28for_delegate_%29.md).

## See Also

### Using a task-specific delegate

- [URLSessionTaskDelegate](../urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A delegate specific to the task.

## Declaration

```objectivec
@property (retain, nullable) id<NSURLSessionTaskDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

This task-specific delegate receives messages from the task before the session’s [delegate](../urlsession/delegate.md) receives them. This is similar to the behavior of the `delegate` parameter used by the asychronous methods in [NSURLSession](../urlsession.md) like [bytes(for:delegate:)](../urlsession/bytes%28for_delegate_%29.md) and [data(for:delegate:)](../urlsession/data%28for_delegate_%29.md).

## See Also

### Using a task-specific delegate

- [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
