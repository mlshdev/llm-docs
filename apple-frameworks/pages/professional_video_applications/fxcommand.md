> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcommand](https://developer.apple.com/documentation/professional_video_applications/fxcommand)

# FxCommand (Swift)

**Framework:** Professional Video Applications  
**Kind:** Enumeration  
**Availability:** FxPlug 4.1+

Defines the commands that can be performed by the host.

## Declaration

```swift
enum FxCommand
```

## Topics

### Enumeration Cases

- [FxCommand.previousFrame](fxcommand/previousframe.md): Move the playhead back 1 frame.
- [FxCommand.nextFrame](fxcommand/nextframe.md): Move the playhead ahead 1 frame.
- [FxCommand.previousEdit](fxcommand/previousedit.md): Move the playhead to the previous edit in FCPX or the selection in point in Motion.
- [FxCommand.nextEdit](fxcommand/nextedit.md): Move the playhead to the next edit in FCPX or the selection out point in Motion.
- [FxCommand.previousMarker](fxcommand/previousmarker.md): Move the playhead to the previous marker of the currently selected object.
- [FxCommand.nextMarker](fxcommand/nextmarker.md): Move the playhead to the next marker of the currently selected object.
- [FxCommand.previousKeyframe](fxcommand/previouskeyframe.md): Move the playhead to the previous keyframe of the currently selected object.
- [FxCommand.nextKeyframe](fxcommand/nextkeyframe.md): Move the playhead to the next keyframe of the currently selected object.
- [FxCommand.reversePlayback](fxcommand/reverseplayback.md): Jog in reverse (unavailable in Motion).
- [FxCommand.pausePlayback](fxcommand/pauseplayback.md): Pauses playback in FCPX. In Motion, use TogglePlayback instead.
- [FxCommand.forwardPlayback](fxcommand/forwardplayback.md): Jog forward (use TogglePlayback in Motion).
- [FxCommand.togglePlayback](fxcommand/toggleplayback.md): If paused, starts playback; if playing back, pauses.
- [FxCommand.undo](fxcommand/undo.md): Undo the last change.
- [FxCommand.redo](fxcommand/redo.md): Redo the last undone change.
- [FxCommand.toggleWaveforms](fxcommand/togglewaveforms.md): Show the waveforms scope in FCPX (unavailable in Motion).
- [FxCommand.toggleInspectorHeight](fxcommand/toggleinspectorheight.md): Toggles the full-height inspector in FCPX (Motion’s Inspector is always full-height).
- [FxCommand.toggleSidebar](fxcommand/togglesidebar.md): Toggles the Sidebar in FCPX or the Library in Motion.
- [FxCommand.toggleEvents](fxcommand/toggleevents.md): Toggles the event viewer in FCPX or the Media tab in Motion.
- [FxCommand.preferences](fxcommand/preferences.md): Shows the application’s preferences.

### Initializers

- [init(rawValue:)](fxcommand/init%28rawvalue_%29.md)

### Default Implementations

- [Equatable Implementations](fxcommand/equatable-implementations.md)
- [RawRepresentable Implementations](fxcommand/rawrepresentable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Handling and Defining Commands

- [FxCommandHandler](fxcommandhandler.md): Defines the methods a plug-in must implement to be notified of the application’s key binding for common commands.

# FxCommand (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration

Defines the commands that can be performed by the host.

## Declaration

```objectivec
enum FxCommand: NSUInteger;
```

## Topics

### Enumeration Cases

- [kFxCommand_PreviousFrame](fxcommand/previousframe.md): Move the playhead back 1 frame.
- [kFxCommand_NextFrame](fxcommand/nextframe.md): Move the playhead ahead 1 frame.
- [kFxCommand_PreviousEdit](fxcommand/previousedit.md): Move the playhead to the previous edit in FCPX or the selection in point in Motion.
- [kFxCommand_NextEdit](fxcommand/nextedit.md): Move the playhead to the next edit in FCPX or the selection out point in Motion.
- [kFxCommand_PreviousMarker](fxcommand/previousmarker.md): Move the playhead to the previous marker of the currently selected object.
- [kFxCommand_NextMarker](fxcommand/nextmarker.md): Move the playhead to the next marker of the currently selected object.
- [kFxCommand_PreviousKeyframe](fxcommand/previouskeyframe.md): Move the playhead to the previous keyframe of the currently selected object.
- [kFxCommand_NextKeyframe](fxcommand/nextkeyframe.md): Move the playhead to the next keyframe of the currently selected object.
- [kFxCommand_ReversePlayback](fxcommand/reverseplayback.md): Jog in reverse (unavailable in Motion).
- [kFxCommand_PausePlayback](fxcommand/pauseplayback.md): Pauses playback in FCPX. In Motion, use TogglePlayback instead.
- [kFxCommand_ForwardPlayback](fxcommand/forwardplayback.md): Jog forward (use TogglePlayback in Motion).
- [kFxCommand_TogglePlayback](fxcommand/toggleplayback.md): If paused, starts playback; if playing back, pauses.
- [kFxCommand_Undo](fxcommand/undo.md): Undo the last change.
- [kFxCommand_Redo](fxcommand/redo.md): Redo the last undone change.
- [kFxCommand_ToggleWaveforms](fxcommand/togglewaveforms.md): Show the waveforms scope in FCPX (unavailable in Motion).
- [kFxCommand_ToggleInspectorHeight](fxcommand/toggleinspectorheight.md): Toggles the full-height inspector in FCPX (Motion’s Inspector is always full-height).
- [kFxCommand_ToggleSidebar](fxcommand/togglesidebar.md): Toggles the Sidebar in FCPX or the Library in Motion.
- [kFxCommand_ToggleEvents](fxcommand/toggleevents.md): Toggles the event viewer in FCPX or the Media tab in Motion.
- [kFxCommand_Preferences](fxcommand/preferences.md): Shows the application’s preferences.

## See Also

### Handling and Defining Commands

- [FxCommandHandler](fxcommandhandler.md): Defines the methods a plug-in must implement to be notified of the application’s key binding for common commands.
