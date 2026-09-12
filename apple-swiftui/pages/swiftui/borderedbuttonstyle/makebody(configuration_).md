> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/borderedbuttonstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/borderedbuttonstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a view that represents the body of a button.

## Declaration

```swift
nonisolated func makeBody(configuration: BorderedButtonStyle.Configuration) -> some View

```

## Parameters

- `configuration`: The properties of the button.

<a id="discussion"></a>

## Discussion

The system calls this method for each [Button](../button.md) instance in a view hierarchy where this style is the current button style.
