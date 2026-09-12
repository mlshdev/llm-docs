> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewmodifier/transaction(_:)](https://developer.apple.com/documentation/swiftui/viewmodifier/transaction(_:))

# transaction(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new version of the modifier that will apply the transaction mutation function `transform` to all transactions within the modifier.

## Declaration

```swift
nonisolated func transaction(_ transform: @escaping (inout Transaction) -> Void) -> some ViewModifier

```
