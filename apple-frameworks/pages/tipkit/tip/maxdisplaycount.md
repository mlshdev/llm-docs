> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/maxdisplaycount](https://developer.apple.com/documentation/tipkit/tip/maxdisplaycount)

# MaxDisplayCount

**Framework:** TipKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Specifies the maximum number of times a tip displays before the system automatically invalidates it.

## Declaration

```swift
typealias MaxDisplayCount = Tips.MaxDisplayCount
```

<a id="Overview"></a>

## Overview

Use this option to automatically invalidate a tip after it has appeared a specified number of times.

By default tips have no maximum display count.

```swift
struct FavoriteBackyardTip: Tip {
    var options: [any Option] {
        // Tip will only appear 3 times before it is automatically invalidated.
        MaxDisplayCount(3)
    }
}
```

## See Also

### Customizing tip behavior

- [options](options.md): Customizations for a tip.
- [Option](option.md): A type that represents the various customizations that you can make to a tip’s behavior.
- [IgnoresDisplayFrequency](ignoresdisplayfrequency.md): Controls whether a tip obeys the preconfigured display frequency interval.
- [MaxDisplayDuration](maxdisplayduration.md): Specifies the maximum amount of time a tip is displayed before it is invalidated.
