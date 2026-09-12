> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/query/init(filter:sort:order:transaction:sectionby:)-8finq](https://developer.apple.com/documentation/swiftdata/query/init(filter:sort:order:transaction:sectionby:)-8finq)

# init(filter:sort:order:transaction:sectionBy:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a sectioned query sorted by a key path, grouped into sections by a required String key path.

## Declaration

```swift
@MainActor @preconcurrency init<Value>(filter: Predicate<Element>? = nil, sort keyPath: KeyPath<Element, Value>, order: SortOrder = .forward, transaction: Transaction? = nil, sectionBy sectionKeyPath: KeyPath<Element, String>) where Result == SectionedResults<Element, String>, Value : Comparable
```
