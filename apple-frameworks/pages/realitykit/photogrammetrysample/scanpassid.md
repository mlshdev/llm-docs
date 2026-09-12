> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysample/scanpassid](https://developer.apple.com/documentation/realitykit/photogrammetrysample/scanpassid)

# scanPassID

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

If captured with `ObjectCaptureSession`, this will contain the ID of the scan pass within the given `sessionID` in which this sample was captured.  Each new scan pass within a specific `sessionID` will have a different `scanPassID` which can be used to differentiate any associated `boundingBox` data since a new bounding box may have been created after flipping an object and starting a new pass. Note that `scanPassID` can only be equated if the `sessionID` is the same – if the `sessionID` of two samples is different but the `scanPassID` is the same, these are semantically different coordinate systems and data between them is not commensurate. Note that for samples not captured with `ObjectCaptureSession` (where `sessionID` is `nil`), this `scanPassID` is also `nil`.

## Declaration

```swift
var scanPassID: Int? { get }
```
