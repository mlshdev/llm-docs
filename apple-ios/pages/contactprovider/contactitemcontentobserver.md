> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemcontentobserver](https://developer.apple.com/documentation/contactprovider/contactitemcontentobserver)

# ContactItemContentObserver

**Framework:** ContactProvider  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A protocol that defines a system observer that receives a resumable enumeration of all items.

## Declaration

```swift
protocol ContactItemContentObserver
```

<a id="overview"></a>

## Overview

Your implementation of [enumerateContent(in:for:)](contactitemenumerator/enumeratecontent%28in_for_%29.md) receives an observer that conforms to this type. As you enumerate over your contact items, you provide them to the observer with the [didEnumerate(\_:)](contactitemcontentobserver/didenumerate%28__%29.md) method.

## Topics

### Providing contact items

- [didEnumerate(\_:)](contactitemcontentobserver/didenumerate%28__%29.md): Provides an array of contact items to the observer.
- [ContactItem](contactitem.md): An item in the contact database.

### Ending enumeration

- [didFinishEnumeratingContent(upTo:)](contactitemcontentobserver/didfinishenumeratingcontent%28upto_%29.md): Finishes the content enumeration to the observer.
- [didFinishEnumeratingPage(upTo:)](contactitemcontentobserver/didfinishenumeratingpage%28upto_%29.md): Marks a page of items as completed.
- [ContactItemPage](contactitempage.md): A fixed offset into enumerating all contact items.
- [didFinishEnumeratingContentWithError(\_:)](contactitemcontentobserver/didfinishenumeratingcontentwitherror%28__%29.md): Finishes the content enumeration with an error, indicating failure, to the observer.

### Optimizing enumeration

- [suggestedPageSize](contactitemcontentobserver/suggestedpagesize.md): Retrieves the suggested number of items to include in a page.

## See Also

### Receiving contacts

- [ContactItemChangeObserver](contactitemchangeobserver.md): A protocol that defines a system observer that receives a resumable enumeration of changed contact items.
