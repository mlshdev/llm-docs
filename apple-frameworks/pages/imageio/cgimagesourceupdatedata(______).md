> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourceupdatedata(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourceupdatedata(_:_:_:))

# CGImageSourceUpdateData(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates the data in an incremental image source.

## Declaration

```swift
func CGImageSourceUpdateData(_ isrc: CGImageSource, _ data: CFData, _ final: Bool)
```

## Parameters

- `isrc`: The image source to modify.
- `data`: The updated data for the image source. Each time you call this function, specify all of the accumulated image data so far.
- `final`: A Boolean value that indicates whether the `data` parameter represents the complete data set. Specify `true` if the data is complete or `false` if it isn’t.

<a id="Discussion"></a>

## Discussion

This method updates the state of the image source and its contained images. Call this method one or more times to update the contents of an incremental data source. Each time you call the method, you must specify all of the accumulated image data, not just the new data you received.

## See Also

### Updating an Incremental Image

- [CGImageSourceUpdateDataProvider(\_:\_:\_:)](cgimagesourceupdatedataprovider%28______%29.md): Updates an incremental image source with a new data provider.

# CGImageSourceUpdateData (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates the data in an incremental image source.

## Declaration

```objectivec
extern void CGImageSourceUpdateData(CGImageSourceRef isrc, CFDataRef data, bool final);
```

## Parameters

- `isrc`: The image source to modify.
- `data`: The updated data for the image source. Each time you call this function, specify all of the accumulated image data so far.
- `final`: A Boolean value that indicates whether the `data` parameter represents the complete data set. Specify `true` if the data is complete or `false` if it isn’t.

<a id="Discussion"></a>

## Discussion

This method updates the state of the image source and its contained images. Call this method one or more times to update the contents of an incremental data source. Each time you call the method, you must specify all of the accumulated image data, not just the new data you received.

## See Also

### Updating an Incremental Image

- [CGImageSourceUpdateDataProvider](cgimagesourceupdatedataprovider%28______%29.md): Updates an incremental image source with a new data provider.
