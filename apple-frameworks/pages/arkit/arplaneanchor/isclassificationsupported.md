> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/isclassificationsupported](https://developer.apple.com/documentation/arkit/arplaneanchor/isclassificationsupported)

# isClassificationSupported (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A Boolean value that indicates whether plane classification is available on the current device.

## Declaration

```swift
class var isClassificationSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Plane classification is available on iOS devices with A12 or later GPU.

On devices without plane classification support, all plane anchors report a [classification](classification-2hi2p.md) value of  [ARPlaneClassificationNone](../arplaneclassification/arplaneclassificationnone.md) and a [classificationStatus](classificationstatus.md) value of [ARPlaneClassificationStatusNotAvailable](../arplaneclassificationstatus/arplaneclassificationstatusnotavailable.md).

## See Also

### Classifying a Plane

- [classification](classification-2r4x8.md): A general characterization of what kind of real-world surface the plane anchor represents.
- [ARPlaneAnchor.Classification](classification-swift.enum.md): Possible characterizations of real-world surfaces represented by plane anchors.

# classificationSupported (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A Boolean value that indicates whether plane classification is available on the current device.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isClassificationSupported) BOOL classificationSupported;
```

<a id="Discussion"></a>

## Discussion

Plane classification is available on iOS devices with A12 or later GPU.

On devices without plane classification support, all plane anchors report a [classification](classification-2hi2p.md) value of  [ARPlaneClassificationNone](../arplaneclassification/arplaneclassificationnone.md) and a [classificationStatus](classificationstatus.md) value of [ARPlaneClassificationStatusNotAvailable](../arplaneclassificationstatus/arplaneclassificationstatusnotavailable.md).

## See Also

### Classifying a Plane

- [classification](classification-2hi2p.md): A general characterization of what kind of real-world surface the plane anchor represents.
- [ARPlaneClassification](../arplaneclassification.md): Possible characterizations of real-world surfaces represented by plane anchors.
- [classificationStatus](classificationstatus.md): The current state of ARKit’s process for classifying the plane anchor.
- [ARPlaneClassificationStatus](../arplaneclassificationstatus.md): Possible states of ARKit’s process for classifying plane anchors.
