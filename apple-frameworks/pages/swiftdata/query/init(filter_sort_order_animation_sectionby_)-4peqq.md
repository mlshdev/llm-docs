> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/query/init(filter:sort:order:animation:sectionby:)-4peqq

# init(filter:sort:order:animation:sectionBy:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a sectioned query sorted by a key path, grouped by a required optional-String key path. `nil` values share the empty-string section.

## Declaration

```swift
@MainActor @preconcurrency init<Value>(filter: Predicate<Element>? = nil, sort keyPath: KeyPath<Element, Value>, order: SortOrder = .forward, animation: Animation, sectionBy sectionKeyPath: KeyPath<Element, String?>) where Result == SectionedResults<Element, String>, Value : Comparable
```
