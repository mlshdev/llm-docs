> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/disableautocorrection(_:)](https://developer.apple.com/documentation/swiftui/view/disableautocorrection(_:))

# disableAutocorrection(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 8.0+ (deprecated in 27.0)

Sets whether to disable autocorrection for this view.

> Use [autocorrectionDisabled(\_:)](autocorrectiondisabled%28__%29.md) instead.

## Declaration

```swift
nonisolated func disableAutocorrection(_ disable: Bool?) -> some View

```

## Parameters

- `disable`: A Boolean value that indicates whether autocorrection is disabled for this view.

<a id="discussion"></a>

## Discussion

Use this method when the effect of autocorrection would make it more difficult for the user to input information. The entry of proper names and street addresses are examples where autocorrection can negatively affect the user’s ability complete a data entry task.

In the example below configures a [TextField](../textfield.md) with the default keyboard. Disabling autocorrection allows the user to enter arbitrary text without the autocorrection system offering suggestions or attempting to override their input.

```swift
TextField("1234 Main St.", text: $address)
    .keyboardType(.default)
    .disableAutocorrection(true)
```

## See Also

### Text modifiers

- [autocapitalization(\_:)](autocapitalization%28__%29.md): Deprecated. Sets whether to apply auto-capitalization to this view.
