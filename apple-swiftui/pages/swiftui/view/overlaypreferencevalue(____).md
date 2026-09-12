> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/overlaypreferencevalue(_:_:)](https://developer.apple.com/documentation/swiftui/view/overlaypreferencevalue(_:_:))

# overlayPreferenceValue(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Reads the specified preference value from the view, using it to produce a second view that is applied as an overlay to the original view.

## Declaration

```swift
nonisolated func overlayPreferenceValue<Key, T>(_ key: Key.Type = Key.self, @ContentBuilder _ transform: @escaping (Key.Value) -> T) -> some View where Key : PreferenceKey, T : View

```

## Parameters

- `key`: The preference key type whose value is to be read.
- `transform`: A function that produces the overlay view from the preference value read from the original view.

<a id="return-value"></a>

## Return Value

A view that layers a second view in front of the view.

## See Also

### Generating backgrounds and overlays from preferences

- [backgroundPreferenceValue(\_:\_:)](backgroundpreferencevalue%28____%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as the background of the original view.
- [backgroundPreferenceValue(\_:alignment:\_:)](backgroundpreferencevalue%28__alignment___%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as the background of the original view.
- [overlayPreferenceValue(\_:alignment:\_:)](overlaypreferencevalue%28__alignment___%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as an overlay to the original view.
