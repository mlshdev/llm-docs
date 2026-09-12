> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylistfolders/relationships-data.dictionary/libraryplaylistfoldersparentrelationship](https://developer.apple.com/documentation/applemusicapi/libraryplaylistfolders/relationships-data.dictionary/libraryplaylistfoldersparentrelationship)

# LibraryPlaylistFolders.Relationships.LibraryPlaylistFoldersParentRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents the parent relationship of a library playlist folder.

## Declaration

```
object LibraryPlaylistFolders.Relationships.LibraryPlaylistFoldersParentRelationship
```

## Properties

- `href` — `string`: The relative location for the parent relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[LibraryPlaylistFolders]` (required): The parent of the library playlist, if it exists.

## See Also

### Related Objects

- [LibraryPlaylistFolders.Relationships.LibraryPlaylistFoldersChildrenRelationship](libraryplaylistfolderschildrenrelationship.md): A resource object that represents the children relationship of a library playlist folder.
