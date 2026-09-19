> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsxpcinterface/setxpctype(_:for:argumentindex:ofreply:)

# setXPCType(\_:for:argumentIndex:ofReply:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func setXPCType(_ type: xpc_type_t, for sel: Selector, argumentIndex arg: Int, ofReply: Bool)
```

# setXPCType:forSelector:argumentIndex:ofReply: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
- (void) setXPCType:(xpc_type_t) type forSelector:(SEL) sel argumentIndex:(NSUInteger) arg ofReply:(BOOL) ofReply;
```
