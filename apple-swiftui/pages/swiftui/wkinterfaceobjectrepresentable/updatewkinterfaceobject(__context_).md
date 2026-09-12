> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkinterfaceobjectrepresentable/updatewkinterfaceobject(_:context:)](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable/updatewkinterfaceobject(_:context:))

# updateWKInterfaceObject(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Updates the presented WatchKit interface object (and its coordinator) to the latest configuration.

## Declaration

```swift
@MainActor @preconcurrency func updateWKInterfaceObject(_ wkInterfaceObject: Self.WKInterfaceObjectType, context: Self.Context)
```

## Parameters

- `wkInterfaceObject`: Your custom interface object.
- `context`: A context structure containing information about the current state of the system.

<a id="discussion"></a>

## Discussion

When the state of your app changes, SwiftUI updates the portions of your interface affected by those changes. SwiftUI calls this method for any changes affecting the corresponding interface object. Use this method to update the configuration of your object to match the new state information provided in the `context` parameter.

## See Also

### Creating and updating the interface object

- [makeWKInterfaceObject(context:)](makewkinterfaceobject%28context_%29.md): Creates a WatchKit interface object and configures its initial state.
- [WKInterfaceObjectRepresentable.Context](context.md)
