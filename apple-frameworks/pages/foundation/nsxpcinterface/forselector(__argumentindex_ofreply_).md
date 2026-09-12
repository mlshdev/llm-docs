> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcinterface/forselector(_:argumentindex:ofreply:)](https://developer.apple.com/documentation/foundation/nsxpcinterface/forselector(_:argumentindex:ofreply:))

# forSelector(\_:argumentIndex:ofReply:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the interface previously set for the specified selector and parameter.

## Declaration

```swift
func forSelector(_ sel: Selector, argumentIndex arg: Int, ofReply: Bool) -> NSXPCInterface?
```

## Parameters

- `sel`: Specifies which method in the protocol you want information about.
- `arg`: Specifies the position (starting at index 0) of the parameter for which you want to obtain the current interface. This may be either the position of a parameter in the method itself or the position in its reply block.
- `ofReply`: Pass [true](https://developer.apple.com/documentation/swift/true) if `arg` is an index into the parameters of the reply block, or [false](https://developer.apple.com/documentation/swift/false) if it is an index into the parameters of the method itself.

<a id="Discussion"></a>

## Discussion

See [setInterface(\_:for:argumentIndex:ofReply:)](setinterface%28__for_argumentindex_ofreply_%29.md) for more explanation.

# interfaceForSelector:argumentIndex:ofReply: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the interface previously set for the specified selector and parameter.

## Declaration

```objectivec
- (NSXPCInterface *) interfaceForSelector:(SEL) sel argumentIndex:(NSUInteger) arg ofReply:(BOOL) ofReply;
```

## Parameters

- `sel`: Specifies which method in the protocol you want information about.
- `arg`: Specifies the position (starting at index 0) of the parameter for which you want to obtain the current interface. This may be either the position of a parameter in the method itself or the position in its reply block.
- `ofReply`: Pass [true](https://developer.apple.com/documentation/swift/true) if `arg` is an index into the parameters of the reply block, or [false](https://developer.apple.com/documentation/swift/false) if it is an index into the parameters of the method itself.

<a id="Discussion"></a>

## Discussion

See [setInterface:forSelector:argumentIndex:ofReply:](setinterface%28__for_argumentindex_ofreply_%29.md) for more explanation.
