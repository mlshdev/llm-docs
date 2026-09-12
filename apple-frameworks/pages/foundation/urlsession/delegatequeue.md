> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/delegatequeue](https://developer.apple.com/documentation/foundation/urlsession/delegatequeue)

# delegateQueue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The operation queue provided when this object was created.

## Declaration

```swift
var delegateQueue: OperationQueue { get }
```

## Mentioned In

- [Processing URL session data task results with Combine](../processing-url-session-data-task-results-with-combine.md)

<a id="Discussion"></a>

## Discussion

All delegate method calls and completion handlers related to the session are performed on this queue. The session object keeps a strong reference to this queue until your app exits or the session object is deallocated. If you do not invalidate the session, your app leaks memory until it exits.

> **Note**

>  This queue must be set at object creation time and may not be changed.

## See Also

### Working with a delegate

- [delegate](delegate.md): The delegate assigned when this object was created.
- [URLSessionDelegate](../urlsessiondelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.
- [URLSessionTaskDelegate](../urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.

# delegateQueue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The operation queue provided when this object was created.

## Declaration

```objectivec
@property (retain, readonly) NSOperationQueue * delegateQueue;
```

## Mentioned In

- [Processing URL session data task results with Combine](../processing-url-session-data-task-results-with-combine.md)

<a id="Discussion"></a>

## Discussion

All delegate method calls and completion handlers related to the session are performed on this queue. The session object keeps a strong reference to this queue until your app exits or the session object is deallocated. If you do not invalidate the session, your app leaks memory until it exits.

> **Note**

>  This queue must be set at object creation time and may not be changed.

## See Also

### Working with a delegate

- [delegate](delegate.md): The delegate assigned when this object was created.
- [NSURLSessionDelegate](../urlsessiondelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.
- [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
