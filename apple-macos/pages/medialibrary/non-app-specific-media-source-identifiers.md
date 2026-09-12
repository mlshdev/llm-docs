> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/non-app-specific-media-source-identifiers](https://developer.apple.com/documentation/medialibrary/non-app-specific-media-source-identifiers)

# Non-App-Specific Media Source Identifiers (Swift)

**Framework:** Media Library  
**Kind:** API Collection

Identifiers for media sources which do not correspond to apps. Used with [Load Options Keys](load-options-keys.md).

## Topics

### Constants

- [MLMediaSourceMoviesFolderIdentifier](mlmediasourcemoviesfolderidentifier.md): Deprecated. The media source for the user’s Movies folder. This source provides data when [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md) is provided with the [MLMediaLoadMoviesFolder](mlmedialoadmoviesfolder.md) value.
- [MLMediaSourceCustomFoldersIdentifier](mlmediasourcecustomfoldersidentifier.md): Deprecated. The media source for custom folders. Currently, the only custom folder is the folder containing audio loops from Apple. This source provides data when [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md) is provided with the [MLMediaLoadAppleLoops](mlmedialoadappleloops.md) value.
- [MLMediaSourceAppDefinedFoldersIdentifier](mlmediasourceappdefinedfoldersidentifier.md): Deprecated. The media source for app-defined folders. This identifies a media source created from a relative path inside the caller’s app bundle. This source provides data when [MLMediaLoadAppFoldersKey](mlmedialoadappfolderskey.md) is provided in the options.

## See Also

### Constants

- [Load Options Keys](load-options-keys.md): Keys used to specify the `options` dictionary argument to [init(options:)](mlmedialibrary/init%28options_%29.md).
- [Media Source Identifiers](media-source-identifiers.md): Identifiers for media sources which correspond to apps used to manage groups of media objects. Used with [Load Options Keys](load-options-keys.md).
- [Well-Known Folder Identifiers](well-known-folder-identifiers.md): Identifiers for well-known media folders used to specify the value for [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md).

# Non-App-Specific Media Source Identifiers (Objective-C)

**Framework:** Media Library  
**Kind:** API Collection

Identifiers for media sources which do not correspond to apps. Used with [Load Options Keys](load-options-keys.md).

## Topics

### Constants

- [MLMediaSourceMoviesFolderIdentifier](mlmediasourcemoviesfolderidentifier.md): Deprecated. The media source for the user’s Movies folder. This source provides data when [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md) is provided with the [MLMediaLoadMoviesFolder](mlmedialoadmoviesfolder.md) value.
- [MLMediaSourceCustomFoldersIdentifier](mlmediasourcecustomfoldersidentifier.md): Deprecated. The media source for custom folders. Currently, the only custom folder is the folder containing audio loops from Apple. This source provides data when [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md) is provided with the [MLMediaLoadAppleLoops](mlmedialoadappleloops.md) value.
- [MLMediaSourceAppDefinedFoldersIdentifier](mlmediasourceappdefinedfoldersidentifier.md): Deprecated. The media source for app-defined folders. This identifies a media source created from a relative path inside the caller’s app bundle. This source provides data when [MLMediaLoadAppFoldersKey](mlmedialoadappfolderskey.md) is provided in the options.

## See Also

### Constants

- [Load Options Keys](load-options-keys.md): Keys used to specify the `options` dictionary argument to [initWithOptions:](mlmedialibrary/init%28options_%29.md).
- [Media Source Identifiers](media-source-identifiers.md): Identifiers for media sources which correspond to apps used to manage groups of media objects. Used with [Load Options Keys](load-options-keys.md).
- [Well-Known Folder Identifiers](well-known-folder-identifiers.md): Identifiers for well-known media folders used to specify the value for [MLMediaLoadFoldersKey](mlmedialoadfolderskey.md).
