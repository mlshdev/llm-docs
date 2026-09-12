> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/result/change/flags](https://developer.apple.com/documentation/network/nwbrowser/result/change/flags)

# NWBrowser.Result.Change.Flags

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Flags providing details about a change in a discovered service.

## Declaration

```swift
struct Flags
```

## Topics

### Change Flags

- [identical](flags/identical.md): The results are identical.
- [interfaceAdded](flags/interfaceadded.md): The service was discovered over a new interface.
- [interfaceRemoved](flags/interfaceremoved.md): The service was no longer discovered over a certain interface.
- [metadataChanged](flags/metadatachanged.md): The service’s associated metadata changed.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Inspecting Change Types

- [NWBrowser.Result.Change.identical](identical.md): No change was detected for the result.
- [NWBrowser.Result.Change.added(\_:)](added%28__%29.md): A new result was discovered.
- [NWBrowser.Result.Change.removed(\_:)](removed%28__%29.md): A previously discovered result was removed.
- [NWBrowser.Result.Change.changed(old:new:flags:)](changed%28old_new_flags_%29.md): A result changed properties but was not removed.
