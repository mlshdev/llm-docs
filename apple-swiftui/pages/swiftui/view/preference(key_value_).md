> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/preference(key:value:)](https://developer.apple.com/documentation/swiftui/view/preference(key:value:))

# preference(key:value:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a value for the given preference.

## Declaration

```swift
nonisolated func preference<K>(key: K.Type = K.self, value: K.Value) -> some View where K : PreferenceKey

```

## See Also

### Setting preferences

- [transformPreference(\_:\_:)](transformpreference%28____%29.md): Applies a transformation to a preference value.
