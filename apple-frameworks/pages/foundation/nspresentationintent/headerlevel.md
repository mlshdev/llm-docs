> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspresentationintent/headerlevel](https://developer.apple.com/documentation/foundation/nspresentationintent/headerlevel)

# headerLevel

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The level of a header section.

## Declaration

```objectivec
@property (readonly) NSInteger headerLevel;
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the number of hash marks (`#`) associated with the header. If the intent is not a header, the value of this property is `0`.
