> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemcontentobserver/didenumerate(_:)](https://developer.apple.com/documentation/contactprovider/contactitemcontentobserver/didenumerate(_:))

# didEnumerate(\_:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Provides an array of contact items to the observer.

## Declaration

```swift
func didEnumerate(_: [ContactItem])
```

<a id="discussion"></a>

## Discussion

You can call this method multiple times to fulfill the [suggestedPageSize](suggestedpagesize.md).

## See Also

### Providing contact items

- [ContactItem](../contactitem.md): An item in the contact database.
