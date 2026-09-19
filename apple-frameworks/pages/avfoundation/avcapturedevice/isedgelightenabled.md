> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/isedgelightenabled

# isEdgeLightEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+

A class property indicating whether the Edge Light feature is currently enabled in Control Center.

## Declaration

```swift
class var isEdgeLightEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

This readonly property changes to reflect the Edge Light state in Control Center. It is key-value observable. On iOS, Edge Light only applies to video conferencing apps by default (apps that use “voip” as one of their UIBackgroundModes). Non video conferencing apps may opt in for Edge Light by adding the following key to their Info.plist: NSCameraEdgeLightEnabled

# edgeLightEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+

A class property indicating whether the Edge Light feature is currently enabled in Control Center.

## Declaration

```objectivec
@property (class, readonly, getter=isEdgeLightEnabled) BOOL edgeLightEnabled;
```

<a id="discussion"></a>

## Discussion

This readonly property changes to reflect the Edge Light state in Control Center. It is key-value observable. On iOS, Edge Light only applies to video conferencing apps by default (apps that use “voip” as one of their UIBackgroundModes). Non video conferencing apps may opt in for Edge Light by adding the following key to their Info.plist: NSCameraEdgeLightEnabled
