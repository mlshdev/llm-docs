> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/parsingconfiguration/queryoptions/init(excluded:parameters:)](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/parsingconfiguration/queryoptions/init(excluded:parameters:))

# init(excluded:parameters:)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates a new query options configuration with default values.

## Declaration

```swift
init(excluded: Bool = false, parameters: [String]? = nil)
```

<a id="discussion"></a>

## Discussion

The query options default behavior is as follows:

- Parsing includes the query.
- Parsing includes all parameters.
