> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/preferredtransform](https://developer.apple.com/documentation/avfoundation/avmutablemovie/preferredtransform)

# preferredTransform (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The asset’s transform preference to apply to its visual content during presentation or processing.

## Declaration

```swift
var preferredTransform: CGAffineTransform { get set }
```

<a id="Discussion"></a>

## Discussion

The value is typically, but not always, the identity transform.

## See Also

### Inspecting preferences

- [preferredRate](preferredrate.md): The asset’s rate preference for playing its media.
- [preferredVolume](preferredvolume.md): The asset’s volume preference for playing its audible media.
- [preferredMediaSelection](preferredmediaselection.md): The default media selections for this asset’s media selection groups.

# preferredTransform (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The asset’s transform preference to apply to its visual content during presentation or processing.

## Declaration

```objectivec
@property (nonatomic) CGAffineTransform preferredTransform;
```

<a id="Discussion"></a>

## Discussion

The value is typically, but not always, the identity transform.

## See Also

### Inspecting preferences

- [preferredRate](preferredrate.md): The asset’s rate preference for playing its media.
- [preferredVolume](preferredvolume.md): The asset’s volume preference for playing its audible media.
