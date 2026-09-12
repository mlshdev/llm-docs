> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arpointcloud/identifiers-508tf](https://developer.apple.com/documentation/arkit/arpointcloud/identifiers-508tf)

# identifiers

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A list of unique identifiers corresponding to detected feature points.

## Declaration

```swift
@nonobjc var identifiers: [UInt64] { get }
```

<a id="Discussion"></a>

## Discussion

Each identifier in this list corresponds to the point vector at the same index in the [points](points-4vkif.md) array.

## See Also

### Identifying Feature Points

- [points](points-4vkif.md): The list of detected points.
