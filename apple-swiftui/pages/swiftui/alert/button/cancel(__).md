> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alert/button/cancel(_:)](https://developer.apple.com/documentation/swiftui/alert/button/cancel(_:))

# cancel(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an alert button that indicates cancellation, with a system-provided label.

> Use View.alert(\_:isPresented:presenting:actions:) instead.

## Declaration

```swift
static func cancel(_ action: (() -> Void)? = {}) -> Alert.Button
```

## Parameters

- `action`: A closure to execute when the user taps or presses the button.

<a id="return-value"></a>

## Return Value

An alert button that indicates cancellation.

<a id="discussion"></a>

## Discussion

The system automatically chooses locale-appropriate text for the button’s label.

## See Also

### Getting a button

- [default(\_:action:)](default%28__action_%29.md): Deprecated. Creates an alert button with the default style.
- [cancel(\_:action:)](cancel%28__action_%29.md): Deprecated. Creates an alert button that indicates cancellation, with a custom label.
- [destructive(\_:action:)](destructive%28__action_%29.md): Deprecated. Creates an alert button with a style that indicates a destructive action.
