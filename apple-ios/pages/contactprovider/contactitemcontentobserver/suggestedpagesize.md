> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemcontentobserver/suggestedpagesize](https://developer.apple.com/documentation/contactprovider/contactitemcontentobserver/suggestedpagesize)

# suggestedPageSize

**Framework:** ContactProvider  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Retrieves the suggested number of items to include in a page.

## Declaration

```swift
var suggestedPageSize: Int { get }
```

<a id="discussion"></a>

## Discussion

This value is a suggested upper limit for the number of contact items you can pass in the aggregate calls to [didEnumerate(\_:)](didenumerate%28__%29.md). Exceeding this limit may result in memory issues.
