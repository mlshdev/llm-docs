> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/delegate](https://developer.apple.com/documentation/foundation/urlsession/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate assigned when this object was created.

## Declaration

```swift
var delegate: (any URLSessionDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

This delegate object is responsible for handling authentication challenges, for making caching decisions, and for handling other session-related events. The session object keeps a strong reference to this delegate until your app exits or explicitly invalidates the session. If you do not invalidate the session, your app leaks memory until it exits.

> **Note**

>  This delegate object must be set at object creation time and may not be changed.

## See Also

### Working with a delegate

- [URLSessionDelegate](../urlsessiondelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.
- [URLSessionTaskDelegate](../urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
- [delegateQueue](delegatequeue.md): The operation queue provided when this object was created.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate assigned when this object was created.

## Declaration

```objectivec
@property (retain, readonly, nullable) id<NSURLSessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

This delegate object is responsible for handling authentication challenges, for making caching decisions, and for handling other session-related events. The session object keeps a strong reference to this delegate until your app exits or explicitly invalidates the session. If you do not invalidate the session, your app leaks memory until it exits.

> **Note**

>  This delegate object must be set at object creation time and may not be changed.

## See Also

### Working with a delegate

- [NSURLSessionDelegate](../urlsessiondelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.
- [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
- [delegateQueue](delegatequeue.md): The operation queue provided when this object was created.
