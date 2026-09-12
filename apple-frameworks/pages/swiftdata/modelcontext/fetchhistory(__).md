> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/fetchhistory(_:)](https://developer.apple.com/documentation/swiftdata/modelcontext/fetchhistory(_:))

# fetchHistory(\_:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
func fetchHistory<T>(_ descriptor: HistoryDescriptor<T>) throws -> [T] where T : HistoryTransaction
```
