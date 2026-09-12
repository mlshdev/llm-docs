> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutproperties/init()](https://developer.apple.com/documentation/swiftui/layoutproperties/init())

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a default set of properties.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Use a layout properties instance to provide information about a type that conforms to the [Layout](../layout.md) protocol. For example, you can create a layout properties instance in your layout’s implementation of the [layoutProperties](../layout/layoutproperties.md) method, and use it to indicate that the layout has a [Axis.vertical](../axis/vertical.md) orientation:

```swift
extension BasicVStack {
    static var layoutProperties: LayoutProperties {
        var properties = LayoutProperties()
        properties.stackOrientation = .vertical
        return properties
    }
}
```
