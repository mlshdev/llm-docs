> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/indexedentity/hideinspotlight](https://developer.apple.com/documentation/appintents/indexedentity/hideinspotlight)

# hideInSpotlight

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value that indicates whether Spotlight prevents the inclusion of the entity in the index.

## Declaration

```swift
var hideInSpotlight: Bool { get }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, Spotlight doesn’t include the entity in search results. The default value of this property is `false`.

## Default Implementations

### IndexedEntity Implementations

- [hideInSpotlight](hideinspotlight-7sp5n.md): A Boolean value that indicates whether Spotlight prevents the inclusion of the entity in the index.
