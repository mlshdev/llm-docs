> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/anchorpreference(key:value:transform:)](https://developer.apple.com/documentation/swiftui/view/anchorpreference(key:value:transform:))

# anchorPreference(key:value:transform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a value for the specified preference key, the value is a function of a geometry value tied to the current coordinate space, allowing readers of the value to convert the geometry to their local coordinates.

## Declaration

```swift
nonisolated func anchorPreference<A, K>(key _: K.Type = K.self, value: Anchor<A>.Source, transform: @escaping (Anchor<A>) -> K.Value) -> some View where K : PreferenceKey

```

## Parameters

- `key`: The preference key type.
- `value`: The geometry value in the current coordinate space.
- `transform`: The function to produce the preference value.

<a id="return-value"></a>

## Return Value

A new version of the view that writes the preference.

## See Also

### Setting preferences based on geometry

- [transformAnchorPreference(key:value:transform:)](transformanchorpreference%28key_value_transform_%29.md): Sets a value for the specified preference key, the value is a function of the key’s current value and a geometry value tied to the current coordinate space, allowing readers of the value to convert the geometry to their local coordinates.
