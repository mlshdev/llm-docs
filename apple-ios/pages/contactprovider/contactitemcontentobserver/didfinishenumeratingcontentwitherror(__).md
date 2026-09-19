> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactitemcontentobserver/didfinishenumeratingcontentwitherror(_:)

# didFinishEnumeratingContentWithError(\_:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Finishes the content enumeration with an error, indicating failure, to the observer.

## Declaration

```swift
func didFinishEnumeratingContentWithError(_: any Error)
```

<a id="discussion"></a>

## Discussion

Use [ContactProviderError.pageExpired](../contactprovidererror/pageexpired.md) to restart the content enumeration.

## See Also

### Ending enumeration

- [didFinishEnumeratingContent(upTo:)](didfinishenumeratingcontent%28upto_%29.md): Finishes the content enumeration to the observer.
- [didFinishEnumeratingPage(upTo:)](didfinishenumeratingpage%28upto_%29.md): Marks a page of items as completed.
- [ContactItemPage](../contactitempage.md): A fixed offset into enumerating all contact items.
