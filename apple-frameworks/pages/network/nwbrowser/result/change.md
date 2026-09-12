> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/result/change](https://developer.apple.com/documentation/network/nwbrowser/result/change)

# NWBrowser.Result.Change

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Ways in which discovered services can change between specific results.

## Declaration

```swift
enum Change
```

## Topics

### Inspecting Change Types

- [NWBrowser.Result.Change.identical](change/identical.md): No change was detected for the result.
- [NWBrowser.Result.Change.added(\_:)](change/added%28__%29.md): A new result was discovered.
- [NWBrowser.Result.Change.removed(\_:)](change/removed%28__%29.md): A previously discovered result was removed.
- [NWBrowser.Result.Change.changed(old:new:flags:)](change/changed%28old_new_flags_%29.md): A result changed properties but was not removed.
- [NWBrowser.Result.Change.Flags](change/flags.md): Flags providing details about a change in a discovered service.

### Calculating Result Changes

- [init(between:\_:)](change/init%28between___%29.md): Initializes a change between two results.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
