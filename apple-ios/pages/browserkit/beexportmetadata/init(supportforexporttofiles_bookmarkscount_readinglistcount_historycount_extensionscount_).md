> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beexportmetadata/init(supportforexporttofiles:bookmarkscount:readinglistcount:historycount:extensionscount:)](https://developer.apple.com/documentation/browserkit/beexportmetadata/init(supportforexporttofiles:bookmarkscount:readinglistcount:historycount:extensionscount:))

# init(supportForExportToFiles:bookmarksCount:readingListCount:historyCount:extensionsCount:) (Swift)

**Framework:** BrowserKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes export metadata with file support information and data counts.

## Declaration

```swift
init(supportForExportToFiles supportExportToFiles: Bool, bookmarksCount: Int, readingListCount: Int, historyCount: Int, extensionsCount: Int)
```

## Parameters

- `supportExportToFiles`: A Boolean value that determines whether the sheet offers the option to export the data to files.
- `bookmarksCount`: The number of bookmarks available for export.
- `readingListCount`: The number of reading list items available for export.
- `historyCount`: The number of history visits available for export.
- `extensionsCount`: The number of extensions available for export.

## See Also

### Creating export metadata

- [init(coder:)](init%28coder_%29.md): Initializes export metadata from a decoder.

# initWithSupportForExportToFiles:bookmarksCount:readingListCount:historyCount:extensionsCount: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes export metadata with file support information and data counts.

## Declaration

```objectivec
- (instancetype) initWithSupportForExportToFiles:(BOOL) supportExportToFiles bookmarksCount:(NSInteger) bookmarksCount readingListCount:(NSInteger) readingListCount historyCount:(NSInteger) historyCount extensionsCount:(NSInteger) extensionsCount;
```

## Parameters

- `supportExportToFiles`: A Boolean value that determines whether the sheet offers the option to export the data to files.
- `bookmarksCount`: The number of bookmarks available for export.
- `readingListCount`: The number of reading list items available for export.
- `historyCount`: The number of history visits available for export.
- `extensionsCount`: The number of extensions available for export.
