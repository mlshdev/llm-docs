> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roombuilder/builderror/exceedscenesizelimit](https://developer.apple.com/documentation/roomplan/roombuilder/builderror/exceedscenesizelimit)

# RoomBuilder.BuildError.exceedSceneSizeLimit

**Framework:** RoomPlan  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An error that indicates when the scene size grows past the framework’s limitations.

## Declaration

```swift
case exceedSceneSizeLimit
```

## See Also

### Interpreting the error cause

- [RoomBuilder.BuildError.insufficientInput](insufficientinput.md): An error that indicates the framework expects more captured room data.
- [RoomBuilder.BuildError.invalidInput](invalidinput.md): An error that indicates the framework encounters invalid captured room data.
- [RoomBuilder.BuildError.internalError](internalerror.md): An error that indicates when the framework encounters an unexpected error case.
- [RoomBuilder.BuildError.deviceNotSupported](devicenotsupported.md): An error that indicates that the framework doesn’t support the user’s device.
