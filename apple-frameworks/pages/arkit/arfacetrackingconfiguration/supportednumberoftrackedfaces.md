> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arfacetrackingconfiguration/supportednumberoftrackedfaces

# supportedNumberOfTrackedFaces (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The maximum number of faces that the framework can track.

## Declaration

```swift
class var supportedNumberOfTrackedFaces: Int { get }
```

<a id="Discussion"></a>

## Discussion

Do not exceed this value when you set [maximumNumberOfTrackedFaces](maximumnumberoftrackedfaces.md).

## See Also

### Tracking Multiple Faces

- [maximumNumberOfTrackedFaces](maximumnumberoftrackedfaces.md): The number of faces to track during the session.

# supportedNumberOfTrackedFaces (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The maximum number of faces that the framework can track.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSInteger supportedNumberOfTrackedFaces;
```

<a id="Discussion"></a>

## Discussion

Do not exceed this value when you set [maximumNumberOfTrackedFaces](maximumnumberoftrackedfaces.md).

## See Also

### Tracking Multiple Faces

- [maximumNumberOfTrackedFaces](maximumnumberoftrackedfaces.md): The number of faces to track during the session.
