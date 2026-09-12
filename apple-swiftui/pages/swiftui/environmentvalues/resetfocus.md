> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/resetfocus](https://developer.apple.com/documentation/swiftui/environmentvalues/resetfocus)

# resetFocus

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 12.0+ · tvOS 14.0+ · watchOS 7.0+

An action that requests the focus system to reevaluate default focus.

## Declaration

```swift
var resetFocus: ResetFocusAction { get }
```

<a id="discussion"></a>

## Discussion

Get this environment value and call and call it as a function to force a default focus reevaluation at runtime.

```swift
@Namespace var mainNamespace
@Environment(\.resetFocus) var resetFocus

var body: some View {
    // ...
    resetFocus(in: mainNamespace)
    // ...
}
```

## See Also

### Resetting focus

- [ResetFocusAction](../resetfocusaction.md): An environment value that provides the ability to reevaluate default focus.
