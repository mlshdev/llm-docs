> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alert/button/default(_:action:)](https://developer.apple.com/documentation/swiftui/alert/button/default(_:action:))

# default(\_:action:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an alert button with the default style.

> Use View.alert(\_:isPresented:presenting:actions:) instead.

## Declaration

```swift
static func `default`(_ label: Text, action: (() -> Void)? = {}) -> Alert.Button
```

## Parameters

- `label`: The text to display on the button.
- `action`: A closure to execute when the user taps or presses the button.

<a id="return-value"></a>

## Return Value

An alert button with the default style.

## See Also

### Getting a button

- [cancel(\_:)](cancel%28__%29.md): Deprecated. Creates an alert button that indicates cancellation, with a system-provided label.
- [cancel(\_:action:)](cancel%28__action_%29.md): Deprecated. Creates an alert button that indicates cancellation, with a custom label.
- [destructive(\_:action:)](destructive%28__action_%29.md): Deprecated. Creates an alert button with a style that indicates a destructive action.
