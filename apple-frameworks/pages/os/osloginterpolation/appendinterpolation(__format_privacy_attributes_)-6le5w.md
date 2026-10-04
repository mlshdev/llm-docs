> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/osloginterpolation/appendinterpolation(_:format:privacy:attributes:)-6le5w

# appendInterpolation(\_:format:privacy:attributes:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

## Declaration

```swift
mutating func appendInterpolation(_ number: @autoclosure @escaping () -> Int, format: OSLogIntExtendedFormat, privacy: OSLogPrivacy = .auto, attributes: String = "")
```
