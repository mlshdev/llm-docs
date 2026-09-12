> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiofileglobalinfo_allutis](https://developer.apple.com/documentation/audiotoolbox/kaudiofileglobalinfo_allutis)

# kAudioFileGlobalInfo_AllUTIs (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A `CFArray` of `CFString` of all UTIs (Universal Type Identifiers) recognized by Audio File Services.

## Declaration

```swift
var kAudioFileGlobalInfo_AllUTIs: AudioFilePropertyID { get }
```

<a id="Discussion"></a>

## Discussion

If you access this property, your app is responsible for releasing the [CFArray](../corefoundation/cfarray.md) object.

When accessing this property’s value, you must set the `inSpecifier` parameter to `NULL`.

## See Also

### Constants

- [kAudioFileGlobalInfo_ReadableTypes](kaudiofileglobalinfo_readabletypes.md): An array of `UInt32` values containing the file types (such as AIFF, WAVE, and so forth) that can be opened for reading.
- [kAudioFileGlobalInfo_WritableTypes](kaudiofileglobalinfo_writabletypes.md): An array of `UInt32` values containing the file types (such as AIFF, WAVE, and so forth) that can be opened for writing.
- [kAudioFileGlobalInfo_FileTypeName](kaudiofileglobalinfo_filetypename.md): The name for the file type.
- [kAudioFileGlobalInfo_AvailableFormatIDs](kaudiofileglobalinfo_availableformatids.md): An array of format IDs for formats that can be read.
- [kAudioFileGlobalInfo_AvailableStreamDescriptionsForFormat](kaudiofileglobalinfo_availablestreamdescriptionsforformat.md): An array of audio stream basic description structures, which contain all the formats for a particular file type and format ID.
- [kAudioFileGlobalInfo_AllExtensions](kaudiofileglobalinfo_allextensions.md): A `CFArray` of `CFStrings` containing all recognized file extensions. You can use this array when creating an `NSOpenPanel` (declared in the AppKit’s `NSOpenPanel.h` header file).
- [kAudioFileGlobalInfo_AllHFSTypeCodes](kaudiofileglobalinfo_allhfstypecodes.md): An array of HFS type codes containing all recognized HFS type codes. For more information on HFS type codes, see Audio Toolbox’s `ExtendedAudioFile.h` header file.
- [kAudioFileGlobalInfo_AllMIMETypes](kaudiofileglobalinfo_allmimetypes.md): A `CFArray` of CF strings of all MIME types are recognized by Audio File Services.
- [kAudioFileGlobalInfo_ExtensionsForType](kaudiofileglobalinfo_extensionsfortype.md): A `CFArray` of CF strings containing the recognized file extensions for a specified type.
- [kAudioFileGlobalInfo_HFSTypeCodesForType](kaudiofileglobalinfo_hfstypecodesfortype.md): An array of HFS type codes corresponding to a specified file type. The first type in the array is the preferred one to use.
- [kAudioFileGlobalInfo_UTIsForType](kaudiofileglobalinfo_utisfortype.md): A `CFArray` of `CFString` of all Universal Type Identifiers recognized by a specified file type.
- [kAudioFileGlobalInfo_MIMETypesForType](kaudiofileglobalinfo_mimetypesfortype.md): A `CFArray` of `CFString` of all MIME types recognized by a specified file type.
- [kAudioFileGlobalInfo_TypesForExtension](kaudiofileglobalinfo_typesforextension.md): An array of all audio file type IDs that support a specified filename extension.
- [kAudioFileGlobalInfo_TypesForHFSTypeCode](kaudiofileglobalinfo_typesforhfstypecode.md): An array of all audio file type IDs that support a specified `HFSTypeCode`.
- [kAudioFileGlobalInfo_TypesForUTI](kaudiofileglobalinfo_typesforuti.md): An array of all audio file type IDs that support a specified UTI.

# kAudioFileGlobalInfo_AllUTIs (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A `CFArray` of `CFString` of all UTIs (Universal Type Identifiers) recognized by Audio File Services.

## Declaration

```objectivec
kAudioFileGlobalInfo_AllUTIs
```

<a id="Discussion"></a>

## Discussion

If you access this property, your app is responsible for releasing the [CFArrayRef](../corefoundation/cfarray.md) object.

When accessing this property’s value, you must set the `inSpecifier` parameter to `NULL`.

## See Also

### Constants

- [kAudioFileGlobalInfo_ReadableTypes](kaudiofileglobalinfo_readabletypes.md): An array of `UInt32` values containing the file types (such as AIFF, WAVE, and so forth) that can be opened for reading.
- [kAudioFileGlobalInfo_WritableTypes](kaudiofileglobalinfo_writabletypes.md): An array of `UInt32` values containing the file types (such as AIFF, WAVE, and so forth) that can be opened for writing.
- [kAudioFileGlobalInfo_FileTypeName](kaudiofileglobalinfo_filetypename.md): The name for the file type.
- [kAudioFileGlobalInfo_AvailableFormatIDs](kaudiofileglobalinfo_availableformatids.md): An array of format IDs for formats that can be read.
- [kAudioFileGlobalInfo_AvailableStreamDescriptionsForFormat](kaudiofileglobalinfo_availablestreamdescriptionsforformat.md): An array of audio stream basic description structures, which contain all the formats for a particular file type and format ID.
- [kAudioFileGlobalInfo_AllExtensions](kaudiofileglobalinfo_allextensions.md): A `CFArray` of `CFStrings` containing all recognized file extensions. You can use this array when creating an `NSOpenPanel` (declared in the AppKit’s `NSOpenPanel.h` header file).
- [kAudioFileGlobalInfo_AllHFSTypeCodes](kaudiofileglobalinfo_allhfstypecodes.md): An array of HFS type codes containing all recognized HFS type codes. For more information on HFS type codes, see Audio Toolbox’s `ExtendedAudioFile.h` header file.
- [kAudioFileGlobalInfo_AllMIMETypes](kaudiofileglobalinfo_allmimetypes.md): A `CFArray` of CF strings of all MIME types are recognized by Audio File Services.
- [kAudioFileGlobalInfo_ExtensionsForType](kaudiofileglobalinfo_extensionsfortype.md): A `CFArray` of CF strings containing the recognized file extensions for a specified type.
- [kAudioFileGlobalInfo_HFSTypeCodesForType](kaudiofileglobalinfo_hfstypecodesfortype.md): An array of HFS type codes corresponding to a specified file type. The first type in the array is the preferred one to use.
- [kAudioFileGlobalInfo_UTIsForType](kaudiofileglobalinfo_utisfortype.md): A `CFArray` of `CFString` of all Universal Type Identifiers recognized by a specified file type.
- [kAudioFileGlobalInfo_MIMETypesForType](kaudiofileglobalinfo_mimetypesfortype.md): A `CFArray` of `CFString` of all MIME types recognized by a specified file type.
- [kAudioFileGlobalInfo_TypesForExtension](kaudiofileglobalinfo_typesforextension.md): An array of all audio file type IDs that support a specified filename extension.
- [kAudioFileGlobalInfo_TypesForHFSTypeCode](kaudiofileglobalinfo_typesforhfstypecode.md): An array of all audio file type IDs that support a specified `HFSTypeCode`.
- [kAudioFileGlobalInfo_TypesForUTI](kaudiofileglobalinfo_typesforuti.md): An array of all audio file type IDs that support a specified UTI.
