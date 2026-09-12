> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptionsresizemode/fast](https://developer.apple.com/documentation/photos/phimagerequestoptionsresizemode/fast)

# PHImageRequestOptionsResizeMode.fast (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Photos efficiently resizes the image to a size similar to, or slightly larger than, the target size.

## Declaration

```swift
case fast
```

<a id="Discussion"></a>

## Discussion

With this option, Photos can use image subsampling to quickly provide an image at a size roughly matching the target size.

## See Also

### Constants

- [PHImageRequestOptionsResizeMode.none](none.md): Photos does not resize the image asset.
- [PHImageRequestOptionsResizeMode.exact](exact.md): Photos resizes the image to match the target size exactly.

# PHImageRequestOptionsResizeModeFast (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Photos efficiently resizes the image to a size similar to, or slightly larger than, the target size.

## Declaration

```objectivec
PHImageRequestOptionsResizeModeFast
```

<a id="Discussion"></a>

## Discussion

With this option, Photos can use image subsampling to quickly provide an image at a size roughly matching the target size.

## See Also

### Constants

- [PHImageRequestOptionsResizeModeNone](none.md): Photos does not resize the image asset.
- [PHImageRequestOptionsResizeModeExact](exact.md): Photos resizes the image to match the target size exactly.
