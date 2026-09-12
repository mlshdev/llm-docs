> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/ignoresdisplayfrequency](https://developer.apple.com/documentation/tipkit/tip/ignoresdisplayfrequency)

# IgnoresDisplayFrequency

**Framework:** TipKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Controls whether a tip obeys the preconfigured display frequency interval.

## Declaration

```swift
typealias IgnoresDisplayFrequency = Tips.IgnoresDisplayFrequency
```

<a id="Overview"></a>

## Overview

Use this option to allow a tip to appear even if the [displayFrequency(\_:)](../tips/configurationoption/displayfrequency%28__%29.md) has not been satisfied.

The default value of this option is false.

```swift
struct FavoriteBackyardTip: Tip {
    var options: [any Option] {
        IgnoresDisplayFrequency(true)
    }
}
```

## See Also

### Customizing tip behavior

- [options](options.md): Customizations for a tip.
- [Option](option.md): A type that represents the various customizations that you can make to a tip’s behavior.
- [MaxDisplayCount](maxdisplaycount.md): Specifies the maximum number of times a tip displays before the system automatically invalidates it.
- [MaxDisplayDuration](maxdisplayduration.md): Specifies the maximum amount of time a tip is displayed before it is invalidated.
