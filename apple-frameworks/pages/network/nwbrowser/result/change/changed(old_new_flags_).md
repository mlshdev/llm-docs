> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/result/change/changed(old:new:flags:)](https://developer.apple.com/documentation/network/nwbrowser/result/change/changed(old:new:flags:))

# NWBrowser.Result.Change.changed(old:new:flags:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A result changed properties but was not removed.

## Declaration

```swift
case changed(old: NWBrowser.Result, new: NWBrowser.Result, flags: NWBrowser.Result.Change.Flags)
```

## See Also

### Inspecting Change Types

- [NWBrowser.Result.Change.identical](identical.md): No change was detected for the result.
- [NWBrowser.Result.Change.added(\_:)](added%28__%29.md): A new result was discovered.
- [NWBrowser.Result.Change.removed(\_:)](removed%28__%29.md): A previously discovered result was removed.
- [NWBrowser.Result.Change.Flags](flags.md): Flags providing details about a change in a discovered service.
