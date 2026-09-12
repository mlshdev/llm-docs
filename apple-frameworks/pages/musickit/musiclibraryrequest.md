> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibraryrequest](https://developer.apple.com/documentation/musickit/musiclibraryrequest)

# MusicLibraryRequest

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A request that your app uses to fetch items from the user’s music library.

## Declaration

```swift
struct MusicLibraryRequest<MusicItemType> where MusicItemType : MusicLibraryRequestable
```

## Topics

### Initializers

- [init()](musiclibraryrequest/init%28%29.md): Creates a request to fetch items from the library.

### Instance Properties

- [includeOnlyDownloadedContent](musiclibraryrequest/includeonlydownloadedcontent.md): A Boolean value that indicates whether the library response should only include items downloaded on the user’s device.
- [limit](musiclibraryrequest/limit.md): A limit for the number of items to return in the library response.
- [offset](musiclibraryrequest/offset.md): An offset for the request.

### Instance Methods

- [filter(matching:contains:)](musiclibraryrequest/filter%28matching_contains_%29-4q231.md): Filters items by a given optional property that contains a specific string.
- [filter(matching:contains:)](musiclibraryrequest/filter%28matching_contains_%29-8wwn3.md): Filters items by a given property that contains a specific string.
- [filter(matching:contains:)](musiclibraryrequest/filter%28matching_contains_%29-9756l.md): Filters items by a given relationship that matches a specific value.
- [filter(matching:equalTo:)](musiclibraryrequest/filter%28matching_equalto_%29-5jgfj.md): Filters items by a given property that matches a specific value.
- [filter(matching:equalTo:)](musiclibraryrequest/filter%28matching_equalto_%29-8efya.md): Filters items by a given optional property that matches a specific value.
- [filter(matching:memberOf:)](musiclibraryrequest/filter%28matching_memberof_%29-2u2ia.md): Filters items by an optional property for an array of possible values.
- [filter(matching:memberOf:)](musiclibraryrequest/filter%28matching_memberof_%29-3e2ab.md): Filters items by a property for an array of possible values.
- [filter(text:)](musiclibraryrequest/filter%28text_%29.md): Filters items by a specific string.
- [response()](musiclibraryrequest/response%28%29.md): Fetches items from the user’s music library.
- [sort(by:ascending:)](musiclibraryrequest/sort%28by_ascending_%29.md): Sorts items by a specified property.
