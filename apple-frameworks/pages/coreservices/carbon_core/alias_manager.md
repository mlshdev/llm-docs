> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/alias_manager](https://developer.apple.com/documentation/coreservices/carbon_core/alias_manager)

# Alias Manager

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Create and resolve alias records that describe file system objects such as files, directories, and volumes.

> In macOS 10.8 and later, use the bookmark APIs provided by the [NSURL](../../foundation/nsurl.md) class instead. For more information, see [Locating Files Using Bookmarks](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/AccessingFilesandDirectories/AccessingFilesandDirectories.html#//apple_ref/doc/uid/TP40010672-CH3-SW10) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672).

## Topics

### Creating and Updating Alias Records

- [FSNewAlias](../1444363-fsnewalias.md): Deprecated. Creates a new alias record, given a target file or directory.
- [FSNewAliasUnicode](../1444376-fsnewaliasunicode.md): Deprecated. Creates a new alias record, given the Unicode name and parent directory of the target.
- [FSNewAliasFromPath](../1444431-fsnewaliasfrompath.md): Deprecated. Creates a new alias record, given the pathname of the target file or directory.
- [FSNewAliasMinimal](../1444337-fsnewaliasminimal.md): Deprecated. Creates a new minimal alias record, given a target file or directory.
- [FSNewAliasMinimalUnicode](../1444409-fsnewaliasminimalunicode.md): Deprecated. Creates a minimal alias, given the Unicode name and parent directory of the target.
- [FSUpdateAlias](../1444399-fsupdatealias.md): Deprecated. Updates an alias record for a specified target.

### Getting Alias Size

- [GetAliasSize](../1444419-getaliassize.md): Deprecated. Gets the size of an alias record referenced by a handle.
- [GetAliasSizeFromPtr](../1444380-getaliassizefromptr.md): Deprecated. Gets the size of an alias record referenced by a pointer.

### Getting and Setting Alias User Types

- [GetAliasUserType](../1444311-getaliasusertype.md): Deprecated. Gets the user type for an alias record referenced by a handle.
- [SetAliasUserType](../1444428-setaliasusertype.md): Deprecated. Sets the user type for an alias record referenced by a handle.
- [GetAliasUserTypeFromPtr](../1444345-getaliasusertypefromptr.md): Deprecated. Gets the user type for the alias record referenced by a pointer.
- [SetAliasUserTypeWithPtr](../1444309-setaliasusertypewithptr.md): Deprecated. Sets the user type for the alias record referenced by a pointer.

### Resolving and Reading Alias Records

- [FSCopyAliasInfo](../1444271-fscopyaliasinfo.md): Deprecated. Returns information from an alias handle.
- [FSMatchAliasBulk](../1444389-fsmatchaliasbulk.md): Deprecated. Identifies a list of possible matches for an alias.
- [FSResolveAlias](../1444297-fsresolvealias.md): Deprecated. Returns an `FSRef` to the single most likely target of an alias record.
- [FSResolveAliasWithMountFlags](../1444279-fsresolvealiaswithmountflags.md): Deprecated. Returns an `FSRef` to the target of an alias.

### Working With Finder Alias Files

- [FSFollowFinderAlias](../1444287-fsfollowfinderalias.md): Deprecated. Resolves an alias record obtained from a Finder alias file.
- [FSIsAliasFile](../1444426-fsisaliasfile.md): Deprecated. Determines whether a file system object is an alias file, a data file, or a folder.
- [FSResolveAliasFile](../1444372-fsresolvealiasfile.md): Deprecated. Resolves an alias contained in an alias file.
- [FSResolveAliasFileWithMountFlags](../1444327-fsresolvealiasfilewithmountflags.md): Deprecated. Resolves an alias contained in an alias file.

### Callbacks

- [FSAliasFilterProcPtr](../fsaliasfilterprocptr.md): Defines a pointer to an alias filtering callback function that filters out possible targets identified by the [FSMatchAliasBulk](../1444389-fsmatchaliasbulk.md) function.

### Data Types

- [AliasInfoType](../aliasinfotype.md): Defines the alias record information type used in the index parameter of `GetAliasInfo`.
- [AliasRecord](../aliasrecord.md): Defines an alias record.
- [FSAliasInfo](../fsaliasinfo.md): Defines an information block passed to the `FSCopyAliasInfo` function.

### Constants

- [FSAliasInfoBitmap](../fsaliasinfobitmap.md): Returned by the `FSCopyAliasInfo` function to indicate which fields of the alias information structure contain valid data.
- [Volume Mount Options](../1444436-volume_mount_options.md): Deprecated. Specify how an alias should be resolved.
- [Matching Constants](../1444405-matching_constants.md): Deprecated. Specify the matching criteria for the alias matching functions.
- [Alias Resource Type](../1444395-alias_resource_type.md): Deprecated. Specifies the file type of an alias resource file.
- [Information Type Constants](../1444386-information_type_constants.md): Deprecated. The `GetAliasInfo` function uses these constants in the `index` parameter.

## See Also

### Managers

- [Component Manager](component_manager.md): Deprecated. Find and use components in your app or add custom components to system-provided services, such as QuickTime and Core Audio.
- [File Manager](file_manager.md): Deprecated. Interact with files, folders, and volumes.
- [Gestalt Manager](gestalt_manager.md): Deprecated. Investigate the operating environment of your app.
- [Text Encoding Conversion Manager](text_encoding_conversion_manager.md): Deprecated. Handle text encoding conversion between apps and transfer text across different platforms.
