> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcall/isequaltocall:](https://developer.apple.com/documentation/callkit/cxcall/isequaltocall:)

# isEqualToCall:

**Interface language:** Objective-C

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether a given call is equal to the receiver.

## Declaration

```objectivec
- (BOOL) isEqualToCall:(CXCall *) call;
```

## Parameters

- `call`: The call with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `call` is equal to the receiver, otherwise [false](https://developer.apple.com/documentation/swift/false).
