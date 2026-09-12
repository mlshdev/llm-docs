> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/medialibrary-constants](https://developer.apple.com/documentation/medialibrary/medialibrary-constants)

# MediaLibrary Constants (Swift)

**Framework:** Media Library  
**Kind:** API Collection

## Topics

### Constants

- [Aperture Media Group Type Identifiers](aperture-media-group-type-identifiers.md): Identifiers for media group types in the Aperture media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [Final Cut Pro Media Group Type Identifiers](final-cut-pro-media-group-type-identifiers.md): Identifiers for media group types in the Final Cut Pro media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [Folders Media Group Type Identifiers](folders-media-group-type-identifiers.md): Identifiers for media group types in folder-based media sources. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [GarageBand Media Group Type Identifiers](garageband-media-group-type-identifiers.md): Identifiers for media group types in the GarageBand media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [Logic Media Group Type Identifiers](logic-media-group-type-identifiers.md): Identifiers for media group types in the Logic media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [MLMediaLoadAppFoldersKey](mlmedialoadappfolderskey.md): Deprecated. Specifies one or more relative paths inside the caller’s app bundle in which to search for media files. The value for this key is an array of strings (relative paths inside the caller’s app bundle).
- [MLMediaLoadAppleLoops](mlmedialoadappleloops.md): Deprecated. Identifies the folder containing audio loops from Apple.
- [MLMediaLoadExcludeSourcesKey](mlmedialoadexcludesourceskey.md): Deprecated. Defines which media sources to exclude when loading. This option is processed after [MLMediaLoadIncludeSourcesKey](mlmedialoadincludesourceskey.md). The value for this key is an array of strings (media source identifiers). For a list of valid media source identifiers, see [Media Source Identifiers](media-source-identifiers.md).
- [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md): Deprecated. Specifies the well-known folders that should be searched for media files. If this key is not present, none of the well-known folders will be provided. The value for this key is an array of strings (identifiers that correspond to well-known folder locations). For a list of well-known folder identifiers, see [Well-Known Folder Identifiers](well-known-folder-identifiers.md).
- [MLMediaLoadIncludeSourcesKey](mlmedialoadincludesourceskey.md): Deprecated. Defines which media sources to include when loading. If not present, load all available media sources. This option is processed after [MLMediaLoadSourceTypesKey](mlmedialoadsourcetypeskey.md). If [MLMediaLoadIncludeSourcesKey](mlmedialoadincludesourceskey.md) is present but [MLMediaLoadSourceTypesKey](mlmedialoadsourcetypeskey.md) is not, then only those sources specified here will be loaded. This is useful for loading a single media source. When both keys are present, this is useful for adding one or more media sources that normally would not appear for the requested library type. The value for this key is an array of strings (media source identifiers). For a list of valid media source identifiers, see [Media Source Identifiers](media-source-identifiers.md).
- [MLMediaLoadMoviesFolder](mlmedialoadmoviesfolder.md): Deprecated. Identifies the user’s Movies folder.
- [MLMediaLoadSourceTypesKey](mlmedialoadsourcetypeskey.md): Deprecated. Defines which sources to load based on library type. If not present, this will load all sources. The value for this key is a media source type. For a list of valid media source types, see [MLMediaSourceType](mlmediasourcetype.md).
- [MLMediaSourceApertureIdentifier](mlmediasourceapertureidentifier.md): Deprecated. The media source providing content from Aperture.
- [MLMediaSourceAppDefinedFoldersIdentifier](mlmediasourceappdefinedfoldersidentifier.md): Deprecated. The media source for app-defined folders. This identifies a media source created from a relative path inside the caller’s app bundle. This source provides data when [MLMediaLoadAppFoldersKey](mlmedialoadappfolderskey.md) is provided in the options.
- [MLMediaSourceCustomFoldersIdentifier](mlmediasourcecustomfoldersidentifier.md): Deprecated. The media source for custom folders. Currently, the only custom folder is the folder containing audio loops from Apple. This source provides data when [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md) is provided with the [MLMediaLoadAppleLoops](mlmedialoadappleloops.md) value.
- [MLMediaSourceFinalCutIdentifier](mlmediasourcefinalcutidentifier.md): Deprecated. The media source providing content from Final Cut Pro.
- [MLMediaSourceGarageBandIdentifier](mlmediasourcegaragebandidentifier.md): Deprecated. The media source providing content from GarageBand.
- [MLMediaSourceLogicIdentifier](mlmediasourcelogicidentifier.md): Deprecated. The media source providing content from Logic.
- [MLMediaSourceMoviesFolderIdentifier](mlmediasourcemoviesfolderidentifier.md): Deprecated. The media source for the user’s Movies folder. This source provides data when [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md) is provided with the [MLMediaLoadMoviesFolder](mlmedialoadmoviesfolder.md) value.
- [MLMediaSourcePhotoBoothIdentifier](mlmediasourcephotoboothidentifier.md): Deprecated. The media source providing content from Photo Booth.
- [MLMediaSourcePhotosIdentifier](mlmediasourcephotosidentifier.md): Deprecated.
- [MLMediaSourceType](mlmediasourcetype.md): Deprecated. Specifies the source type associated with a particular media source. Source type reflects the primary type of media within the source. These constants are used to specify values for [MLMediaLoadSourceTypesKey](mlmedialoadsourcetypeskey.md) in the [init(options:)](mlmedialibrary/init%28options_%29.md) method of [MLMediaLibrary](mlmedialibrary.md).
- [MLMediaSourceiMovieIdentifier](mlmediasourceimovieidentifier.md): Deprecated. The media source providing content from iMovie.
- [MLMediaSourceiPhotoIdentifier](mlmediasourceiphotoidentifier.md): Deprecated. The media source providing content from iPhoto.
- [MLMediaSourceiTunesIdentifier](mlmediasourceitunesidentifier.md): Deprecated. The media source providing content from iTunes.
- [MLMediaType](mlmediatype.md): Deprecated. Specifies the media type associated with a particular media object. These constants are used to specify a media object’s [mediaType](mlmediaobject/mediatype.md) attribute.
- [MLPhotosAlbumTypeIdentifier](mlphotosalbumtypeidentifier.md): Deprecated.
- [MLPhotosAlbumsGroupTypeIdentifier](mlphotosalbumsgrouptypeidentifier.md): Deprecated.
- [MLPhotosAllCollectionsGroupTypeIdentifier](mlphotosallcollectionsgrouptypeidentifier.md): Deprecated.
- [MLPhotosAllMomentsGroupTypeIdentifier](mlphotosallmomentsgrouptypeidentifier.md): Deprecated.
- [MLPhotosAllPhotosAlbumTypeIdentifier](mlphotosallphotosalbumtypeidentifier.md): Deprecated.
- [MLPhotosAllYearsGroupTypeIdentifier](mlphotosallyearsgrouptypeidentifier.md): Deprecated.
- [MLPhotosBurstGroupTypeIdentifier](mlphotosburstgrouptypeidentifier.md): Deprecated.
- [MLPhotosCollectionGroupTypeIdentifier](mlphotoscollectiongrouptypeidentifier.md): Deprecated.
- [MLPhotosDepthEffectGroupTypeIdentifier](mlphotosdeptheffectgrouptypeidentifier.md): Deprecated.
- [MLPhotosFacesAlbumTypeIdentifier](mlphotosfacesalbumtypeidentifier.md): Deprecated.
- [MLPhotosFavoritesGroupTypeIdentifier](mlphotosfavoritesgrouptypeidentifier.md): Deprecated.
- [MLPhotosFolderTypeIdentifier](mlphotosfoldertypeidentifier.md): Deprecated.
- [MLPhotosFrontCameraGroupTypeIdentifier](mlphotosfrontcameragrouptypeidentifier.md): Deprecated.
- [MLPhotosLastImportGroupTypeIdentifier](mlphotoslastimportgrouptypeidentifier.md): Deprecated.
- [MLPhotosMomentGroupTypeIdentifier](mlphotosmomentgrouptypeidentifier.md): Deprecated.
- [MLPhotosMyPhotoStreamTypeIdentifier](mlphotosmyphotostreamtypeidentifier.md): Deprecated.
- [MLPhotosPanoramasGroupTypeIdentifier](mlphotospanoramasgrouptypeidentifier.md): Deprecated.
- [MLPhotosPublishedAlbumTypeIdentifier](mlphotospublishedalbumtypeidentifier.md): Deprecated.
- [MLPhotosRootGroupTypeIdentifier](mlphotosrootgrouptypeidentifier.md): Deprecated.
- [MLPhotosScreenshotGroupTypeIdentifier](mlphotosscreenshotgrouptypeidentifier.md): Deprecated.
- [MLPhotosSharedGroupTypeIdentifier](mlphotossharedgrouptypeidentifier.md): Deprecated.
- [MLPhotosSharedPhotoStreamTypeIdentifier](mlphotossharedphotostreamtypeidentifier.md): Deprecated.
- [MLPhotosSloMoGroupTypeIdentifier](mlphotosslomogrouptypeidentifier.md): Deprecated.
- [MLPhotosSmartAlbumTypeIdentifier](mlphotossmartalbumtypeidentifier.md): Deprecated.
- [MLPhotosTimelapseGroupTypeIdentifier](mlphotostimelapsegrouptypeidentifier.md): Deprecated.
- [MLPhotosVideosGroupTypeIdentifier](mlphotosvideosgrouptypeidentifier.md): Deprecated.
- [MLPhotosYearGroupTypeIdentifier](mlphotosyeargrouptypeidentifier.md): Deprecated.
- [MLiTunesMusicVideosPlaylistTypeIdentifier](mlitunesmusicvideosplaylisttypeidentifier.md): Deprecated.
- [MLiTunesVideoPlaylistTypeIdentifier](mlitunesvideoplaylisttypeidentifier.md): Deprecated.
- [Media Object Attribute Keys](media-object-attribute-keys.md): Attribute keys for a media object. These constants are used to specify keys within a media object’s [attributes](mlmediaobject/attributes.md) dictionary.
- [iMovie Media Group Type Identifiers](imovie-media-group-type-identifiers.md): Identifiers for media group types in the iMovie media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [iPhoto Media Group Type Identifiers](iphoto-media-group-type-identifiers.md): Identifiers for media group types in the iPhoto media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [iTunes Media Group Type Identifiers](itunes-media-group-type-identifiers.md): Identifiers for media group types in the iTunes media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [MLPhotosAnimatedGroupTypeIdentifier](mlphotosanimatedgrouptypeidentifier.md): Deprecated.
- [MLPhotosLivePhotosGroupTypeIdentifier](mlphotoslivephotosgrouptypeidentifier.md): Deprecated.
- [MLPhotosLongExposureGroupTypeIdentifier](mlphotoslongexposuregrouptypeidentifier.md): Deprecated.

# MediaLibrary Constants (Objective-C)

**Framework:** Media Library  
**Kind:** API Collection

## Topics

### Constants

- [Aperture Media Group Type Identifiers](aperture-media-group-type-identifiers.md): Identifiers for media group types in the Aperture media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [Final Cut Pro Media Group Type Identifiers](final-cut-pro-media-group-type-identifiers.md): Identifiers for media group types in the Final Cut Pro media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [Folders Media Group Type Identifiers](folders-media-group-type-identifiers.md): Identifiers for media group types in folder-based media sources. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [GarageBand Media Group Type Identifiers](garageband-media-group-type-identifiers.md): Identifiers for media group types in the GarageBand media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [Logic Media Group Type Identifiers](logic-media-group-type-identifiers.md): Identifiers for media group types in the Logic media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [MLMediaLoadAppFoldersKey](mlmedialoadappfolderskey.md): Deprecated. Specifies one or more relative paths inside the caller’s app bundle in which to search for media files. The value for this key is an array of strings (relative paths inside the caller’s app bundle).
- [MLMediaLoadAppleLoops](mlmedialoadappleloops.md): Deprecated. Identifies the folder containing audio loops from Apple.
- [MLMediaLoadExcludeSourcesKey](mlmedialoadexcludesourceskey.md): Deprecated. Defines which media sources to exclude when loading. This option is processed after [MLMediaLoadIncludeSourcesKey](mlmedialoadincludesourceskey.md). The value for this key is an array of strings (media source identifiers). For a list of valid media source identifiers, see [Media Source Identifiers](media-source-identifiers.md).
- [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md): Deprecated. Specifies the well-known folders that should be searched for media files. If this key is not present, none of the well-known folders will be provided. The value for this key is an array of strings (identifiers that correspond to well-known folder locations). For a list of well-known folder identifiers, see [Well-Known Folder Identifiers](well-known-folder-identifiers.md).
- [MLMediaLoadIncludeSourcesKey](mlmedialoadincludesourceskey.md): Deprecated. Defines which media sources to include when loading. If not present, load all available media sources. This option is processed after [MLMediaLoadSourceTypesKey](mlmedialoadsourcetypeskey.md). If [MLMediaLoadIncludeSourcesKey](mlmedialoadincludesourceskey.md) is present but [MLMediaLoadSourceTypesKey](mlmedialoadsourcetypeskey.md) is not, then only those sources specified here will be loaded. This is useful for loading a single media source. When both keys are present, this is useful for adding one or more media sources that normally would not appear for the requested library type. The value for this key is an array of strings (media source identifiers). For a list of valid media source identifiers, see [Media Source Identifiers](media-source-identifiers.md).
- [MLMediaLoadMoviesFolder](mlmedialoadmoviesfolder.md): Deprecated. Identifies the user’s Movies folder.
- [MLMediaLoadSourceTypesKey](mlmedialoadsourcetypeskey.md): Deprecated. Defines which sources to load based on library type. If not present, this will load all sources. The value for this key is a media source type. For a list of valid media source types, see [MLMediaSourceType](mlmediasourcetype.md).
- [MLMediaSourceApertureIdentifier](mlmediasourceapertureidentifier.md): Deprecated. The media source providing content from Aperture.
- [MLMediaSourceAppDefinedFoldersIdentifier](mlmediasourceappdefinedfoldersidentifier.md): Deprecated. The media source for app-defined folders. This identifies a media source created from a relative path inside the caller’s app bundle. This source provides data when [MLMediaLoadAppFoldersKey](mlmedialoadappfolderskey.md) is provided in the options.
- [MLMediaSourceCustomFoldersIdentifier](mlmediasourcecustomfoldersidentifier.md): Deprecated. The media source for custom folders. Currently, the only custom folder is the folder containing audio loops from Apple. This source provides data when [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md) is provided with the [MLMediaLoadAppleLoops](mlmedialoadappleloops.md) value.
- [MLMediaSourceFinalCutIdentifier](mlmediasourcefinalcutidentifier.md): Deprecated. The media source providing content from Final Cut Pro.
- [MLMediaSourceGarageBandIdentifier](mlmediasourcegaragebandidentifier.md): Deprecated. The media source providing content from GarageBand.
- [MLMediaSourceLogicIdentifier](mlmediasourcelogicidentifier.md): Deprecated. The media source providing content from Logic.
- [MLMediaSourceMoviesFolderIdentifier](mlmediasourcemoviesfolderidentifier.md): Deprecated. The media source for the user’s Movies folder. This source provides data when [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md) is provided with the [MLMediaLoadMoviesFolder](mlmedialoadmoviesfolder.md) value.
- [MLMediaSourcePhotoBoothIdentifier](mlmediasourcephotoboothidentifier.md): Deprecated. The media source providing content from Photo Booth.
- [MLMediaSourcePhotosIdentifier](mlmediasourcephotosidentifier.md): Deprecated.
- [MLMediaSourceType](mlmediasourcetype.md): Deprecated. Specifies the source type associated with a particular media source. Source type reflects the primary type of media within the source. These constants are used to specify values for [MLMediaLoadSourceTypesKey](mlmedialoadsourcetypeskey.md) in the [initWithOptions:](mlmedialibrary/init%28options_%29.md) method of [MLMediaLibrary](mlmedialibrary.md).
- [MLMediaSourceiMovieIdentifier](mlmediasourceimovieidentifier.md): Deprecated. The media source providing content from iMovie.
- [MLMediaSourceiPhotoIdentifier](mlmediasourceiphotoidentifier.md): Deprecated. The media source providing content from iPhoto.
- [MLMediaSourceiTunesIdentifier](mlmediasourceitunesidentifier.md): Deprecated. The media source providing content from iTunes.
- [MLMediaType](mlmediatype.md): Deprecated. Specifies the media type associated with a particular media object. These constants are used to specify a media object’s [mediaType](mlmediaobject/mediatype.md) attribute.
- [MLPhotosAlbumTypeIdentifier](mlphotosalbumtypeidentifier.md): Deprecated.
- [MLPhotosAlbumsGroupTypeIdentifier](mlphotosalbumsgrouptypeidentifier.md): Deprecated.
- [MLPhotosAllCollectionsGroupTypeIdentifier](mlphotosallcollectionsgrouptypeidentifier.md): Deprecated.
- [MLPhotosAllMomentsGroupTypeIdentifier](mlphotosallmomentsgrouptypeidentifier.md): Deprecated.
- [MLPhotosAllPhotosAlbumTypeIdentifier](mlphotosallphotosalbumtypeidentifier.md): Deprecated.
- [MLPhotosAllYearsGroupTypeIdentifier](mlphotosallyearsgrouptypeidentifier.md): Deprecated.
- [MLPhotosBurstGroupTypeIdentifier](mlphotosburstgrouptypeidentifier.md): Deprecated.
- [MLPhotosCollectionGroupTypeIdentifier](mlphotoscollectiongrouptypeidentifier.md): Deprecated.
- [MLPhotosDepthEffectGroupTypeIdentifier](mlphotosdeptheffectgrouptypeidentifier.md): Deprecated.
- [MLPhotosFacesAlbumTypeIdentifier](mlphotosfacesalbumtypeidentifier.md): Deprecated.
- [MLPhotosFavoritesGroupTypeIdentifier](mlphotosfavoritesgrouptypeidentifier.md): Deprecated.
- [MLPhotosFolderTypeIdentifier](mlphotosfoldertypeidentifier.md): Deprecated.
- [MLPhotosFrontCameraGroupTypeIdentifier](mlphotosfrontcameragrouptypeidentifier.md): Deprecated.
- [MLPhotosLastImportGroupTypeIdentifier](mlphotoslastimportgrouptypeidentifier.md): Deprecated.
- [MLPhotosMomentGroupTypeIdentifier](mlphotosmomentgrouptypeidentifier.md): Deprecated.
- [MLPhotosMyPhotoStreamTypeIdentifier](mlphotosmyphotostreamtypeidentifier.md): Deprecated.
- [MLPhotosPanoramasGroupTypeIdentifier](mlphotospanoramasgrouptypeidentifier.md): Deprecated.
- [MLPhotosPublishedAlbumTypeIdentifier](mlphotospublishedalbumtypeidentifier.md): Deprecated.
- [MLPhotosRootGroupTypeIdentifier](mlphotosrootgrouptypeidentifier.md): Deprecated.
- [MLPhotosScreenshotGroupTypeIdentifier](mlphotosscreenshotgrouptypeidentifier.md): Deprecated.
- [MLPhotosSharedGroupTypeIdentifier](mlphotossharedgrouptypeidentifier.md): Deprecated.
- [MLPhotosSharedPhotoStreamTypeIdentifier](mlphotossharedphotostreamtypeidentifier.md): Deprecated.
- [MLPhotosSloMoGroupTypeIdentifier](mlphotosslomogrouptypeidentifier.md): Deprecated.
- [MLPhotosSmartAlbumTypeIdentifier](mlphotossmartalbumtypeidentifier.md): Deprecated.
- [MLPhotosTimelapseGroupTypeIdentifier](mlphotostimelapsegrouptypeidentifier.md): Deprecated.
- [MLPhotosVideosGroupTypeIdentifier](mlphotosvideosgrouptypeidentifier.md): Deprecated.
- [MLPhotosYearGroupTypeIdentifier](mlphotosyeargrouptypeidentifier.md): Deprecated.
- [MLiTunesMusicVideosPlaylistTypeIdentifier](mlitunesmusicvideosplaylisttypeidentifier.md): Deprecated.
- [MLiTunesVideoPlaylistTypeIdentifier](mlitunesvideoplaylisttypeidentifier.md): Deprecated.
- [Media Object Attribute Keys](media-object-attribute-keys.md): Attribute keys for a media object. These constants are used to specify keys within a media object’s [attributes](mlmediaobject/attributes.md) dictionary.
- [iMovie Media Group Type Identifiers](imovie-media-group-type-identifiers.md): Identifiers for media group types in the iMovie media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [iPhoto Media Group Type Identifiers](iphoto-media-group-type-identifiers.md): Identifiers for media group types in the iPhoto media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [iTunes Media Group Type Identifiers](itunes-media-group-type-identifiers.md): Identifiers for media group types in the iTunes media source. These constants are used to specify a media group’s [typeIdentifier](mlmediagroup/typeidentifier.md) attribute.
- [MLPhotosAnimatedGroupTypeIdentifier](mlphotosanimatedgrouptypeidentifier.md): Deprecated.
- [MLPhotosLivePhotosGroupTypeIdentifier](mlphotoslivephotosgrouptypeidentifier.md): Deprecated.
- [MLPhotosLongExposureGroupTypeIdentifier](mlphotoslongexposuregrouptypeidentifier.md): Deprecated.
