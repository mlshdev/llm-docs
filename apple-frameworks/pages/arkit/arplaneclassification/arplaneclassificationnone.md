> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneclassification/arplaneclassificationnone](https://developer.apple.com/documentation/arkit/arplaneclassification/arplaneclassificationnone)

# ARPlaneClassificationNone

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

No classification is available for the plane anchor.

## Declaration

```objectivec
ARPlaneClassificationNone
```

<a id="Discussion"></a>

## Discussion

When a plane anchor has no classification, the [classificationStatus](../arplaneanchor/classificationstatus.md) property indicates the reason: the classification process might be unavailable or incomplete, or ARKit may not have been able to conclusively identify the plane.

## See Also

### Plane Classifications

- [ARPlaneClassificationWall](arplaneclassificationwall.md): The plane anchor represents a real-world wall or similar large vertical surface.
- [ARPlaneClassificationFloor](arplaneclassificationfloor.md): The plane anchor represents a real-world floor, ground plane, or similar large horizontal surface.
- [ARPlaneClassificationCeiling](arplaneclassificationceiling.md): The plane anchor represents a real-world ceiling or similar overhead horizontal surface.
- [ARPlaneClassificationTable](arplaneclassificationtable.md): The plane anchor represents a real-world table, desk, bar, or similar flat surface.
- [ARPlaneClassificationSeat](arplaneclassificationseat.md): The plane anchor represents a real-world chair, stool, bench or similar flat surface.
- [ARPlaneClassificationDoor](arplaneclassificationdoor.md): The plane anchor represents a real-world door, or similar archway.
- [ARPlaneClassificationWindow](arplaneclassificationwindow.md): The plane anchor fits the description of a real-world window.
