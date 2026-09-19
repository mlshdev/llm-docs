> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nskeyvaluesharedobservers/snapshot()

# snapshot() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A momentary snapshot of all observers added to the collection thus far, that can be assigned to an observable using `-[NSObject setSharedObservers:]`

## Declaration

```swift
func snapshot() -> NSKeyValueSharedObserversSnapshot
```

# snapshot (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A momentary snapshot of all observers added to the collection thus far, that can be assigned to an observable using `-[NSObject setSharedObservers:]`

## Declaration

```objectivec
- (NSKeyValueSharedObserversSnapshot *) snapshot;
```
