> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/metadata-query-search-scopes](https://developer.apple.com/documentation/foundation/metadata-query-search-scopes)

# Metadata Query Search Scopes

**Interface languages:** Swift, Objective-C

**Framework:** Foundation  
**Kind:** API Collection

Constants for the predefined search scopes used by [searchScopes](nsmetadataquery/searchscopes.md).

## Topics

### Constants

- [NSMetadataQueryUserHomeScope](nsmetadataqueryuserhomescope.md): Search the user’s home directory.
- [NSMetadataQueryLocalComputerScope](nsmetadataquerylocalcomputerscope.md): Search all local mounted volumes, including the user home directory. The user’s home directory is searched even if it is a remote volume.
- [NSMetadataQueryNetworkScope](nsmetadataquerynetworkscope.md): Search all user-mounted remote volumes.
- [NSMetadataQueryUbiquitousDocumentsScope](nsmetadataqueryubiquitousdocumentsscope.md): Search all files in the `Documents` directories of the app’s iCloud container directories.
- [NSMetadataQueryUbiquitousDataScope](nsmetadataqueryubiquitousdatascope.md): Search all files not in the `Documents` directories of the app’s iCloud container directories.
- [NSMetadataQueryAccessibleUbiquitousExternalDocumentsScope](nsmetadataqueryaccessibleubiquitousexternaldocumentsscope.md): Search for documents outside the app’s container. This search can locate iCloud documents that the user previously opened using a document picker view controller. This lets your app access the documents again without requiring direct user interaction. The result’s [NSMetadataItemURLKey](nsmetadataitemurlkey.md) attributes return security-scoped NSURLs. For more information on working with security-scoped URLs, see [Security-Scoped URLs](nsurl.md#Security-Scoped-URLs) in [NSURL](nsurl.md).
- [NSMetadataQueryIndexedLocalComputerScope](nsmetadataqueryindexedlocalcomputerscope.md): Search all indexed local mounted volumes including the current user’s home directory (even if the home directory is remote).
- [NSMetadataQueryIndexedNetworkScope](nsmetadataqueryindexednetworkscope.md): Search all indexed user-mounted remote volumes.

## See Also

### Constants

- [Content Relevance](content-relevance.md): In addition to including the requested metadata attributes, a query result also includes content relevance, accessed with the following key.
- [Keys for Use with a Notification Info Dictionary](keys-for-use-with-a-notification-info-dictionary.md): Constants for keys to retrieve the collection of changed items from a notification’s user info dictionary.
