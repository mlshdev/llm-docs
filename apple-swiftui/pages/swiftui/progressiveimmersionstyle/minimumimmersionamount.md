> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressiveimmersionstyle/minimumimmersionamount](https://developer.apple.com/documentation/swiftui/progressiveimmersionstyle/minimumimmersionamount)

# minimumImmersionAmount

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 2.0+

The minimum amount of immersion used for this instance of the style.

## Declaration

```swift
let minimumImmersionAmount: Double?
```

<a id="discussion"></a>

## Discussion

The value represents the minimum amount of the spherical field of view of the user that can be covered by the portal effect of the style. The value can range from `0.0` to `1.0`. If this value is not set, a system default value will be used instead.
