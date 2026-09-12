> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollposition/viewid(type:)](https://developer.apple.com/documentation/swiftui/scrollposition/viewid(type:))

# viewID(type:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The id of the view positioned in the scroll view if configured to be in that position or the user has scrolled past a view with an id of matching type.

## Declaration

```swift
func viewID<T>(type: T.Type) -> T? where T : Hashable, T : Sendable
```
