> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805286-cmsetindimageprofile](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805286-cmsetindimageprofile)

# CMSetIndImageProfile

**Interface language:** Objective-C

**Framework:** Application Services

Sets a specific embedded profile for a given image.

## Declaration

```objectivec
CMError CMSetIndImageProfile (
   const FSSpec *specFrom,
   const FSSpec *specInto,
   Boolean repl,
   UInt32 index,
   CMProfileRef prof
);
```

## Parameters

- `specFrom`: A file specification for the image file. See the File Manager documentation for a description of the `FSSpec` data type.
- `specInto`: If this parameter is a file, it specifies the resulting image. If this parameter is a folder, it specifies the location of the resulting image which will have the same name as the original file. If this parameter is not provided, the original file is modified. See the File Manager documentation for a description of the `FSSpec` data type.
- `repl`: A Boolean value. If a file with the same name already exists, it will be replaced if this parameter is set to true.
- `index`: The numeric index of the profile to set.
- `prof`: The profile to set at the index designated by the `index` parameter.

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
- [CMCountImageProfiles](1805281-cmcountimageprofiles.md): Obtains a count of the number of embedded profiles for a given image.
- [CMGetIndImageProfile](1805284-cmgetindimageprofile.md): Obtains a specific embedded profile for a given image.
