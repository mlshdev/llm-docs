> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem/subscript(_:)](https://developer.apple.com/documentation/shazamkit/shmediaitem/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses the property for the specified key for reading.

## Declaration

```swift
subscript(key: SHMediaItemProperty) -> Any { get }
```

## Parameters

- `key`: The key for the media item property.

<a id="return-value"></a>

## Return Value

The value of the property; otherwise, `nil`.

## See Also

### Working with media item properties

- [SHMediaItemProperty](../shmediaitemproperty.md): Constants for the media item property names.
- [timeRanges](timeranges-8msna.md): An array of ranges that indicate the offsets within the reference signature that this media item describes.
- [frequencySkewRanges](frequencyskewranges-1j7d3.md): An array of ranges that indicate the frequency skews in the reference signature that this media item describes.

# objectForKeyedSubscript: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses the property for the specified key for reading.

## Declaration

```objectivec
- (id) objectForKeyedSubscript:(SHMediaItemProperty) key;
```

## Parameters

- `key`: The key for the media item property.

<a id="return-value"></a>

## Return Value

The value of the property; otherwise, `nil`.

## See Also

### Working with media item properties

- [valueForProperty:](valueforproperty_.md): Accesses the property for the specified key for reading.
- [SHMediaItemProperty](../shmediaitemproperty.md): Constants for the media item property names.
- [timeRanges](timeranges-43654.md): An array of ranges that indicate the offsets within the reference signature that this media item describes.
- [frequencySkewRanges](frequencyskewranges-4yqx.md): An array of ranges that indicate the frequency skews in the reference signature that this media item describes.
- [SHRange](../shrange.md): A half-open interval from a lower bound up to, but not including, an upper bound.
