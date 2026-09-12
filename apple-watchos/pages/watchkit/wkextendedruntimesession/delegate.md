> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession/delegate](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession/delegate)

# delegate (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

A delegate object for monitoring the session and responding to state changes and errors.

## Declaration

```swift
weak var delegate: (any WKExtendedRuntimeSessionDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

To receive all the delegate calls, always assign a value to this property before calling the session’s [start()](start%28%29.md) or [start(at:)](start%28at_%29.md) methods.

## See Also

### Creating a Session

- [WKExtendedRuntimeSessionDelegate](../wkextendedruntimesessiondelegate.md): A set of optional methods for monitoring an extended runtime session.

# delegate (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

A delegate object for monitoring the session and responding to state changes and errors.

## Declaration

```objectivec
@property (nonatomic, weak) id<WKExtendedRuntimeSessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

To receive all the delegate calls, always assign a value to this property before calling the session’s [start](start%28%29.md) or [startAtDate:](start%28at_%29.md) methods.

## See Also

### Creating a Session

- [session](session.md): Instantiates a new session object.
- [WKExtendedRuntimeSessionDelegate](../wkextendedruntimesessiondelegate.md): A set of optional methods for monitoring an extended runtime session.
