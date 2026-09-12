> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/delegate-c.property](https://developer.apple.com/documentation/foundation/nsconnection/delegate-c.property)

# delegate

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The receiver’s delegate.

## Declaration

```objectivec
@property (assign, nullable) id<NSConnectionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A connection’s delegate can process incoming messages itself instead of letting `NSConnection` object handle them. The delegate can also authenticate messages and accept, deny, or modify new connections.
