> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/sortdescriptor/init(_:order:)-4doe9](https://developer.apple.com/documentation/foundation/sortdescriptor/init(_:order:)-4doe9)

# init(\_:order:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
init<Value>(_ keyPath: any KeyPath<Compared, Value> & Sendable, order: SortOrder = .forward) where Value : Comparable
```
