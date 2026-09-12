> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommandwithrequiredresponse/requiredresponse](https://developer.apple.com/documentation/matter/mtrcommandwithrequiredresponse/requiredresponse)

# requiredResponse (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The response that represents this command succeeding.

## Declaration

```swift
var requiredResponse: [NSNumber : [String : Any]]? { get set }
```

<a id="discussion"></a>

## Discussion

If this is nil, that indicates that the invoke is considered successful if it does not result in an error status response.

If this is is not nil, then the invoke is considered successful if the response is a data response and for each entry in the provided requiredResponse the field whose field ID matches the key of the entry has a value that equals the value of the entry.  Values of entries are data-value dictionaries.

# requiredResponse (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The response that represents this command succeeding.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSNumber *,NSDictionary<NSString *,id> *> * requiredResponse;
```

<a id="discussion"></a>

## Discussion

If this is nil, that indicates that the invoke is considered successful if it does not result in an error status response.

If this is is not nil, then the invoke is considered successful if the response is a data response and for each entry in the provided requiredResponse the field whose field ID matches the key of the entry has a value that equals the value of the entry.  Values of entries are data-value dictionaries.
