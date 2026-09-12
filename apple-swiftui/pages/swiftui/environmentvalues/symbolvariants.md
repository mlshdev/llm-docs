> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/symbolvariants](https://developer.apple.com/documentation/swiftui/environmentvalues/symbolvariants)

# symbolVariants

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The symbol variant to use in this environment.

## Declaration

```swift
var symbolVariants: SymbolVariants { get set }
```

<a id="discussion"></a>

## Discussion

You set this environment value indirectly by using the [symbolVariant(\_:)](../view/symbolvariant%28__%29.md) view modifier. However, you access the environment variable directly using the [environment(\_:\_:)](../view/environment%28____%29.md) modifier. Do this when you want to use the [none](../symbolvariants/none.md) variant to ignore the value that’s already in the environment:

```swift
HStack {
    Image(systemName: "heart")
    Image(systemName: "heart")
        .environment(\.symbolVariants, .none)
}
.symbolVariant(.fill)
```

![A screenshot of two heart symbols. The first is filled while the](https://developer.apple.com/images/com.apple.SwiftUI/SymbolVariants-none-1@2x.png)

## See Also

### Setting a symbol variant

- [symbolVariant(\_:)](../view/symbolvariant%28__%29.md): Makes symbols within the view show a particular variant.
- [SymbolVariants](../symbolvariants.md): A variant of a symbol.
