> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcgamepad](https://developer.apple.com/documentation/gamecontroller/gcgamepad)

# GCGamepad (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

The standard set of gamepad controls.

## Declaration

```swift
class GCGamepad
```

<a id="overview"></a>

## Overview

The controls associated with the gamepad profile include the following:

- Two shoulder buttons.
- Four face buttons arranged in a diamond pattern.
- One directional pad (D-pad).

![](https://developer.apple.com/images/com.apple.gamecontroller/media-2556316@2x.png)

## Topics

### Determining the Controller That Owns This Profile

- [controller](gcgamepad/controller.md): Deprecated. The controller this profile is associated with.

### Determining When Any Element in the Profile Changes

- [valueChangedHandler](gcgamepad/valuechangedhandler.md): Deprecated. A block called when any element in the profile changes.

### Reading Shoulder Button Inputs

- [leftShoulder](gcgamepad/leftshoulder.md): Deprecated. The left shoulder button element.
- [rightShoulder](gcgamepad/rightshoulder.md): Deprecated. The right shoulder button element.

### Reading Directional Pad Inputs

- [dpad](gcgamepad/dpad.md): Deprecated. The D-pad element.

### Reading Face Button Inputs

- [buttonA](gcgamepad/buttona.md): Deprecated. The bottom face button.
- [buttonB](gcgamepad/buttonb.md): Deprecated. The right face button.
- [buttonX](gcgamepad/buttonx.md): Deprecated. The left face button.
- [buttonY](gcgamepad/buttony.md): Deprecated. The top face button.

### Saving a Snapshot

- [saveSnapshot()](gcgamepad/savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.

### Constants

- [GCGamepadValueChangedHandler](gcgamepadvaluechangedhandler.md): Deprecated. Signature for the block executed if any element in the gamepad profile changes value.

## Relationships

### Inherits From

- [GCPhysicalInputProfile](gcphysicalinputprofile.md)

### Inherited By

- [GCGamepadSnapshot](gcgamepadsnapshot.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated symbols

- [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCExtendedGamepad](gcextendedgamepad.md) object.
- [GCGamepadSnapshot](gcgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCGamepad](gcgamepad.md) object.
- [GCMicroGamepadSnapshot](gcmicrogamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCMicroGamepad](gcmicrogamepad.md) object.
- [GCExtendedGamepadSnapshotData](gcextendedgamepadsnapshotdata.md): Deprecated.
- [GCMicroGamepadSnapshotData](gcmicrogamepadsnapshotdata.md): Deprecated.
- [GCExtendedGamepadSnapshotDataVersion](gcextendedgamepadsnapshotdataversion.md): Deprecated.
- [GCMicroGamepadSnapshotDataVersion](gcmicrogamepadsnapshotdataversion.md): Deprecated.
- [GCCurrentExtendedGamepadSnapshotDataVersion](gccurrentextendedgamepadsnapshotdataversion.md): Deprecated.
- [GCCurrentMicroGamepadSnapshotDataVersion](gccurrentmicrogamepadsnapshotdataversion.md): Deprecated.
- [GCExtendedGamepadSnapshotDataFromNSData(\_:\_:)](gcextendedgamepadsnapshotdatafromnsdata%28____%29.md): Deprecated.
- [GCMicroGamepadSnapshotDataFromNSData(\_:\_:)](gcmicrogamepadsnapshotdatafromnsdata%28____%29.md): Deprecated.
- [NSDataFromGCExtendedGamepadSnapshotData(\_:)](nsdatafromgcextendedgamepadsnapshotdata%28__%29.md): Deprecated.
- [NSDataFromGCMicroGamepadSnapshotData(\_:)](nsdatafromgcmicrogamepadsnapshotdata%28__%29.md): Deprecated.

# GCGamepad (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

The standard set of gamepad controls.

## Declaration

```objectivec
@interface GCGamepad : GCPhysicalInputProfile
```

<a id="overview"></a>

## Overview

The controls associated with the gamepad profile include the following:

- Two shoulder buttons.
- Four face buttons arranged in a diamond pattern.
- One directional pad (D-pad).

![](https://developer.apple.com/images/com.apple.gamecontroller/media-2556316@2x.png)

## Topics

### Determining the Controller That Owns This Profile

- [controller](gcgamepad/controller.md): Deprecated. The controller this profile is associated with.

### Determining When Any Element in the Profile Changes

- [valueChangedHandler](gcgamepad/valuechangedhandler.md): Deprecated. A block called when any element in the profile changes.

### Reading Shoulder Button Inputs

- [leftShoulder](gcgamepad/leftshoulder.md): Deprecated. The left shoulder button element.
- [rightShoulder](gcgamepad/rightshoulder.md): Deprecated. The right shoulder button element.

### Reading Directional Pad Inputs

- [dpad](gcgamepad/dpad.md): Deprecated. The D-pad element.

### Reading Face Button Inputs

- [buttonA](gcgamepad/buttona.md): Deprecated. The bottom face button.
- [buttonB](gcgamepad/buttonb.md): Deprecated. The right face button.
- [buttonX](gcgamepad/buttonx.md): Deprecated. The left face button.
- [buttonY](gcgamepad/buttony.md): Deprecated. The top face button.

### Saving a Snapshot

- [saveSnapshot](gcgamepad/savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.

### Constants

- [GCGamepadValueChangedHandler](gcgamepadvaluechangedhandler.md): Deprecated. Signature for the block executed if any element in the gamepad profile changes value.

## Relationships

### Inherits From

- [GCPhysicalInputProfile](gcphysicalinputprofile.md)

### Inherited By

- [GCGamepadSnapshot](gcgamepadsnapshot.md)

## See Also

### Deprecated symbols

- [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCExtendedGamepad](gcextendedgamepad.md) object.
- [GCGamepadSnapshot](gcgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCGamepad](gcgamepad.md) object.
- [GCMicroGamepadSnapshot](gcmicrogamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCMicroGamepad](gcmicrogamepad.md) object.
- [GCExtendedGamepadSnapshotData](gcextendedgamepadsnapshotdata.md): Deprecated.
- [GCMicroGamepadSnapshotData](gcmicrogamepadsnapshotdata.md): Deprecated.
- [GCExtendedGamepadSnapshotDataVersion](gcextendedgamepadsnapshotdataversion.md): Deprecated.
- [GCMicroGamepadSnapshotDataVersion](gcmicrogamepadsnapshotdataversion.md): Deprecated.
- [GCCurrentExtendedGamepadSnapshotDataVersion](gccurrentextendedgamepadsnapshotdataversion.md): Deprecated.
- [GCCurrentMicroGamepadSnapshotDataVersion](gccurrentmicrogamepadsnapshotdataversion.md): Deprecated.
- [GCExtendedGamepadSnapshotDataFromNSData](gcextendedgamepadsnapshotdatafromnsdata%28____%29.md): Deprecated.
- [GCMicroGamepadSnapshotDataFromNSData](gcmicrogamepadsnapshotdatafromnsdata%28____%29.md): Deprecated.
- [NSDataFromGCExtendedGamepadSnapshotData](nsdatafromgcextendedgamepadsnapshotdata%28__%29.md): Deprecated.
- [NSDataFromGCMicroGamepadSnapshotData](nsdatafromgcmicrogamepadsnapshotdata%28__%29.md): Deprecated.
