> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/decision(before:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/decision(before:))

# decision(before:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The decision that occurs before the given time.

## Declaration

```swift
final func decision(before time: CMTime) -> CNDecision?
```

## Parameters

- `time`: The time representing an existing decision to find the previous decision.

<a id="return-value"></a>

## Return Value

A decision representing the decision that occurs before the given time.
