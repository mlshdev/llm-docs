> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkapplicationdelegateadaptor/projectedvalue](https://developer.apple.com/documentation/swiftui/wkapplicationdelegateadaptor/projectedvalue)

# projectedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A projection of the observed object that creates bindings to its properties using dynamic member lookup.

## Declaration

```swift
@MainActor @preconcurrency var projectedValue: ObservedObject<DelegateType>.Wrapper { get }
```

<a id="discussion"></a>

## Discussion

Use the projected value to pass a binding value down a view hierarchy. To get the `projectedValue`, prefix the property variable with `$`.

## See Also

### Getting the delegate adaptor

- [wrappedValue](wrappedvalue.md): The underlying delegate.
