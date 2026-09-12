> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrsetmessagereliabilityparameters(_:_:_:_:)](https://developer.apple.com/documentation/matter/mtrsetmessagereliabilityparameters(_:_:_:_:))

# MTRSetMessageReliabilityParameters(\_:\_:\_:\_:) (Swift)

**Framework:** Matter  
**Kind:** Function  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func MTRSetMessageReliabilityParameters(_ idleRetransmitMs: NSNumber?, _ activeRetransmitMs: NSNumber?, _ activeThresholdMs: NSNumber?, _ additionalRetransmitDelayMs: NSNumber?)
```

# MTRSetMessageReliabilityParameters (Objective-C)

**Framework:** Matter  
**Kind:** Function  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
extern void MTRSetMessageReliabilityParameters(NSNumber *idleRetransmitMs, NSNumber *activeRetransmitMs, NSNumber *activeThresholdMs, NSNumber *additionalRetransmitDelayMs);
```
