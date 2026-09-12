> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssuggestionitemresponse/phase-swift.enum](https://developer.apple.com/documentation/appkit/nssuggestionitemresponse/phase-swift.enum)

# NSSuggestionItemResponse.Phase

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Describes the different possible phases of results

## Declaration

```swift
enum Phase
```

## Topics

### Enumeration Cases

- [NSSuggestionItemResponse.Phase.final](phase-swift.enum/final.md): The collection of items represents a final set of results for the request. The user can expect these results to be stable until their search request changes.
- [NSSuggestionItemResponse.Phase.intermediate](phase-swift.enum/intermediate.md): The collection of items represent an intermediate (non-final) set of results. The user can expect to potentially see more results in a short period of time.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
