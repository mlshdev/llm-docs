> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdatabookmark/init(isfolder:title:identifier:url:parentidentifier:)](https://developer.apple.com/documentation/browserkit/bebrowserdatabookmark/init(isfolder:title:identifier:url:parentidentifier:))

# init(isFolder:title:identifier:url:parentIdentifier:) (Swift)

**Framework:** BrowserKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Creates a bookmark.

## Declaration

```swift
init(isFolder: Bool, title: String, identifier: String, url: URL?, parentIdentifier: String?)
```

## Parameters

- `isFolder`: A Boolean value that indicates whether a bookmark represents a folder.
- `title`: The title of the bookmark.
- `identifier`: A unique identifier for the bookmark.
- `url`: The URL that the bookmark points to, or `nil` if the bookmark is a folder.
- `parentIdentifier`: The identifier of the parent folder, or `nil` if the bookmark is a top-level bookmark.

# initAsFolder:title:identifier:url:parentIdentifier: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Creates a bookmark.

## Declaration

```objectivec
- (instancetype) initAsFolder:(BOOL) isFolder title:(NSString *) title identifier:(NSString *) identifier url:(NSURL *) url parentIdentifier:(NSString *) parentIdentifier;
```

## Parameters

- `isFolder`: A Boolean value that indicates whether a bookmark represents a folder.
- `title`: The title of the bookmark.
- `identifier`: A unique identifier for the bookmark.
- `url`: The URL that the bookmark points to, or `nil` if the bookmark is a folder.
- `parentIdentifier`: The identifier of the parent folder, or `nil` if the bookmark is a top-level bookmark.
