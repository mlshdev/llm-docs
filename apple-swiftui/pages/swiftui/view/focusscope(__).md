> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/focusscope(_:)](https://developer.apple.com/documentation/swiftui/view/focusscope(_:))

# focusScope(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+ · tvOS 14.0+ · watchOS 7.0+

Creates a focus scope that SwiftUI uses to limit default focus preferences.

## Declaration

```swift
nonisolated func focusScope(_ namespace: Namespace.ID) -> some View

```

## Parameters

- `namespace`: A namespace identifier that SwiftUI can use to scope default focus preferences.

<a id="return-value"></a>

## Return Value

A view that sets the namespace of descendants for default focus.

<a id="discussion"></a>

## Discussion

The returned view gets associated with the provided namespace. Pass this namespace to [prefersDefaultFocus(\_:in:)](prefersdefaultfocus%28__in_%29.md) and the [resetFocus](../environmentvalues/resetfocus.md) function.

## See Also

### Setting focus scope

- [focusSection()](focussection%28%29.md): Indicates that the view’s frame and cohort of focusable descendants should be used to guide focus movement.
