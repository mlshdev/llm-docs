> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/imageplaygroundgenerationstyle(_:in:)](https://developer.apple.com/documentation/swiftui/view/imageplaygroundgenerationstyle(_:in:))

# imagePlaygroundGenerationStyle(\_:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Sets the selected and allowed styles to use when displaying the image generation sheet.

## Declaration

```swift
nonisolated func imagePlaygroundGenerationStyle(_ style: ImagePlaygroundStyle, in allowedStyles: [ImagePlaygroundStyle] = ImagePlaygroundStyle.all) -> some View

```

## Parameters

- `style`: The style to pre-select in the sheet. This style must also be present in the `allowedStyles` parameter.
- `allowedStyles`: The list of styles that the sheet can display to people. Specify `ImagePlaygroundStyle/all` to make all styles available from the sheet.

<a id="return-value"></a>

## Return Value

An image playground sheet configured with the specified style information.

<a id="discussion"></a>

## Discussion

Configures the sheet with the specified style information. At presentation time, the sheet selects the style from the `style` parameter initially, but the person can change the selected style to any of the values in the `allowedStyles` parameter.

## See Also

### Generating images

- [imagePlaygroundOptions(\_:)](imageplaygroundoptions%28__%29.md): Sets the options to use when generating an image.
- [imagePlaygroundSheet(isPresented:concept:sourceImage:onCompletion:onCancellation:)](imageplaygroundsheet%28ispresented_concept_sourceimage_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using the specified string and optional starting image.
- [imagePlaygroundSheet(isPresented:concept:sourceImage:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](imageplaygroundsheet%28ispresented_concept_sourceimage_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create images from the specified input.
- [imagePlaygroundSheet(isPresented:concept:sourceImageURL:onCompletion:onCancellation:)](imageplaygroundsheet%28ispresented_concept_sourceimageurl_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using the specified string and image URL.
- [imagePlaygroundSheet(isPresented:concept:sourceImageURL:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](imageplaygroundsheet%28ispresented_concept_sourceimageurl_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create an image or Genmoji using the specified string and image URL.
- [imagePlaygroundSheet(isPresented:concepts:sourceImage:onCompletion:onCancellation:)](imageplaygroundsheet%28ispresented_concepts_sourceimage_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using one or more concepts and an optional starting image.
- [imagePlaygroundSheet(isPresented:concepts:sourceImage:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](imageplaygroundsheet%28ispresented_concepts_sourceimage_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create an image or Genmoji using one or more concepts and an optional starting image.
- [imagePlaygroundSheet(isPresented:concepts:sourceImageURL:onCompletion:onCancellation:)](imageplaygroundsheet%28ispresented_concepts_sourceimageurl_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using one or more concepts and an image URL.
- [imagePlaygroundSheet(isPresented:concepts:sourceImageURL:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](imageplaygroundsheet%28ispresented_concepts_sourceimageurl_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create an image or Genmoji using one or more concepts and an image URL.
