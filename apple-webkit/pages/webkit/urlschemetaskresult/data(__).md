> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/urlschemetaskresult/data(_:)](https://developer.apple.com/documentation/webkit/urlschemetaskresult/data(_:))

# URLSchemeTaskResult.data(\_:)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Data for the resource. This value may contain all of the data or only some of it.

## Declaration

```swift
case data(Data)
```

<a id="discussion"></a>

## Discussion

If you load the data incrementally, multiple of these values may be added to the result sequence to deliver each new portion of data. Each time some new Data is added to the sequence, WebKit appends the data to any previously received data.

A [URLSchemeTaskResult.response(\_:)](response%28__%29.md) must have been added to the sequence prior to any data being aded to it.
