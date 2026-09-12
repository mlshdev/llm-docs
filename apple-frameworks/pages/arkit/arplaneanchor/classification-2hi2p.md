> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/classification-2hi2p](https://developer.apple.com/documentation/arkit/arplaneanchor/classification-2hi2p)

# classification

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A general characterization of what kind of real-world surface the plane anchor represents.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ARPlaneClassification classification;
```

<a id="Discussion"></a>

## Discussion

On supported devices, ARKit automatically attempts to characterize each detected plane, describing it as a real-world surface such as a wall, floor, or table. You can then use this information to enhance the realism of your AR experience; for example, by placing certain virtual content only on floors.

Plane classification can take longer than plane detection, and ARKit reports classifications only for planes where it has a high confidence in the result. Use this property together with the [classificationStatus](classificationstatus.md) property to keep track of ARKit’s classification process:

- If ARKit is still working to classify a plane, the classification is [ARPlaneClassificationNone](../arplaneclassification/arplaneclassificationnone.md) and the status is [ARPlaneClassificationStatusUndetermined](../arplaneclassificationstatus/arplaneclassificationstatusundetermined.md).
- If ARKit cannot characterize a plane with high confidence, the classification is [ARPlaneClassificationNone](../arplaneclassification/arplaneclassificationnone.md) and the status is [ARPlaneClassificationStatusUnknown](../arplaneclassificationstatus/arplaneclassificationstatusunknown.md).

Plane classification is available only on iPhone XS, iPhone XS Max, and iPhone XR. Before using classification results, check the [classificationSupported](isclassificationsupported.md) class property to make sure you’re on a supported device.

## See Also

### Classifying a Plane

- [classificationSupported](isclassificationsupported.md): A Boolean value that indicates whether plane classification is available on the current device.
- [ARPlaneClassification](../arplaneclassification.md): Possible characterizations of real-world surfaces represented by plane anchors.
- [classificationStatus](classificationstatus.md): The current state of ARKit’s process for classifying the plane anchor.
- [ARPlaneClassificationStatus](../arplaneclassificationstatus.md): Possible states of ARKit’s process for classifying plane anchors.
