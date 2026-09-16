> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/gesturestategesture/body

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The updating gesture containing the originating gesture’s value, the updated state of the gesture, and a transaction.

## Declaration

```swift
var body: (GestureStateGesture<Base, State>.Value, inout State, inout Transaction) -> Void
```
