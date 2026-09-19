> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/systemcoordinator/configuration-swift.struct/spatialtemplatepreference

# spatialTemplatePreference

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The preferred arrangement of spatial Personas in your app’s immersive space.

## Declaration

```swift
var spatialTemplatePreference: SpatialTemplatePreference
```

<a id="discussion"></a>

## Discussion

When the system displays spatial Personas, it uses the value of this property to determine how to arrange them around the content in your app’s immersive space. The default value of this property is [none](../../spatialtemplatepreference/none.md) , which lets the system determine placement based on the activity’s content. Specify other options if you prefer a specific arrangement around your app’s content.

## See Also

### Specifying spatial position preferences

- [SpatialTemplatePreference](../../spatialtemplatepreference.md): A structure that specifies the preferred arrangement of participant spatial Personas in a shared simulation space.
