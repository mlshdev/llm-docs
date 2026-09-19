> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccamerafile/burstfavorite

# burstFavorite (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates this file is the burst favorite in a burst.

## Declaration

```swift
var burstFavorite: Bool { get }
```

## See Also

### Inspecting a File in a Burst

- [firstPicked](firstpicked.md): A Boolean value that indicates whether a file is autopicked by Photos to represent the burst.
- [burstUUID](burstuuid.md): The burst UUID of the file if it is in a burst.
- [burstPicked](burstpicked.md): A Boolean value that indicates whether this file is user picked in a burst.

# burstFavorite (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates this file is the burst favorite in a burst.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL burstFavorite;
```

## See Also

### Inspecting a File in a Burst

- [firstPicked](firstpicked.md): A Boolean value that indicates whether a file is autopicked by Photos to represent the burst.
- [burstUUID](burstuuid.md): The burst UUID of the file if it is in a burst.
- [burstPicked](burstpicked.md): A Boolean value that indicates whether this file is user picked in a burst.
