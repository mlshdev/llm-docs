> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/scheduleidentifier

# scheduleIdentifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

The identifier of the daterange-schedule that produced this event. nil if the event was not a product of a daterange-schedule.

## Declaration

```swift
var scheduleIdentifier: String? { get }
```

# scheduleIdentifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

The identifier of the daterange-schedule that produced this event. nil if the event was not a product of a daterange-schedule.

## Declaration

```objectivec
@property (readonly, nullable) NSString * scheduleIdentifier;
```
