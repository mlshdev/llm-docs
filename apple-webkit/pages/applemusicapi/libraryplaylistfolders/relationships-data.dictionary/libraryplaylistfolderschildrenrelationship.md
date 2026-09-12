> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryplaylistfolders/relationships-data.dictionary/libraryplaylistfolderschildrenrelationship](https://developer.apple.com/documentation/applemusicapi/libraryplaylistfolders/relationships-data.dictionary/libraryplaylistfolderschildrenrelationship)

# LibraryPlaylistFolders.Relationships.LibraryPlaylistFoldersChildrenRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents the children relationship of a library playlist folder.

## Declaration

```
object LibraryPlaylistFolders.Relationships.LibraryPlaylistFoldersChildrenRelationship
```

## Properties

- `href` — `string`: The relative location for the children relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[*]` (required): The children of the library playlist, if any exist.
  **Allowed types:** `LibraryPlaylistFolders`, `LibraryPlaylists`

## See Also

### Related Objects

- [LibraryPlaylistFolders.Relationships.LibraryPlaylistFoldersParentRelationship](libraryplaylistfoldersparentrelationship.md): A resource object that represents the parent relationship of a library playlist folder.
