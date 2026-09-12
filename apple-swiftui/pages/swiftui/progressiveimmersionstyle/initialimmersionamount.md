> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressiveimmersionstyle/initialimmersionamount](https://developer.apple.com/documentation/swiftui/progressiveimmersionstyle/initialimmersionamount)

# initialImmersionAmount

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 2.0+

The initial amount of immersion used for this instance of the style.

## Declaration

```swift
let initialImmersionAmount: Double?
```

<a id="discussion"></a>

## Discussion

The value represents how much of the spherical field of view of the user is covered by the portal effect of the style initially. The value can range from `0.0` to `1.0`, and is capped by the minimum and maximum amount of immersion of this instance. If this value is not set, a system default value will be used instead.
