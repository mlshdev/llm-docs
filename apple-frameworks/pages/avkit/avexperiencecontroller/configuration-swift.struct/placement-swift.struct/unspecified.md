> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avexperiencecontroller/configuration-swift.struct/placement-swift.struct/unspecified

# unspecified

**Framework:** AVKit  
**Kind:** Type Property  
**Availability:** visionOS 26.0+

Used as default when no UIScene is specified as a placement.

## Declaration

```swift
static var unspecified: AVExperienceController.Configuration.Placement { get }
```

<a id="discussion"></a>

## Discussion

Experiences will be placed over the UIScene of the original container. If contained within a UIScene, the system will use that scene as a placement, if possible.

## See Also

### Placements

- [over(scene:)](over%28scene_%29.md): Place the video over the provided scene.
