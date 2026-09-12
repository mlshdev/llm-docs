> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805281-cmcountimageprofiles](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805281-cmcountimageprofiles)

# CMCountImageProfiles

**Interface language:** Objective-C

**Framework:** Application Services

Obtains a count of the number of embedded profiles for a given image.

## Declaration

```objectivec
CMError CMCountImageProfiles (
   const FSSpec *spec,
   UInt32 *count
);
```

## Parameters

- `spec`: A file specification for the image file. See the File Manager documentation for a description of the `FSSpec` data type.
- `count`: On output, a count of the embedded profiles for the image

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
- [CMProofImage](1805276-cmproofimage.md): Proofs an image.
- [CMLinkImage](1805278-cmlinkimage.md): Matches an image file with a device link profile.
- [CMGetIndImageProfile](1805284-cmgetindimageprofile.md): Obtains a specific embedded profile for a given image.
- [CMSetIndImageProfile](1805286-cmsetindimageprofile.md): Sets a specific embedded profile for a given image.
