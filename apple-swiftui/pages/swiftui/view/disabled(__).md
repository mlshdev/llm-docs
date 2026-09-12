> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/disabled(_:)](https://developer.apple.com/documentation/swiftui/view/disabled(_:))

# disabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a condition that controls whether users can interact with this view.

## Declaration

```swift
nonisolated func disabled(_ disabled: Bool) -> some View

```

## Parameters

- `disabled`: A Boolean value that determines whether users can interact with this view.

<a id="return-value"></a>

## Return Value

A view that controls whether users can interact with this view.

<a id="discussion"></a>

## Discussion

The higher views in a view hierarchy can override the value you set on this view. In the following example, the button isn’t interactive because the outer `disabled(_:)` modifier overrides the inner one:

```swift
HStack {
    Button(Text("Press")) {}
    .disabled(false)
}
.disabled(true)
```

## See Also

### Managing view interaction

- [isEnabled](../environmentvalues/isenabled.md): A Boolean value that indicates whether the view associated with this environment allows user interaction.
- [interactionActivityTrackingTag(\_:)](interactionactivitytrackingtag%28__%29.md): Sets a tag that you use for tracking interactivity.
- [invalidatableContent(\_:)](invalidatablecontent%28__%29.md): Mark the receiver as their content might be invalidated.
