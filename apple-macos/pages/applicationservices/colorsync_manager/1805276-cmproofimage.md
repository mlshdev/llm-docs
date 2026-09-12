> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805276-cmproofimage](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805276-cmproofimage)

# CMProofImage

**Interface language:** Objective-C

**Framework:** Application Services

Proofs an image.

## Declaration

```objectivec
CMError CMProofImage (
   const FSSpec *specFrom,
   const FSSpec *specInto,
   Boolean repl,
   UInt32 qual,
   CMProfileRef srcProf,
   UInt32 srcIntent,
   CMProfileRef dstProf,
   CMProfileRef prfProf
);
```

## Parameters

- `specFrom`: The destination profile for the match. See the File Manager documentation for a description of the `FSSpec` data type.
- `specInto`: If this parameter is a file, it specifies the resulting image. If this parameter is a folder, it specifies the location of the resulting image which will have the same name as the original file. If this parameter is not provided, the original file is modified. See the File Manager documentation for a description of the `FSSpec` data type.
- `repl`: A Boolean value. If a file with the same name already exists, it will be replaced if this parameter is set to true.
- `qual`: The optional quality for the match—normal, draft or best (`cmNormalMode`, `cmDraftMode`, or `cmBestMode`).
- `srcProf`: The optional source profile for the match.
- `srcIntent`: The rendering intent for the match—perceptual intent, relative colorimetric intent, saturation intent , or absolute colorimetric intent                   (`cmPerceptual`, `cmRelativecolorimetric`, `cmSaturation`, or `cmAbsoluteColorimetric` ).
- `dstProf`: The destination profile for the match.
- `prfProf`: The proof profile for the match between the destination and proof profiles.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

## See Also

### Working With Image Files

- [CMValidImage](1805264-cmvalidimage.md): Validates the specified image file.
- [CMGetImageSpace](1805267-cmgetimagespace.md): Returns the signature of the data color space in which the color values of colors in an image are expressed.
- [CMEmbedImage](1805269-cmembedimage.md): Embeds an image with an ICC profile.
- [CMUnembedImage](1805271-cmunembedimage.md): Removes any ICC profiles embedded in an image.
- [CMMatchImage](1805273-cmmatchimage.md): Color matches an image file.
- [CMLinkImage](1805278-cmlinkimage.md): Matches an image file with a device link profile.
- [CMCountImageProfiles](1805281-cmcountimageprofiles.md): Obtains a count of the number of embedded profiles for a given image.
- [CMGetIndImageProfile](1805284-cmgetindimageprofile.md): Obtains a specific embedded profile for a given image.
- [CMSetIndImageProfile](1805286-cmsetindimageprofile.md): Sets a specific embedded profile for a given image.
