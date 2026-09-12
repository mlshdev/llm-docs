> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/bindable/init(wrappedvalue:)](https://developer.apple.com/documentation/swiftui/bindable/init(wrappedvalue:))

# init(wrappedValue:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a bindable object from an observable object.

## Declaration

```swift
init(wrappedValue: Value)
```

<a id="discussion"></a>

## Discussion

You should not call this initializer directly. Instead, declare a property with the `@Bindable` attribute, and provide an initial value.

## See Also

### Creating a bindable value

- [init(\_:)](init%28__%29.md): Conforms when `Value` conforms to `Observable`. Creates a bindable object from an observable object.
- [init(projectedValue:)](init%28projectedvalue_%29.md): Conforms when `Value` conforms to `Observable`. Creates a bindable from the value of another bindable.
