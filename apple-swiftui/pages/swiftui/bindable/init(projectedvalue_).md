> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/bindable/init(projectedvalue:)](https://developer.apple.com/documentation/swiftui/bindable/init(projectedvalue:))

# init(projectedValue:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a bindable from the value of another bindable.

## Declaration

```swift
init(projectedValue: Bindable<Value>)
```

## See Also

### Creating a bindable value

- [init(\_:)](init%28__%29.md): Conforms when `Value` conforms to `Observable`. Creates a bindable object from an observable object.
- [init(wrappedValue:)](init%28wrappedvalue_%29.md): Conforms when `Value` conforms to `Observable`. Creates a bindable object from an observable object.
