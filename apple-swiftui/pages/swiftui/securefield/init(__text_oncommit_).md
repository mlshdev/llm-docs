> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/securefield/init(_:text:oncommit:)](https://developer.apple.com/documentation/swiftui/securefield/init(_:text:oncommit:))

# init(\_:text:onCommit:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an instance.

> Use [init(\_:text:prompt:)](https://developer.apple.com/documentation/swiftui/securefield/init%28_:text:prompt:%29-40n4d) instead. Add the [onSubmit(of:\_:)](../view/onsubmit%28of___%29.md) view modifier for the `onCommit` behavior.

## Declaration

```swift
nonisolated init(_ titleKey: LocalizedStringKey, text: Binding<String>, onCommit: @escaping () -> Void)
```

## Parameters

- `titleKey`: The key for the localized title of `self`, describing its purpose.
- `text`: The text to display and edit.
- `onCommit`: The action to perform when the user performs an action (usually pressing the Return key) while the secure field has focus.
