> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextdocumentrequest/granularitycount](https://developer.apple.com/documentation/browserenginekit/betextdocumentrequest/granularitycount)

# granularityCount (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A count of granularity units that defines the scope of the document request.

## Declaration

```swift
var granularityCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

Use this value with [surroundingGranularity](surroundinggranularity.md) to determine the extent of the text context that the system requests.

## See Also

### Scoping the document request

- [surroundingGranularity](surroundinggranularity.md): The unit of measurement for the document request’s scope.

# granularityCount (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A count of granularity units that defines the scope of the document request.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger granularityCount;
```

<a id="discussion"></a>

## Discussion

Use this value with [surroundingGranularity](surroundinggranularity.md) to determine the extent of the text context that the system requests.

## See Also

### Scoping the document request

- [surroundingGranularity](surroundinggranularity.md): The unit of measurement for the document request’s scope.
