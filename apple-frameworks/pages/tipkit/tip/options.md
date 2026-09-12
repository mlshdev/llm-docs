> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/options](https://developer.apple.com/documentation/tipkit/tip/options)

# options

**Framework:** TipKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Customizations for a tip.

## Declaration

```swift
@Tips.OptionsBuilder var options: [any TipOption] { get }
```

## See Also

### Customizing tip behavior

- [Option](option.md): A type that represents the various customizations that you can make to a tip’s behavior.
- [IgnoresDisplayFrequency](ignoresdisplayfrequency.md): Controls whether a tip obeys the preconfigured display frequency interval.
- [MaxDisplayCount](maxdisplaycount.md): Specifies the maximum number of times a tip displays before the system automatically invalidates it.
- [MaxDisplayDuration](maxdisplayduration.md): Specifies the maximum amount of time a tip is displayed before it is invalidated.
