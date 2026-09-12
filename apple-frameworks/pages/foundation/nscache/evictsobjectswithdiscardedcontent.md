> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscache/evictsobjectswithdiscardedcontent](https://developer.apple.com/documentation/foundation/nscache/evictsobjectswithdiscardedcontent)

# evictsObjectsWithDiscardedContent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Whether the cache will automatically evict discardable-content objects whose content has been discarded.

## Declaration

```swift
var evictsObjectsWithDiscardedContent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the cache will evict a discardable-content object after its content is discarded. If [false](https://developer.apple.com/documentation/swift/false), it will not. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Discardable Content

- [NSDiscardableContent](../nsdiscardablecontent.md): You implement this protocol when a class’s objects have subcomponents that can be discarded when not being used, thereby giving an application a smaller memory footprint.

# evictsObjectsWithDiscardedContent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Whether the cache will automatically evict discardable-content objects whose content has been discarded.

## Declaration

```objectivec
@property BOOL evictsObjectsWithDiscardedContent;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the cache will evict a discardable-content object after its content is discarded. If [false](https://developer.apple.com/documentation/swift/false), it will not. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Discardable Content

- [NSDiscardableContent](../nsdiscardablecontent.md): You implement this protocol when a class’s objects have subcomponents that can be discarded when not being used, thereby giving an application a smaller memory footprint.
