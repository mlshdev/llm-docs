> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem/frequencyskewranges-4yqx](https://developer.apple.com/documentation/shazamkit/shmediaitem/frequencyskewranges-4yqx)

# frequencySkewRanges

**Interface language:** Objective-C

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An array of ranges that indicate the frequency skews in the reference signature that this media item describes.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) NSArray<SHRange *> * frequencySkewRanges;
```

```objectivec
@property (atomic, strong, readonly, nonnull) NSArray<SHRange *> * frequencySkewRanges;
```

## See Also

### Working with media item properties

- [objectForKeyedSubscript:](subscript%28__%29.md): Accesses the property for the specified key for reading.
- [valueForProperty:](valueforproperty_.md): Accesses the property for the specified key for reading.
- [SHMediaItemProperty](../shmediaitemproperty.md): Constants for the media item property names.
- [timeRanges](timeranges-43654.md): An array of ranges that indicate the offsets within the reference signature that this media item describes.
- [SHRange](../shrange.md): A half-open interval from a lower bound up to, but not including, an upper bound.
