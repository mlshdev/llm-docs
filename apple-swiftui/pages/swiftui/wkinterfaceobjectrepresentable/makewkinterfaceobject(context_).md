> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkinterfaceobjectrepresentable/makewkinterfaceobject(context:)](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable/makewkinterfaceobject(context:))

# makeWKInterfaceObject(context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Creates a WatchKit interface object and configures its initial state.

## Declaration

```swift
@MainActor @preconcurrency func makeWKInterfaceObject(context: Self.Context) -> Self.WKInterfaceObjectType
```

## Parameters

- `context`: A context structure containing information about the current state of the system.

<a id="return-value"></a>

## Return Value

Your interface object configured with the provided information.

<a id="discussion"></a>

## Discussion

You must implement this method and use it to create your interface object. Configure the object using your app’s current data and contents of the `context` parameter. The system calls this method only once, when it creates your interface object for the first time. For all subsequent updates, the system calls the [updateWKInterfaceObject(\_:context:)](updatewkinterfaceobject%28__context_%29.md) method.

## See Also

### Creating and updating the interface object

- [updateWKInterfaceObject(\_:context:)](updatewkinterfaceobject%28__context_%29.md): Updates the presented WatchKit interface object (and its coordinator) to the latest configuration.
- [WKInterfaceObjectRepresentable.Context](context.md)
