> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/transformpreference(_:_:)](https://developer.apple.com/documentation/swiftui/view/transformpreference(_:_:))

# transformPreference(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Applies a transformation to a preference value.

## Declaration

```swift
nonisolated func transformPreference<K>(_ key: K.Type = K.self, _ callback: @escaping (inout K.Value) -> Void) -> some View where K : PreferenceKey

```

## See Also

### Setting preferences

- [preference(key:value:)](preference%28key_value_%29.md): Sets a value for the given preference.
