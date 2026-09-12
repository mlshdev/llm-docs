> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityfocused(_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityfocused(_:))

# accessibilityFocused(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies this view by binding its accessibility element’s focus state to the given boolean state value.

## Declaration

```swift
nonisolated func accessibilityFocused(_ condition: AccessibilityFocusState<Bool>.Binding) -> some View

```

## Parameters

- `condition`: The accessibility focus state to bind. When accessibility focus moves to the accessibility element of the modified view, the focus value is set to `true`. If the value is set to `true` programmatically, then accessibility focus will move to accessibility element of the modified view. The value will be set to `false` if accessibility focus leaves the accessibility element of the modified view, and accessibility focus will be dismissed automatically if the value is set to `false` programmatically.

<a id="return-value"></a>

## Return Value

The modified view.

## See Also

### Controlling focus

- [accessibilityFocused(\_:equals:)](accessibilityfocused%28__equals_%29.md): Modifies this view by binding its accessibility element’s focus state to the given state value.
- [AccessibilityFocusState](../accessibilityfocusstate.md): A property wrapper type that can read and write a value that SwiftUI updates as the focus of any active accessibility technology, such as VoiceOver, changes.
