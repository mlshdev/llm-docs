> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/backgroundpreferencevalue(_:alignment:_:)](https://developer.apple.com/documentation/swiftui/view/backgroundpreferencevalue(_:alignment:_:))

# backgroundPreferenceValue(\_:alignment:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Reads the specified preference value from the view, using it to produce a second view that is applied as the background of the original view.

## Declaration

```swift
nonisolated func backgroundPreferenceValue<K, V>(_ key: K.Type, alignment: Alignment = .center, @ContentBuilder _ transform: @escaping (K.Value) -> V) -> some View where K : PreferenceKey, V : View

```

## Parameters

- `key`: The preference key type whose value is to be read.
- `alignment`: An optional alignment to use when positioning the background view relative to the original view.
- `transform`: A function that produces the background view from the preference value read from the original view.

<a id="return-value"></a>

## Return Value

A view that layers a second view behind the view.

<a id="discussion"></a>

## Discussion

The values of the preference key from both views are combined and made visible to the parent view.

## See Also

### Generating backgrounds and overlays from preferences

- [backgroundPreferenceValue(\_:\_:)](backgroundpreferencevalue%28____%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as the background of the original view.
- [overlayPreferenceValue(\_:\_:)](overlaypreferencevalue%28____%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as an overlay to the original view.
- [overlayPreferenceValue(\_:alignment:\_:)](overlaypreferencevalue%28__alignment___%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as an overlay to the original view.
