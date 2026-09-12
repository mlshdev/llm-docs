> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/matchedtransitionsourceconfiguration/background(_:)](https://developer.apple.com/documentation/swiftui/matchedtransitionsourceconfiguration/background(_:))

# background(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies a color that will be drawn behind the content within the matched transition source.

## Declaration

```swift
func background(_ style: Color) -> some MatchedTransitionSourceConfiguration

```

## Parameters

- `style`: The color to apply behind the content within the matched transition source..

<a id="discussion"></a>

## Discussion

During a zoom transition, the background color fills the interpolated shape as it groes from the matched transition source.
