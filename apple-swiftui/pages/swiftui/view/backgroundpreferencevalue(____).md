> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/backgroundpreferencevalue(_:_:)](https://developer.apple.com/documentation/swiftui/view/backgroundpreferencevalue(_:_:))

# backgroundPreferenceValue(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Reads the specified preference value from the view, using it to produce a second view that is applied as the background of the original view.

## Declaration

```swift
nonisolated func backgroundPreferenceValue<Key, T>(_ key: Key.Type = Key.self, @ContentBuilder _ transform: @escaping (Key.Value) -> T) -> some View where Key : PreferenceKey, T : View

```

## Parameters

- `key`: The preference key type whose value is to be read.
- `transform`: A function that produces the background view from the preference value read from the original view.

<a id="return-value"></a>

## Return Value

A view that layers a second view behind the view.

## See Also

### Generating backgrounds and overlays from preferences

- [backgroundPreferenceValue(\_:alignment:\_:)](backgroundpreferencevalue%28__alignment___%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as the background of the original view.
- [overlayPreferenceValue(\_:\_:)](overlaypreferencevalue%28____%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as an overlay to the original view.
- [overlayPreferenceValue(\_:alignment:\_:)](overlaypreferencevalue%28__alignment___%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as an overlay to the original view.
