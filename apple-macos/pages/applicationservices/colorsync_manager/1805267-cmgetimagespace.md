> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805267-cmgetimagespace](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805267-cmgetimagespace)

# CMGetImageSpace

**Interface language:** Objective-C

**Framework:** Application Services

Returns the signature of the data color space in which the color values of colors in an image are expressed.

## Declaration

```objectivec
CMError CMGetImageSpace (
   const FSSpec *spec,
   OSType *space
);
```

## Parameters

- `spec`: A file specification for the image file. See the File Manager documentation for a description of the `FSSpec` data type.
- `space`: The signature of the data color space of the color values of colors for the image file is returned here.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

## See Also

### Working With Image Files

- [CMValidImage](1805264-cmvalidimage.md): Validates the specified image file.
- [CMEmbedImage](1805269-cmembedimage.md): Embeds an image with an ICC profile.
- [CMUnembedImage](1805271-cmunembedimage.md): Removes any ICC profiles embedded in an image.
- [CMMatchImage](1805273-cmmatchimage.md): Color matches an image file.
- [CMProofImage](1805276-cmproofimage.md): Proofs an image.
- [CMLinkImage](1805278-cmlinkimage.md): Matches an image file with a device link profile.
- [CMCountImageProfiles](1805281-cmcountimageprofiles.md): Obtains a count of the number of embedded profiles for a given image.
- [CMGetIndImageProfile](1805284-cmgetindimageprofile.md): Obtains a specific embedded profile for a given image.
- [CMSetIndImageProfile](1805286-cmsetindimageprofile.md): Sets a specific embedded profile for a given image.
