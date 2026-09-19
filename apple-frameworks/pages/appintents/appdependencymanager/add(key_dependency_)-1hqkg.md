> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/appdependencymanager/add(key:dependency:)-1hqkg

# add(key:dependency:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
final func add<Dependency>(key: AnyHashable? = nil, dependency dependencyProvider: @autoclosure @escaping () -> @Sendable () throws -> Dependency) where Dependency : Sendable
```
