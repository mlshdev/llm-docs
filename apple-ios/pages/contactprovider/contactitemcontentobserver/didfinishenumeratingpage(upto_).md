> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemcontentobserver/didfinishenumeratingpage(upto:)](https://developer.apple.com/documentation/contactprovider/contactitemcontentobserver/didfinishenumeratingpage(upto:))

# didFinishEnumeratingPage(upTo:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Marks a page of items as completed.

## Declaration

```swift
func didFinishEnumeratingPage(upTo nextPage: ContactItemPage)
```

## Parameters

- `nextPage`: The [ContactItemPage](../contactitempage.md) where the next content enumeration can continue.

<a id="discussion"></a>

## Discussion

Call this method only if there are more items to enumerate after this page. An interrupted content enumeration can resume in the future, continuing from this page. Calling this method saves the current page of items to the system Contacts database.

## See Also

### Ending enumeration

- [didFinishEnumeratingContent(upTo:)](didfinishenumeratingcontent%28upto_%29.md): Finishes the content enumeration to the observer.
- [ContactItemPage](../contactitempage.md): A fixed offset into enumerating all contact items.
- [didFinishEnumeratingContentWithError(\_:)](didfinishenumeratingcontentwitherror%28__%29.md): Finishes the content enumeration with an error, indicating failure, to the observer.
