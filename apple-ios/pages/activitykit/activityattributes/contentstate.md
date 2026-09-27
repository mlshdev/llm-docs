> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/activitykit/activityattributes/contentstate

# ContentState

**Framework:** ActivityKit  
**Kind:** Associated Type  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The associated type that describes the dynamic content of a Live Activity.

## Declaration

```swift
associatedtype ContentState : Decodable, Encodable, Hashable
```

<a id="discussion"></a>

## Discussion

The dynamic data of a Live Activity that’s encoded by `ContentState` can’t exceed 4KB.
