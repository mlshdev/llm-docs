> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/sortdescriptor/init(_:order:)-52see](https://developer.apple.com/documentation/foundation/sortdescriptor/init(_:order:)-52see)

# init(\_:order:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
init(_ keyPath: any KeyPath<Compared, UInt64> & Sendable, order: SortOrder = .forward) where Compared : NSObject
```
