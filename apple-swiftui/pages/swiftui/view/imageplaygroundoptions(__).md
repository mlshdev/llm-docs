> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/imageplaygroundoptions(_:)](https://developer.apple.com/documentation/swiftui/view/imageplaygroundoptions(_:))

# imagePlaygroundOptions(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

Sets the options to use when generating an image.

## Declaration

```swift
nonisolated func imagePlaygroundOptions(_ options: ImagePlaygroundOptions = ImagePlaygroundOptions()) -> some View

```

## Parameters

- `options`: The options to apply when generating an image.

<a id="return-value"></a>

## Return Value

An image playground sheet that generates images using the specified `options`.

<a id="discussion"></a>

## Discussion

If you don’t provide any custom options, the sheet applies the default options to image generation.

## See Also

### Generating images

- [imagePlaygroundGenerationStyle(\_:in:)](imageplaygroundgenerationstyle%28__in_%29.md): Sets the selected and allowed styles to use when displaying the image generation sheet.
- [imagePlaygroundSheet(isPresented:concept:sourceImage:onCompletion:onCancellation:)](imageplaygroundsheet%28ispresented_concept_sourceimage_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using the specified string and optional starting image.
- [imagePlaygroundSheet(isPresented:concept:sourceImage:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](imageplaygroundsheet%28ispresented_concept_sourceimage_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create images from the specified input.
- [imagePlaygroundSheet(isPresented:concept:sourceImageURL:onCompletion:onCancellation:)](imageplaygroundsheet%28ispresented_concept_sourceimageurl_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using the specified string and image URL.
- [imagePlaygroundSheet(isPresented:concept:sourceImageURL:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](imageplaygroundsheet%28ispresented_concept_sourceimageurl_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create an image or Genmoji using the specified string and image URL.
- [imagePlaygroundSheet(isPresented:concepts:sourceImage:onCompletion:onCancellation:)](imageplaygroundsheet%28ispresented_concepts_sourceimage_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using one or more concepts and an optional starting image.
- [imagePlaygroundSheet(isPresented:concepts:sourceImage:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](imageplaygroundsheet%28ispresented_concepts_sourceimage_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create an image or Genmoji using one or more concepts and an optional starting image.
- [imagePlaygroundSheet(isPresented:concepts:sourceImageURL:onCompletion:onCancellation:)](imageplaygroundsheet%28ispresented_concepts_sourceimageurl_oncompletion_oncancellation_%29.md): Presents the system sheet to create an image using one or more concepts and an image URL.
- [imagePlaygroundSheet(isPresented:concepts:sourceImageURL:onCompletion:onAdaptiveImageGlyphCreation:onCancellation:)](imageplaygroundsheet%28ispresented_concepts_sourceimageurl_oncompletion_onadaptiveimageglyphcreation_oncancellation_%29.md): Presents the system sheet to create an image or Genmoji using one or more concepts and an image URL.
