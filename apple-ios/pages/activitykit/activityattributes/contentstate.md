> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityattributes/contentstate](https://developer.apple.com/documentation/activitykit/activityattributes/contentstate)

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
