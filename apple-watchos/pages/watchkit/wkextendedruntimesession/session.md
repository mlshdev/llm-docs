> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession/session](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession/session)

# session

**Interface language:** Objective-C

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 6.0+

Instantiates a new session object.

## Declaration

```objectivec
+ (WKExtendedRuntimeSession *) session;
```

<a id="Discussion"></a>

## Discussion

The system sets the session’s type based on the Session Type setting in your WatchKit Extension’s Background Modes capability. For more information, see [Set Up the Session](../using-extended-runtime-sessions.md#Set-Up-the-Session).

## See Also

### Creating a Session

- [delegate](delegate.md): A delegate object for monitoring the session and responding to state changes and errors.
- [WKExtendedRuntimeSessionDelegate](../wkextendedruntimesessiondelegate.md): A set of optional methods for monitoring an extended runtime session.
