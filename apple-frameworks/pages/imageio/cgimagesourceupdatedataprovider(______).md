> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourceupdatedataprovider(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourceupdatedataprovider(_:_:_:))

# CGImageSourceUpdateDataProvider(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates an incremental image source with a new data provider.

## Declaration

```swift
func CGImageSourceUpdateDataProvider(_ isrc: CGImageSource, _ provider: CGDataProvider, _ final: Bool)
```

## Parameters

- `isrc`: The image source to modify.
- `provider`: The new data provider. The new data provider must provide all the previous data supplied to the image source and any additional new data.
- `final`: A Boolean value that indicates whether the `provider` parameter provides the complete data set. Specify `true` if the data is complete or `false` if it isn’t.

## See Also

### Updating an Incremental Image

- [CGImageSourceUpdateData(\_:\_:\_:)](cgimagesourceupdatedata%28______%29.md): Updates the data in an incremental image source.

# CGImageSourceUpdateDataProvider (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates an incremental image source with a new data provider.

## Declaration

```objectivec
extern void CGImageSourceUpdateDataProvider(CGImageSourceRef isrc, CGDataProviderRef provider, bool final);
```

## Parameters

- `isrc`: The image source to modify.
- `provider`: The new data provider. The new data provider must provide all the previous data supplied to the image source and any additional new data.
- `final`: A Boolean value that indicates whether the `provider` parameter provides the complete data set. Specify `true` if the data is complete or `false` if it isn’t.

## See Also

### Updating an Incremental Image

- [CGImageSourceUpdateData](cgimagesourceupdatedata%28______%29.md): Updates the data in an incremental image source.
