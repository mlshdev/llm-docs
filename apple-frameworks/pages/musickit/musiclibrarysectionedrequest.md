> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysectionedrequest](https://developer.apple.com/documentation/musickit/musiclibrarysectionedrequest)

# MusicLibrarySectionedRequest

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A request that your app uses to fetch items grouped by sections from the user’s music library.

## Declaration

```swift
struct MusicLibrarySectionedRequest<SectionType, MusicItemType> where SectionType : MusicLibrarySectionRequestable, MusicItemType : MusicLibraryRequestable
```

## Topics

### Initializers

- [init()](musiclibrarysectionedrequest/init%28%29.md): Creates a request to fetch items grouped by sections from the library.

### Instance Properties

- [includeOnlyDownloadedContent](musiclibrarysectionedrequest/includeonlydownloadedcontent.md): A Boolean value that indicates whether the library response should only include items downloaded on the user’s device.
- [limit](musiclibrarysectionedrequest/limit.md): A limit for the number of items to return in the library response.
- [offset](musiclibrarysectionedrequest/offset.md): An offset for the request.

### Instance Methods

- [filterItems(matching:contains:)](musiclibrarysectionedrequest/filteritems%28matching_contains_%29-3s88f.md): Filters items by a given relationship that matches a specific value.
- [filterItems(matching:contains:)](musiclibrarysectionedrequest/filteritems%28matching_contains_%29-8rbsc.md): Filters items by a given property that contains a specific string.
- [filterItems(matching:contains:)](musiclibrarysectionedrequest/filteritems%28matching_contains_%29-9hpfh.md): Filters items by a given optional property that contains a specific string.
- [filterItems(matching:equalTo:)](musiclibrarysectionedrequest/filteritems%28matching_equalto_%29-3zn4r.md): Filters items by a given property that matches a specific value.
- [filterItems(matching:equalTo:)](musiclibrarysectionedrequest/filteritems%28matching_equalto_%29-5ybaa.md): Filters items by a given optional property that matches a specific value.
- [filterItems(matching:memberOf:)](musiclibrarysectionedrequest/filteritems%28matching_memberof_%29-49h2x.md): Filters items by a property for an array of possible values.
- [filterItems(matching:memberOf:)](musiclibrarysectionedrequest/filteritems%28matching_memberof_%29-zmb0.md): Filters items by an optional property for an array of possible values.
- [filterItems(text:)](musiclibrarysectionedrequest/filteritems%28text_%29.md): Filters items by a specific string.
- [filterSections(matching:contains:)](musiclibrarysectionedrequest/filtersections%28matching_contains_%29-3jf7b.md): Filters sections by a given optional property that contains a specific string.
- [filterSections(matching:contains:)](musiclibrarysectionedrequest/filtersections%28matching_contains_%29-5ptoy.md): Filters sections by a given property that contains a specific string.
- [filterSections(matching:equalTo:)](musiclibrarysectionedrequest/filtersections%28matching_equalto_%29-5nop7.md): Filters sections by a given optional property that matches a specific value.
- [filterSections(matching:equalTo:)](musiclibrarysectionedrequest/filtersections%28matching_equalto_%29-7v8tr.md): Filters sections by a given property that matches a specific value.
- [filterSections(matching:memberOf:)](musiclibrarysectionedrequest/filtersections%28matching_memberof_%29-4l0z8.md): Filters sections by a property for an array of possible values.
- [filterSections(matching:memberOf:)](musiclibrarysectionedrequest/filtersections%28matching_memberof_%29-746mb.md): Filters sections by an optional property for an array of possible values.
- [filterSections(text:)](musiclibrarysectionedrequest/filtersections%28text_%29.md): Filters sections by a specific string.
- [response()](musiclibrarysectionedrequest/response%28%29.md): Fetches items grouped by sections from the user’s music library.
- [sortItems(by:ascending:)](musiclibrarysectionedrequest/sortitems%28by_ascending_%29.md): Sorts items by a specified property.
- [sortSections(by:ascending:)](musiclibrarysectionedrequest/sortsections%28by_ascending_%29.md): Sorts sections by a specified property.
