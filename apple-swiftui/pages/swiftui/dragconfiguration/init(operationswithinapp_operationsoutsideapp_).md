> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/dragconfiguration/init(operationswithinapp:operationsoutsideapp:)

# init(operationsWithinApp:operationsOutsideApp:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a default drag configuration with operation `.copy` support for drags within the application and to other applications.

## Declaration

```swift
init(operationsWithinApp: DragConfiguration.OperationsWithinApp = .init(), operationsOutsideApp: DragConfiguration.OperationsOutsideApp = .init())
```
