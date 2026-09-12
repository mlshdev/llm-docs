> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemcontentobserver/didfinishenumeratingcontent(upto:)](https://developer.apple.com/documentation/contactprovider/contactitemcontentobserver/didfinishenumeratingcontent(upto:))

# didFinishEnumeratingContent(upTo:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Finishes the content enumeration to the observer.

## Declaration

```swift
func didFinishEnumeratingContent(upTo generationMarker: Data)
```

## Parameters

- `generationMarker`: A value specific to your data source identifying the database generation whose content has been enumerated.

<a id="discussion"></a>

## Discussion

Call this when there are no more items to enumerate. Any future item enumerations after this are change enumerations. The first change enumeration begins from `generationMarker`, which syncs changes made after the content enumeration began. Calling this method saves the current page of items to the system Contacts database.

## See Also

### Ending enumeration

- [didFinishEnumeratingPage(upTo:)](didfinishenumeratingpage%28upto_%29.md): Marks a page of items as completed.
- [ContactItemPage](../contactitempage.md): A fixed offset into enumerating all contact items.
- [didFinishEnumeratingContentWithError(\_:)](didfinishenumeratingcontentwitherror%28__%29.md): Finishes the content enumeration with an error, indicating failure, to the observer.
