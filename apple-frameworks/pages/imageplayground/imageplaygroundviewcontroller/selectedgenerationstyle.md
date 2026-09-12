> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/selectedgenerationstyle](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/selectedgenerationstyle)

# selectedGenerationStyle

**Framework:** Image Playground  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Generation style to pre-select upong launching the playground among those in `allowedGenerationStyles`.

## Declaration

```swift
@MainActor @preconcurrency var selectedGenerationStyle: ImagePlaygroundStyle { get set }
```

<a id="discussion"></a>

## Discussion

Use `ImagePlaygroundStyle.all` to check the list of all possible styles, and pass one of those.

## See Also

### Specifying the configuration of the playground

- [allowedGenerationStyles](allowedgenerationstyles.md): A list of allowed generation styles to choose from in the playground.
- [personalizationPolicy](personalizationpolicy.md): Deprecated. The policy to apply when determining whether to include people in generated images.
- [ImagePlaygroundPersonalizationPolicy](../imageplaygroundpersonalizationpolicy.md): Deprecated. An option for enabling or disabling personalization in the system interface.
