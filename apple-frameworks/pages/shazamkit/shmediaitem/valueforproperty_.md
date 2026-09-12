> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem/valueforproperty:](https://developer.apple.com/documentation/shazamkit/shmediaitem/valueforproperty:)

# valueForProperty:

**Interface language:** Objective-C

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses the property for the specified key for reading.

## Declaration

```objectivec
- (id) valueForProperty:(SHMediaItemProperty) property;
```

## Parameters

- `property`: The key for the property.

<a id="return-value"></a>

## Return Value

The value of the property; otherwise, `nil`.

## See Also

### Working with media item properties

- [objectForKeyedSubscript:](subscript%28__%29.md): Accesses the property for the specified key for reading.
- [SHMediaItemProperty](../shmediaitemproperty.md): Constants for the media item property names.
- [timeRanges](timeranges-43654.md): An array of ranges that indicate the offsets within the reference signature that this media item describes.
- [frequencySkewRanges](frequencyskewranges-4yqx.md): An array of ranges that indicate the frequency skews in the reference signature that this media item describes.
- [SHRange](../shrange.md): A half-open interval from a lower bound up to, but not including, an upper bound.
