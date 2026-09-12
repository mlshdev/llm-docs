> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchenumerationobserver/maximumnumberofresultsperpage](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchenumerationobserver/maximumnumberofresultsperpage)

# maximumNumberOfResultsPerPage (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The maximum number of results to return in a single page enumeration.

## Declaration

```swift
var maximumNumberOfResultsPerPage: Int { get }
```

<a id="discussion"></a>

## Discussion

If the extension returns more than this number of results in a single page enumeration, the system will crash the extension process.

# maximumNumberOfResultsPerPage (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The maximum number of results to return in a single page enumeration.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger maximumNumberOfResultsPerPage;
```

<a id="discussion"></a>

## Discussion

If the extension returns more than this number of results in a single page enumeration, the system will crash the extension process.
