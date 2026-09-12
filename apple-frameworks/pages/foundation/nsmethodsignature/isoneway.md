> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmethodsignature/isoneway](https://developer.apple.com/documentation/foundation/nsmethodsignature/isoneway)

# isOneway

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Whether the receiver is asynchronous when invoked through distributed objects.

## Declaration

```objectivec
- (BOOL) isOneway;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is asynchronous when invoked through distributed objects, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the method is `oneway`, the sender of the remote message doesn’t block awaiting a reply.
