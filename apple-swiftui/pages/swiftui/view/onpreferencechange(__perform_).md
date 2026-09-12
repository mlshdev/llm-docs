> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onpreferencechange(_:perform:)](https://developer.apple.com/documentation/swiftui/view/onpreferencechange(_:perform:))

# onPreferenceChange(\_:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds an action to perform when the specified preference key’s value changes.

## Declaration

```swift
nonisolated func onPreferenceChange<K>(_ key: K.Type = K.self, perform action: @escaping (K.Value) -> Void) -> some View where K : PreferenceKey, K.Value : Equatable

```

## Parameters

- `key`: The key to monitor for value changes.
- `action`: The action to perform when the value for `key` changes. The `action` closure passes the new value as its parameter.

<a id="return-value"></a>

## Return Value

A view that triggers `action` when the value for `key` changes.
