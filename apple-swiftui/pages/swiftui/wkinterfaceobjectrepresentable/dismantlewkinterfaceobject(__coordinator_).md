> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkinterfaceobjectrepresentable/dismantlewkinterfaceobject(_:coordinator:)](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable/dismantlewkinterfaceobject(_:coordinator:))

# dismantleWKInterfaceObject(\_:coordinator:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** watchOS 6.0+

Cleans up the presented WatchKit interface object (and its coordinator) in anticipation of their removal.

## Declaration

```swift
@MainActor @preconcurrency static func dismantleWKInterfaceObject(_ wkInterfaceObject: Self.WKInterfaceObjectType, coordinator: Self.Coordinator)
```

## Parameters

- `wkInterfaceObject`: Your custom interface object.
- `coordinator`: The custom coordinator instance you use to communicate changes back to SwiftUI. If you do not use a custom coordinator, the system provides a default instance.

<a id="discussion"></a>

## Discussion

Use this method to perform additional clean-up work related to your custom interface object. For example, you might use this method to remove observers or update other parts of your SwiftUI interface.

## Default Implementations

### WKInterfaceObjectRepresentable Implementations

- [dismantleWKInterfaceObject(\_:coordinator:)](dismantlewkinterfaceobject%28__coordinator_%29-qd0y.md): Cleans up the presented interface object (and coordinator) in anticipation of their removal.
