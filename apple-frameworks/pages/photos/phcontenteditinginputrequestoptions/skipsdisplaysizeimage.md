> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginputrequestoptions/skipsdisplaysizeimage](https://developer.apple.com/documentation/photos/phcontenteditinginputrequestoptions/skipsdisplaysizeimage)

# skipsDisplaySizeImage (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Set this value to `true` if you don’t want a `displaySizeImage` on the `PHContentEditingInput`. This can give performance wins when the image will not be used.

## Declaration

```swift
var skipsDisplaySizeImage: Bool { get set }
```

## See Also

### Specifying Edting Request Options

- [canHandleAdjustmentData](canhandleadjustmentdata.md): A block to be called when Photos needs to determine whether your app can continue previous edits made to an asset.
- [originalResourceChoice](originalresourcechoice.md): The original resource to use as the unadjusted base when fulfilling the request.

# skipsDisplaySizeImage (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Set this value to `true` if you don’t want a `displaySizeImage` on the `PHContentEditingInput`. This can give performance wins when the image will not be used.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL skipsDisplaySizeImage;
```

## See Also

### Specifying Edting Request Options

- [canHandleAdjustmentData](canhandleadjustmentdata.md): A block to be called when Photos needs to determine whether your app can continue previous edits made to an asset.
- [originalResourceChoice](originalresourcechoice.md): The original resource to use as the unadjusted base when fulfilling the request.
