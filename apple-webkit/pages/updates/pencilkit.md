> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/updates/pencilkit](https://developer.apple.com/documentation/updates/pencilkit)

# PencilKit updates

**Framework:** Updates  
**Kind:** Article

Learn about important changes to PencilKit.

<a id="Overview"></a>

## Overview

Browse notable changes in [PencilKit](https://developer.apple.com/documentation/pencilkit).

<a id="June-2026"></a>

## June 2026

<a id="Strokes"></a>

### Strokes

- Access and assign a stable identity to strokes and stroke paths using the `id` property on [PKStroke](https://developer.apple.com/documentation/pencilkit/pkstroke-swift.struct) and [PKStrokePath](https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct), which conform to `Identifiable`.
- Select strokes programmatically and respond to selection changes using the [selection](https://developer.apple.com/documentation/pencilkit/pkcanvasview/selection) property and the [canvasViewSelectionDidChange(\_:)](https://developer.apple.com/documentation/pencilkit/pkcanvasviewdelegate/canvasviewselectiondidchange%28_:%29) delegate method.
- Erase portions of a drawing along a path using [erasePath(\_:mask:transform:)](https://developer.apple.com/documentation/pencilkit/pkdrawing-swift.struct/erasepath%28_:mask:transform:%29-shn), or get a new drawing with the erasure applied using [erasingPath(\_:mask:transform:)](https://developer.apple.com/documentation/pencilkit/pkdrawing-swift.struct/erasingpath%28_:mask:transform:%29-9dpi9).
- Convert a stroke path to a `CGPath` using the [bezierRepresentation](https://developer.apple.com/documentation/pencilkit/pkstrokepathreference/bezierrepresentation) property, or create a stroke path from a bezier path using [init(bezierPath:creationDate:pointProvider:)](https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct/init%28bezierpath:creationdate:pointprovider:%29).

<a id="Handwriting-recognition"></a>

### Handwriting recognition

- Recognize handwritten text, search within ink, and generate indexable string content using [PKStrokeRecognizer](https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer).

## See Also

### Technology and frameworks

- [Accelerate updates](accelerate.md): Learn about important changes to Accelerate.
- [Accessibility updates](accessibility.md): Learn about important changes to Accessibility.
- [ActivityKit updates](activitykit.md): Learn about important changes in ActivityKit.
- [AdAttributionKit Updates](adattributionkit.md): Learn about important changes to AdAttributionKit.
- [App Clips updates](appclips.md): Learn about important changes in App Clips.
- [App Intents updates](appintents.md): Learn about important changes in App Intents.
- [AppKit updates](appkit.md): Learn about important changes to AppKit.
- [Apple Intelligence updates](apple-intelligence.md): Learn about important changes to Apple Intelligence.
- [AppleMapsServerAPI Updates](applemapsserverapi.md): Learn about important changes to AppleMapsServerAPI.
- [Apple Pencil updates](applepencil.md): Learn about important changes to Apple Pencil.
- [ARKit updates](arkit.md): Learn about important changes to ARKit.
- [Audio Toolbox updates](audiotoolbox.md): Learn about important changes to Audio Toolbox.
- [AuthenticationServices updates](authenticationservices.md): Learn about important changes to AuthenticationServices.
- [AVFAudio updates](avfaudio.md): Learn about important changes to AVFAudio.
- [AVFoundation updates](avfoundation.md): Learn about important changes to AVFoundation.
