> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arpointcloud/identifiers-7p42c](https://developer.apple.com/documentation/arkit/arpointcloud/identifiers-7p42c)

# identifiers

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A list of unique identifiers corresponding to detected feature points.

## Declaration

```objectivec
@property (nonatomic, readonly) const uint64_t * identifiers;
```

<a id="Discussion"></a>

## Discussion

Each identifier in this list corresponds to the point vector at the same index in the [points](points-7mppp.md) array.

## See Also

### Identifying Feature Points

- [count](count.md): The number of points in the point cloud.
- [points](points-7mppp.md): The list of detected points.
