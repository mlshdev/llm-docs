> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/controlactivestate](https://developer.apple.com/documentation/swiftui/environmentvalues/controlactivestate)

# controlActiveState

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

The active appearance expected of controls in a window.

> Use \`EnvironmentValues.appearsActive\` instead.

## Declaration

```swift
var controlActiveState: ControlActiveState { get set }
```

<a id="discussion"></a>

## Discussion

`ControlActiveState` and `EnvironmentValues.controlActiveState` are deprecated, use `EnvironmentValues.appearsActive` instead.

Starting with macOS 15.0, the value of this environment property is strictly mapped to and from `EnvironmentValues.appearsActive` as follows:

- `appearsActive == true`, `controlActiveState` returns `.key`
- `appearsActive == false`, `controlActiveState` returns `.inactive`
- `controlActiveState` is set to `.key` or `.active`, `appearsActive` will be set to `true`.
- `controlActiveState` is set to `.inactive`, `appearsActive` will be set to `false`.

## See Also

### Deprecated environment values

- [disableAutocorrection](disableautocorrection.md): Deprecated. A Boolean value that determines whether the view hierarchy has auto-correction enabled.
- [sizeCategory](sizecategory.md): Deprecated. The size of content.
- [presentationMode](presentationmode.md): Deprecated. A binding to the current presentation mode of the view associated with this environment.
- [PresentationMode](../presentationmode.md): Deprecated. An indication whether a view is currently presented by another view.
- [complicationRenderingMode](complicationrenderingmode.md): Deprecated. The complication rendering mode for the current environment.
