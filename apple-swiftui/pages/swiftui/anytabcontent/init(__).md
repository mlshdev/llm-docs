> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anytabcontent/init(_:)](https://developer.apple.com/documentation/swiftui/anytabcontent/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Create an instance that type-erases `tabContent`.

## Declaration

```swift
nonisolated init<T>(_ tabContent: T) where SelectionValue == T.TabValue, T : TabContent
```
