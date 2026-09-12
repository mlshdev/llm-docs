> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/resetfocusaction/callasfunction(in:)](https://developer.apple.com/documentation/swiftui/resetfocusaction/callasfunction(in:))

# callAsFunction(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+ · tvOS 14.0+ · watchOS 7.0+

Asks the focus sytem to reevaluate the default focus item.

## Declaration

```swift
func callAsFunction(in namespace: Namespace.ID)
```

## Parameters

- `namespace`: The namespace inside which SwiftUI should reevaluate default focus. The namespace should match the [focusScope(\_:)](../view/focusscope%28__%29.md) block where focus requires reevaluation.

<a id="discussion"></a>

## Discussion

The focus system reevaluates default focus when the currently-focused item is within the provided namespace.
