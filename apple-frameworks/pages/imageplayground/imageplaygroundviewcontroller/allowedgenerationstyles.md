> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/allowedgenerationstyles](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/allowedgenerationstyles)

# allowedGenerationStyles

**Framework:** Image Playground  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A list of allowed generation styles to choose from in the playground.

## Declaration

```swift
@MainActor @preconcurrency var allowedGenerationStyles: [ImagePlaygroundStyle] { get set }
```

<a id="discussion"></a>

## Discussion

The `selectedGenerationStyle` is expected to be included in this list.

Use `ImagePlaygroundStyle/all` to check the list of all possible styles, and pass a subset of those.

## See Also

### Specifying the configuration of the playground

- [selectedGenerationStyle](selectedgenerationstyle.md): Generation style to pre-select upong launching the playground among those in `allowedGenerationStyles`.
- [personalizationPolicy](personalizationpolicy.md): Deprecated. The policy to apply when determining whether to include people in generated images.
- [ImagePlaygroundPersonalizationPolicy](../imageplaygroundpersonalizationpolicy.md): Deprecated. An option for enabling or disabling personalization in the system interface.
