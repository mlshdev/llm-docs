> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/bindable/subscript(dynamicmember:)](https://developer.apple.com/documentation/swiftui/bindable/subscript(dynamicmember:))

# subscript(dynamicMember:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a binding to the value of a given key path.

## Declaration

```swift
subscript<Subject>(dynamicMember keyPath: ReferenceWritableKeyPath<Value, Subject>) -> Binding<Subject> { get }
```

## See Also

### Getting the value

- [wrappedValue](wrappedvalue.md): The wrapped object.
- [projectedValue](projectedvalue.md): The bindable wrapper for the object that creates bindings to its properties using dynamic member lookup.
