> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitempage](https://developer.apple.com/documentation/contactprovider/contactitempage)

# ContactItemPage

**Framework:** ContactProvider  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A fixed offset into enumerating all contact items.

## Declaration

```swift
struct ContactItemPage
```

<a id="overview"></a>

## Overview

You can break an enumeration of all contact items into multiple pages to reduce the memory constraints on the system. During the enumeration, the [generationMarker](contactitempage/generationmarker.md) must not change. Update the [offset](contactitempage/offset.md) to reflect progress so you can resume the enumeration.

## Topics

### Creating a contact item page

- [init(generationMarker:offset:)](contactitempage/init%28generationmarker_offset_%29.md): Creates a contact item page with the given generation marker and offset.

### Supporting paging

- [generationMarker](contactitempage/generationmarker.md): A value specific to your data source identifying the database generation when enumeration of content started.
- [offset](contactitempage/offset.md): An offset from the page’s generation marker.
- [initialPage](contactitempage/initialpage.md): A static value the system uses to indicate the start of a new content enumeration.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Ending enumeration

- [didFinishEnumeratingContent(upTo:)](contactitemcontentobserver/didfinishenumeratingcontent%28upto_%29.md): Finishes the content enumeration to the observer.
- [didFinishEnumeratingPage(upTo:)](contactitemcontentobserver/didfinishenumeratingpage%28upto_%29.md): Marks a page of items as completed.
- [didFinishEnumeratingContentWithError(\_:)](contactitemcontentobserver/didfinishenumeratingcontentwitherror%28__%29.md): Finishes the content enumeration with an error, indicating failure, to the observer.
