> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslog/category](https://developer.apple.com/documentation/os/oslog/category)

# OSLog.Category

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+

System-defined categories that identify well-known parts of your app.

## Declaration

```swift
struct Category
```

## Topics

### Logging Signposts

- [pointsOfInterest](category/pointsofinterest.md): The category you use to log signposts.
- [dynamicStackTracing](category/dynamicstacktracing.md): The category for dynamic stack tracing.
- [dynamicTracing](category/dynamictracing.md): The category for dynamic tracing.

### Inspecting Log Categories

- [rawValue](category/rawvalue.md): A string that uniquely identifies a logging category.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Log

- [init(subsystem:category:)](init%28subsystem_category_%29-17gyy.md): Creates a log using the specified subsystem and category.
- [init(subsystem:category:)](init%28subsystem_category_%29-72ghw.md): Creates a log using the specified subsystem and system-defined category.
