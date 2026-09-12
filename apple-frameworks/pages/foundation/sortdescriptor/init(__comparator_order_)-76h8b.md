> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/sortdescriptor/init(_:comparator:order:)-76h8b](https://developer.apple.com/documentation/foundation/sortdescriptor/init(_:comparator:order:)-76h8b)

# init(\_:comparator:order:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
init(_ keyPath: any KeyPath<Compared, String?> & Sendable, comparator: String.StandardComparator = .localizedStandard, order: SortOrder) where Compared : NSObject
```
