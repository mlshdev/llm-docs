> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appdependencymanager/add(key:dependency:)-2le3x](https://developer.apple.com/documentation/appintents/appdependencymanager/add(key:dependency:)-2le3x)

# add(key:dependency:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
final func add<Dependency>(key: AnyHashable? = nil, dependency dependencyProvider: @autoclosure @escaping @Sendable () -> Dependency) where Dependency : Sendable
```
