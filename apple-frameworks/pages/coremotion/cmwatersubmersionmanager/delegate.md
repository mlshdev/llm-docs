> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanager/delegate

# delegate (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

The object that receives updates about submersion data and events.

## Declaration

```swift
weak var delegate: (any CMWaterSubmersionManagerDelegate)? { get set }
```

# delegate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The object that receives updates about submersion data and events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CMWaterSubmersionManagerDelegate> delegate;
```
