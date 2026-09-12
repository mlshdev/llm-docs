> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallobserver/calls](https://developer.apple.com/documentation/callkit/cxcallobserver/calls)

# calls (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the active calls of the telephony provider.

## Declaration

```swift
var calls: [CXCall] { get }
```

# calls (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the active calls of the telephony provider.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CXCall *> * calls;
```
