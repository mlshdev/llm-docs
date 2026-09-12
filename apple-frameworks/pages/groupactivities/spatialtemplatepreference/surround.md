> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplatepreference/surround](https://developer.apple.com/documentation/groupactivities/spatialtemplatepreference/surround)

# surround

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** visionOS 2.0+

An arrangement where the participants sit around the content.

## Declaration

```swift
static let surround: SpatialTemplatePreference
```

<a id="discussion"></a>

## Discussion

This arrangement works best when the content is 3D, because each participant views it from a different angle

For example:

```swift
         A

    B   App   D

         C
```

> **Important**

> This preference will only apply if your app is using a shared volume or an immersive space with no shared window.
>
> If this preference is applied in an unsupported scenario, like when an app is sharing a window, the system will behave as if the [none](none.md) preference was selected.
