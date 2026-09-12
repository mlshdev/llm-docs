> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityfocused(_:equals:)](https://developer.apple.com/documentation/swiftui/view/accessibilityfocused(_:equals:))

# accessibilityFocused(\_:equals:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies this view by binding its accessibility element’s focus state to the given state value.

## Declaration

```swift
nonisolated func accessibilityFocused<Value>(_ binding: AccessibilityFocusState<Value>.Binding, equals value: Value) -> some View where Value : Hashable

```

## Parameters

- `binding`: The state binding to register. When accessibility focus moves to the accessibility element of the modified view, SwiftUI sets the bound value to the corresponding match value. If you set the state value programmatically to the matching value, then accessibility focus moves to the accessibility element of the modified view. SwiftUI sets the value to `nil` if accessibility focus leaves the accessibility element associated with the modified view, and programmatically setting the value to `nil` dismisses focus automatically.
- `value`: The value to match against when determining whether the binding should change.

<a id="return-value"></a>

## Return Value

The modified view.

## See Also

### Controlling focus

- [accessibilityFocused(\_:)](accessibilityfocused%28__%29.md): Modifies this view by binding its accessibility element’s focus state to the given boolean state value.
- [AccessibilityFocusState](../accessibilityfocusstate.md): A property wrapper type that can read and write a value that SwiftUI updates as the focus of any active accessibility technology, such as VoiceOver, changes.
