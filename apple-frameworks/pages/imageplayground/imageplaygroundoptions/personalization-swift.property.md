> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imageplayground/imageplaygroundoptions/personalization-swift.property

# personalization

**Framework:** Image Playground  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

The option to enable or disable personalization features.

## Declaration

```swift
var personalization: ImagePlaygroundOptions.Personalization
```

<a id="discussion"></a>

## Discussion

When personalization features are enabled, the system interfaces make the people picker available for choosing an initial photo. If one of the prompts contains a name, the system also uses that information to identify the associated person. The system uses any referenced people to influence the images it generates. For example, it can incorporate the person’s appearance and skin tone into any generated images. If you disable personalization, the system uses only the provided inputs to generate the images.

The default value of this property is [ImagePlaygroundOptions.Personalization.automatic](personalization-swift.enum/automatic.md).
