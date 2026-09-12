> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier)

# NotificationCenter.MessageIdentifier

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An optional identifier to associate a given message with a given type.

## Declaration

```swift
protocol MessageIdentifier
```

<a id="overview"></a>

## Overview

Implement a `MessageIdentifier` to provide a typed, ergonomic experience at the call point, as described in [SE-0299](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0299-extend-generic-static-member-lookup.md).

For example, given `ExampleMessage` with a `Subject` called `ExampleSubject`:

```swift
extension NotificationCenter.MessageIdentifier where Self == NotificationCenter.BaseMessageIdentifier<ExampleMessage> {
    static var eventDidOccur: Self { .init() }
}
```

This simplifies the call point for clients, as seen here:

```swift
let token = center.addObserver(of: exampleSubject, for: .eventDidOccur) { ... }
```

## Topics

### Declaring the message type

- [MessageType](messageidentifier/messagetype.md)

### Identifying cookie storage messages

- [cookiesChanged](messageidentifier/cookieschanged.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<HTTPCookieStorage.CookiesChangedMessage>`. An identifier for a message about a cookie storage instance’s cookies changing.

### Identifying undo manager messages

- [willUndoChange](messageidentifier/willundochange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.WillUndoChangeMessage>`. An identifier for a message about an undo manager preparing to perform an undo.
- [didUndoChange](messageidentifier/didundochange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.DidUndoChangeMessage>`. An identifier for a message about an undo manager having performed an undo.
- [willRedoChange](messageidentifier/willredochange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.WillRedoChangeMessage>`. An identifier for a message about an undo manager preparing to perform a redo.
- [didRedoChange](messageidentifier/didredochange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.DidRedoChangeMessage>`. An identifier for a message about an undo manager having performed a redo.
- [checkpoint](messageidentifier/checkpoint.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.CheckpointMessage>`. An identifier for a message about an undo manager reaching a checkpoint.
- [didOpenUndoGroup](messageidentifier/didopenundogroup.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.DidOpenUndoGroupMessage>`. An identifier for a message about an undo manager having opened an undo group.
- [willCloseUndoGroup](messageidentifier/willcloseundogroup.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.WillCloseUndoGroupMessage>`. An identifier for a message about an undo manager preparing to close an undo group.
- [didCloseUndoGroup](messageidentifier/didcloseundogroup.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.DidCloseUndoGroupMessage>`. An identifier for a message about an undo manager having closed an undo group.

### Identifying defaults messages

- [didChange](messageidentifier/didchange-187tw.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UserDefaults.DidChangeMessage>`. An identifier for a message about a change in a user defaults setting.
- [sizeLimitExceeded](messageidentifier/sizelimitexceeded.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UserDefaults.SizeLimitExceededMessage>`. An identifier for a message about a user defaults database exceeding its maximum size.

### Identifying metadata query messages

- [didStartGathering](messageidentifier/didstartgathering.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMetadataQuery.DidStartGatheringMessage>`. An identifier for a message about a metadata query that is starting its initial result gathering.
- [didFinishGathering](messageidentifier/didfinishgathering.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMetadataQuery.DidFinishGatheringMessage>`. An identifier for a message about a metadata query that finished its initial result gathering.

### Identifying calendar, date, and time zone messages

- [calendarDayChanged](messageidentifier/calendardaychanged.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Calendar.CalendarDayChangedMessage>`. An identifier for a message about a change in calendar day.
- [systemClockDidChange](messageidentifier/systemclockdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Date.SystemClockDidChangeMessage>`. An identifier for a message about a change in the system clock.
- [systemTimeZoneDidChange](messageidentifier/systemtimezonedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<TimeZone.SystemTimeZoneDidChangeMessage>`. An identifier for a message about a change in the system time zone.

### Identifying locale messages

- [currentLocaleDidChange](messageidentifier/currentlocaledidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Locale.CurrentLocaleDidChangeMessage>`. An identifier for a message about a change in current locale.

### Identifying bundle messages

- [didLoad](messageidentifier/didload.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Bundle.DidLoadMessage>`. An identifier for a message about a bundle dynamically loading a class.

### Identifying process info messages

- [powerStateDidChange](messageidentifier/powerstatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<ProcessInfo.PowerStateDidChangeMessage>`. An identifier for a message about a power state change.
- [thermalStateDidChange](messageidentifier/thermalstatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<ProcessInfo.ThermalStateDidChangeMessage>`. An identifier for a message about a thermal state change.
- [didTerminate](messageidentifier/didterminate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Process.DidTerminateMessage>`. An identifier for a message about a stopped task.

### Identifying file handle messages

- [connectionAccepted](messageidentifier/connectionaccepted.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<FileHandle.ConnectionAcceptedMessage>`. An identifier for a message about a file handle accepting a connection.
- [dataAvailable](messageidentifier/dataavailable.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<FileHandle.DataAvailableMessage>`. An identifier for a message about a file handle having data available for reading.
- [readToEndOfFileCompletion](messageidentifier/readtoendoffilecompletion.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<FileHandle.ReadToEndOfFileCompletionMessage>`. An identifier for a message about a file handle having reached the end of a file or communication channel.
- [readCompletion](messageidentifier/readcompletion.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<FileHandle.ReadCompletionMessage>`. An identifier for a message about a file handle having read the currently available data from a file or communication channel.

### Identifying port messages

- [didBecomeInvalid](messageidentifier/didbecomeinvalid.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Port.DidBecomeInvalidMessage>`. An identifier for a message about a port becoming invalid.

### Identifying file manager messages

- [ubiquityIdentityDidChange](messageidentifier/ubiquityidentitydidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<FileManager.UbiquityIdentityDidChangeMessage>`. An identifier for a message about a file manager’s ubiquity identity changing.

### Identifying bundle resource request messages

- [lowDiskSpace](messageidentifier/lowdiskspace.md): Deprecated. Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSBundleResourceRequest.LowDiskSpaceMessage>`. An identifier for a message about the available disk space getting low.

### Identifying extension messages

- [didBecomeActive](messageidentifier/didbecomeactive-79dvm.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.DidBecomeActiveMessage>`. An identifier for a message about a host app moving from the inactive to the active state.
- [willResignActive](messageidentifier/willresignactive-9z4xc.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.WillResignActiveMessage>`. An identifier for a message about a host app moving from the active to the inactive state.
- [didEnterBackground](messageidentifier/didenterbackground-5gdtk.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.DidEnterBackgroundMessage>`. An identifier for a message about a host app beginning to run in the background.
- [willEnterForeground](messageidentifier/willenterforeground-p1og.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSExtensionContext.WillEnterForegroundMessage>`. An identifier for a message about a host app preparing to run in the foreground.

### Identifying UIKit accessibility messages

- [switchControlStatusDidChange](messageidentifier/switchcontrolstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.SwitchControlStatusDidChangeMessage>`.
- [elementFocused](messageidentifier/elementfocused.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.ElementFocusedMessage>`.
- [reduceTransparencyStatusDidChange](messageidentifier/reducetransparencystatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.ReduceTransparencyStatusDidChangeMessage>`.
- [announcementDidFinish](messageidentifier/announcementdidfinish.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.AnnouncementDidFinishMessage>`.
- [boldTextStatusDidChange](messageidentifier/boldtextstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.BoldTextStatusDidChangeMessage>`.
- [closedCaptioningStatusDidChange](messageidentifier/closedcaptioningstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.ClosedCaptioningStatusDidChangeMessage>`.
- [darkerSystemColorsStatusDidChange](messageidentifier/darkersystemcolorsstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.DarkerSystemColorsStatusDidChangeMessage>`.
- [grayscaleStatusDidChange](messageidentifier/grayscalestatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.GrayscaleStatusDidChangeMessage>`.
- [invertColorsStatusDidChange](messageidentifier/invertcolorsstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.InvertColorsStatusDidChangeMessage>`.
- [assistiveTouchStatusDidChange](messageidentifier/assistivetouchstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.AssistiveTouchStatusDidChangeMessage>`.
- [guidedAccessStatusDidChange](messageidentifier/guidedaccessstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.GuidedAccessStatusDidChangeMessage>`.
- [monoAudioStatusDidChange](messageidentifier/monoaudiostatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.MonoAudioStatusDidChangeMessage>`.
- [speakScreenStatusDidChange](messageidentifier/speakscreenstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.SpeakScreenStatusDidChangeMessage>`.
- [speakSelectionStatusDidChange](messageidentifier/speakselectionstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.SpeakSelectionStatusDidChangeMessage>`.
- [hearingDevicePairedEarDidChange](messageidentifier/hearingdevicepairedeardidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.HearingDevicePairedEarDidChangeMessage>`.
- [reduceMotionStatusDidChange](messageidentifier/reducemotionstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.ReduceMotionStatusDidChangeMessage>`.
- [shakeToUndoDidChange](messageidentifier/shaketoundodidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.ShakeToUndoDidChangeMessage>`.
- [voiceOverStatusDidChange](messageidentifier/voiceoverstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.VoiceOverStatusDidChangeMessage>`.
- [buttonShapesEnabledStatusDidChange](messageidentifier/buttonshapesenabledstatusdidchange.md): Deprecated. Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIAccessibility.ButtonShapesEnabledStatusDidChangeMessage>`.

### Identifying UIKit app life cycle messages

- [didFinishLaunching](messageidentifier/didfinishlaunching.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.DidFinishLaunchingMessage>`.
- [didBecomeActive](messageidentifier/didbecomeactive-2hcfs.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.DidBecomeActiveMessage>`.
- [didEnterBackground](messageidentifier/didenterbackground-1u5sm.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.DidEnterBackgroundMessage>`.
- [willEnterForeground](messageidentifier/willenterforeground-95zi8.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.WillEnterForegroundMessage>`.
- [willResignActive](messageidentifier/willresignactive-4rf2p.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.WillResignActiveMessage>`.
- [didReceiveMemoryWarning](messageidentifier/didreceivememorywarning.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.DidReceiveMemoryWarningMessage>`.
- [significantTimeChange](messageidentifier/significanttimechange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.SignificantTimeChangeMessage>`.
- [backgroundRefreshStatusDidChange](messageidentifier/backgroundrefreshstatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.BackgroundRefreshStatusDidChangeMessage>`.
- [userDidTakeScreenshot](messageidentifier/userdidtakescreenshot.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.UserDidTakeScreenshotMessage>`.

### Identifying UIKit content size messages

- [contentSizeCategoryDidChange](messageidentifier/contentsizecategorydidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIContentSizeCategory.DidChangeMessage>`.

### Identifying UIKIt device messages

- [batteryLevelDidChange](messageidentifier/batteryleveldidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.BatteryLevelDidChangeMessage>`.
- [batteryStateDidChange](messageidentifier/batterystatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.BatteryStateDidChangeMessage>`.
- [orientationDidChange](messageidentifier/orientationdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.OrientationDidChangeMessage>`.
- [proximityStateDidChange](messageidentifier/proximitystatedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDevice.ProximityStateDidChangeMessage>`.

### Identifying UIKit document messages

- [stateChanged](messageidentifier/statechanged.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDocument.StateChangedMessage>`.

### Identifying UIKit pasteboard messages

- [changed](messageidentifier/changed-28zxj.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIPasteboard.ChangedMessage>`.
- [removed](messageidentifier/removed.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIPasteboard.RemovedMessage>`.

### Identifying UIKit responder messages

- [keyboardWillChangeFrame](messageidentifier/keyboardwillchangeframe.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillChangeFrameMessage>`.
- [keyboardDidChangeFrame](messageidentifier/keyboarddidchangeframe.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidChangeFrameMessage>`.
- [keyboardWillHide](messageidentifier/keyboardwillhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillHideMessage>`.
- [keyboardDidHide](messageidentifier/keyboarddidhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidHideMessage>`.
- [keyboardWillShow](messageidentifier/keyboardwillshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillShowMessage>`.
- [keyboardDidShow](messageidentifier/keyboarddidshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidShowMessage>`.

### Identifying UIKit screen messages

- [brightnessDidChange](messageidentifier/brightnessdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.BrightnessDidChangeMessage>`.
- [modeDidChange](messageidentifier/modedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.ModeDidChangeMessage>`.
- [capturedDidChange](messageidentifier/captureddidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.CapturedDidChangeMessage>`.
- [referenceDisplayModeStatusDidChange](messageidentifier/referencedisplaymodestatusdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScreen.ReferenceDisplayModeStatusDidChangeMessage>`.

### Identifying UIKit text field messages

- [textDidBeginEditing](messageidentifier/textdidbeginediting-7lt1k.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextField.TextDidBeginEditingMessage>`.
- [textDidChange](messageidentifier/textdidchange-9363k.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextField.TextDidChangeMessage>`.
- [textDidEndEditing](messageidentifier/textdidendediting-4r8fw.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextField.TextDidEndEditingMessage>`.

### Identifying UIKit text input mode messages

- [currentInputModeDidChange](messageidentifier/currentinputmodedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextInputMode.CurrentInputModeDidChangeMessage>`.

### Identifying UIKit text view messages

- [textDidBeginEditing](messageidentifier/textdidbeginediting-9y8tn.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextView.TextDidBeginEditingMessage>`.
- [textDidChange](messageidentifier/textdidchange-8ns63.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextView.TextDidChangeMessage>`.
- [textDidEndEditing](messageidentifier/textdidendediting-6cmke.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextView.TextDidEndEditingMessage>`.

### Identifying UIKit view controller messages

- [didBecomeVisible](messageidentifier/didbecomevisible.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIWindow.DidBecomeVisibleMessage>`.
- [didBecomeHidden](messageidentifier/didbecomehidden.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIWindow.DidBecomeHiddenMessage>`.
- [showDetailTargetDidChange](messageidentifier/showdetailtargetdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIViewController.ShowDetailTargetDidChangeMessage>`.

### Identifying UIKit focus messages

- [movementDidFail](messageidentifier/movementdidfail.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIFocusSystem.MovementDidFailMessage>`.

### Identifying UIKit pointer lock state messages

- [didChange](messageidentifier/didchange-7wty5.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIPointerLockState.DidChangeMessage>`.

### Identifying UIKit scene messages

- [systemProtectionDidChange](messageidentifier/systemprotectiondidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.SystemProtectionDidChangeMessage>`.
- [willConnect](messageidentifier/willconnect.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.WillConnectMessage>`.
- [willEnterForeground](messageidentifier/willenterforeground-992xq.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.WillEnterForegroundMessage>`.
- [didActivate](messageidentifier/didactivate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.DidActivateMessage>`.
- [willDeactivate](messageidentifier/willdeactivate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.WillDeactivateMessage>`.
- [didEnterBackground](messageidentifier/didenterbackground-5fqw0.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIScene.DidEnterBackgroundMessage>`.

### Identifying AppKit workspace messages

- [didHideApplication](messageidentifier/didhideapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidHideApplicationMessage>`.
- [didUnhideApplication](messageidentifier/didunhideapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidUnhideApplicationMessage>`.
- [willLaunchApplication](messageidentifier/willlaunchapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.WillLaunchApplicationMessage>`.
- [didLaunchApplication](messageidentifier/didlaunchapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidLaunchApplicationMessage>`.
- [willSleep](messageidentifier/willsleep.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.WillSleepMessage>`.
- [didWake](messageidentifier/didwake.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidWakeMessage>`.
- [didTerminateApplication](messageidentifier/didterminateapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidTerminateApplicationMessage>`.
- [didMountVolume](messageidentifier/didmountvolume.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidMountVolumeMessage>`.
- [willUnmountVolume](messageidentifier/willunmountvolume.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.WillUnmountVolumeMessage>`.
- [didUnmountVolume](messageidentifier/didunmountvolume.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidUnmountVolumeMessage>`.
- [didActivateApplication](messageidentifier/didactivateapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidActivateApplicationMessage>`.
- [didDeactivateApplication](messageidentifier/diddeactivateapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidDeactivateApplicationMessage>`.
- [didRenameVolume](messageidentifier/didrenamevolume.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidRenameVolumeMessage>`.
- [sessionDidBecomeActive](messageidentifier/sessiondidbecomeactive.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.SessionDidBecomeActiveMessage>`.
- [sessionDidResignActive](messageidentifier/sessiondidresignactive.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.SessionDidResignActiveMessage>`.
- [didChangeFileLabels](messageidentifier/didchangefilelabels.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidChangeFileLabelsMessage>`.
- [screensDidSleep](messageidentifier/screensdidsleep.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.ScreensDidSleepMessage>`.
- [screensDidWake](messageidentifier/screensdidwake.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.ScreensDidWakeMessage>`.
- [activeSpaceDidChange](messageidentifier/activespacedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.ActiveSpaceDidChangeMessage>`.
- [accessibilityDisplayOptionsDidChange](messageidentifier/accessibilitydisplayoptionsdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.AccessibilityDisplayOptionsDidChangeMessage>`.
- [shouldBeginSuppressingHighDynamicRangeContent](messageidentifier/shouldbeginsuppressinghighdynamicrangecontent.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.ShouldBeginSuppressingHighDynamicRangeContent>`.
- [shouldEndSuppressingHighDynamicRangeContent](messageidentifier/shouldendsuppressinghighdynamicrangecontent.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.ShouldEndSuppressingHighDynamicRangeContent>`.

### Identifying EventKit messages

- [changed](messageidentifier/changed-50yz5.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<EKEventStore.EventStoreChanged>`. A notification posted when changes are made to the Calendar or Reminders database.

### Identifying iTunes library messages

- [didChange](messageidentifier/didchange-1coqh.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<DidChangeLibraryMessage>`.

### Type Properties

- [accessoryDidConnect](messageidentifier/accessorydidconnect.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<EAAccessoryManager.AccessoryDidConnectMessage>`.
- [accessoryDidDisconnect](messageidentifier/accessorydiddisconnect.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<EAAccessoryManager.AccessoryDidDisconnectMessage>`.
- [applicationAccessibilityEnabledDidChange](messageidentifier/applicationaccessibilityenableddidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<AccessibilitySettings.ApplicationAccessibilityEnabledDidChangeMessage>`. Shorthand identifier for `AccessibilitySettings/ApplicationAccessibilityEnabledDidChangeMessage`.
- [boundsDidChange](messageidentifier/boundsdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSView.BoundsDidChangeMessage>`.
- [colorDidChange](messageidentifier/colordidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSColorPanel.ColorDidChangeMessage>`.
- [colorSpaceDidChange](messageidentifier/colorspacedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSScreen.ColorSpaceDidChangeMessage>`.
- [columnConfigurationDidChange](messageidentifier/columnconfigurationdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSBrowser.ColumnConfigurationDidChangeMessage>`.
- [columnDidMove](messageidentifier/columndidmove-78e2d.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSOutlineView.ColumnDidMoveMessage>`.
- [columnDidMove](messageidentifier/columndidmove-9tkq6.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTableView.ColumnDidMoveMessage>`.
- [columnDidResize](messageidentifier/columndidresize-5pxs4.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSOutlineView.ColumnDidResizeMessage>`.
- [columnDidResize](messageidentifier/columndidresize-7ktag.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTableView.ColumnDidResizeMessage>`.
- [contextHelpModeDidActivate](messageidentifier/contexthelpmodedidactivate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSHelpManager.ContextHelpModeDidActivateMessage>`.
- [contextHelpModeDidDeactivate](messageidentifier/contexthelpmodediddeactivate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSHelpManager.ContextHelpModeDidDeactivateMessage>`.
- [conversationHistoryDidUpdateMessage](messageidentifier/conversationhistorydidupdatemessage.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<ConversationHistoryManager.ConversationHistoryDidUpdate>`.
- [didAddItem](messageidentifier/didadditem.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMenu.DidAddItemMessage>`.
- [didBecomeActive](messageidentifier/didbecomeactive-2y311.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.DidBecomeActiveMessage>`.
- [didBecomeActive](messageidentifier/didbecomeactive-546kc.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<AVAudioSession.DidBecomeActiveMessage>`.
- [didBecomeCurrent](messageidentifier/didbecomecurrent-9p0n4.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCController.DidBecomeCurrentMessage>`. The identifier of the message that posts after a game controller becomes the most recently used controller.
- [didBecomeCurrent](messageidentifier/didbecomecurrent-9zfc.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCMouse.DidBecomeCurrentMessage>`. The identifier of the message that posts after a mouse becomes the most recently used mouse.
- [didBecomeInactive](messageidentifier/didbecomeinactive.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<AVAudioSession.DidBecomeInactiveMessage>`.
- [didBecomeKey](messageidentifier/didbecomekey-3qijm.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidBecomeKeyMessage>`.
- [didBecomeKey](messageidentifier/didbecomekey-6kgub.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIWindow.DidBecomeKeyMessage>`.
- [didBecomeMain](messageidentifier/didbecomemain.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidBecomeMainMessage>`.
- [didBeginEditing](messageidentifier/didbeginediting.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTextView.DidBeginEditingMessage>`.
- [didBeginTracking](messageidentifier/didbegintracking.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMenu.DidBeginTrackingMessage>`.
- [didChange](messageidentifier/didchange-1ebzb.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSFontCollection.DidChangeMessage>`.
- [didChange](messageidentifier/didchange-96f1i.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSColorList.DidChangeMessage>`.
- [didChange](messageidentifier/didchange-ywl6.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTextView.DidChangeMessage>`.
- [didChangeAutomaticCapitalization](messageidentifier/didchangeautomaticcapitalization.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSpellChecker.DidChangeAutomaticCapitalizationMessage>`.
- [didChangeAutomaticDashSubstitution](messageidentifier/didchangeautomaticdashsubstitution.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSpellChecker.DidChangeAutomaticDashSubstitutionMessage>`.
- [didChangeAutomaticInlinePrediction](messageidentifier/didchangeautomaticinlineprediction.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSpellChecker.DidChangeAutomaticInlinePredictionMessage>`.
- [didChangeAutomaticPeriodSubstitution](messageidentifier/didchangeautomaticperiodsubstitution.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSpellChecker.DidChangeAutomaticPeriodSubstitutionMessage>`.
- [didChangeAutomaticQuoteSubstitution](messageidentifier/didchangeautomaticquotesubstitution.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSpellChecker.DidChangeAutomaticQuoteSubstitutionMessage>`.
- [didChangeAutomaticSpellingCorrection](messageidentifier/didchangeautomaticspellingcorrection.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSpellChecker.DidChangeAutomaticSpellingCorrectionMessage>`.
- [didChangeAutomaticTextCompletion](messageidentifier/didchangeautomatictextcompletion.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSpellChecker.DidChangeAutomaticTextCompletionMessage>`.
- [didChangeAutomaticTextReplacement](messageidentifier/didchangeautomatictextreplacement.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSpellChecker.DidChangeAutomaticTextReplacementMessage>`.
- [didChangeBackingProperties](messageidentifier/didchangebackingproperties.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidChangeBackingPropertiesMessage>`.
- [didChangeItem](messageidentifier/didchangeitem.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMenu.DidChangeItemMessage>`.
- [didChangeOcclusionState](messageidentifier/didchangeocclusionstate-5853a.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidChangeOcclusionStateMessage>`.
- [didChangeOcclusionState](messageidentifier/didchangeocclusionstate-99vn6.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.DidChangeOcclusionStateMessage>`.
- [didChangeScreen](messageidentifier/didchangescreen.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidChangeScreenMessage>`.
- [didChangeScreenParameters](messageidentifier/didchangescreenparameters.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.DidChangeScreenParametersMessage>`.
- [didChangeScreenProfile](messageidentifier/didchangescreenprofile.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidChangeScreenProfileMessage>`.
- [didChangeSelection](messageidentifier/didchangeselection.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTextView.DidChangeSelectionMessage>`.
- [didChangeTypingAttributes](messageidentifier/didchangetypingattributes.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTextView.DidChangeTypingAttributesMessage>`.
- [didClose](messageidentifier/didclose.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPopover.DidCloseMessage>`.
- [didConnect](messageidentifier/didconnect-2pidr.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCMouse.DidConnectMessage>`. The identifier of the message that posts after a mouse accessory connects to the device.
- [didConnect](messageidentifier/didconnect-39qlx.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCRacingWheel.DidConnectMessage>`. The identifier of the message that posts after a racing wheel accessory connects to the device.
- [didConnect](messageidentifier/didconnect-3d7x9.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCController.DidConnectMessage>`. The identifier of the message that posts after a game controller accessory connects to the device.
- [didConnect](messageidentifier/didconnect-6zuxs.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCKeyboard.DidConnectMessage>`. The identifier of the message that posts after a keyboard accessory connects to the device.
- [didConnect](messageidentifier/didconnect-oq29.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCSpatialAccessory.DidConnectMessage>`. The identifier of the message that posts after a spatial accessory connects to the device.
- [didConnect](messageidentifier/didconnect-wf9.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCStylus.DidConnectMessage>`. The identifier of the message that posts after a stylus accessory connects to the device.
- [didDeminiaturize](messageidentifier/diddeminiaturize.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidDeminiaturizeMessage>`.
- [didDisconnect](messageidentifier/diddisconnect-127wj.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCRacingWheel.DidDisconnectMessage>`. The identifier of the message that posts after a racing wheel accessory disconnects from the device.
- [didDisconnect](messageidentifier/diddisconnect-3p6qi.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCStylus.DidDisconnectMessage>`. The identifier of the message that posts after a stylus accessory disconnects from the device.
- [didDisconnect](messageidentifier/diddisconnect-5s9vw.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCMouse.DidDisconnectMessage>`. The identifier of the message that posts after a mouse accessory disconnects from the device.
- [didDisconnect](messageidentifier/diddisconnect-97jtl.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCKeyboard.DidDisconnectMessage>`. The identifier of the message that posts after a keyboard accessory disconnects from the device.
- [didDisconnect](messageidentifier/diddisconnect-9qi2f.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCSpatialAccessory.DidDisconnectMessage>`. The identifier of the message that posts after a spatial accessory disconnects from the device.
- [didDisconnect](messageidentifier/diddisconnect-9ymbl.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCController.DidDisconnectMessage>`. The identifier of the message that posts after a game controller accessory disconnects from the device.
- [didEndEditing](messageidentifier/didendediting.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTextView.DidEndEditingMessage>`.
- [didEndLiveMagnify](messageidentifier/didendlivemagnify.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSScrollView.DidEndLiveMagnifyMessage>`.
- [didEndLiveResize](messageidentifier/didendliveresize.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidEndLiveResizeMessage>`.
- [didEndLiveScroll](messageidentifier/didendlivescroll.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSScrollView.DidEndLiveScrollMessage>`.
- [didEndSheet](messageidentifier/didendsheet.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidEndSheetMessage>`.
- [didEndTracking](messageidentifier/didendtracking.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMenu.DidEndTrackingMessage>`.
- [didEnterFullScreen](messageidentifier/didenterfullscreen.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidEnterFullScreenMessage>`.
- [didEnterVersionBrowser](messageidentifier/didenterversionbrowser.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidEnterVersionBrowserMessage>`.
- [didExitFullScreen](messageidentifier/didexitfullscreen.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidExitFullScreenMessage>`.
- [didExitVersionBrowser](messageidentifier/didexitversionbrowser.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidExitVersionBrowserMessage>`.
- [didExpose](messageidentifier/didexpose.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidExposeMessage>`.
- [didFinishRestoringWindows](messageidentifier/didfinishrestoringwindows.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.DidFinishRestoringWindowsMessage>`.
- [didHide](messageidentifier/didhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.DidHideMessage>`.
- [didLiveScroll](messageidentifier/didlivescroll.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSScrollView.DidLiveScrollMessage>`.
- [didMergeChanges](messageidentifier/didmergechanges.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSManagedObjectContext.DidMergeChangesMessage>`.
- [didMergeChangesAsync](messageidentifier/didmergechangesasync.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSManagedObjectContext.DidMergeChangesAsyncMessage>`.
- [didMiniaturize](messageidentifier/didminiaturize.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidMiniaturizeMessage>`.
- [didMove](messageidentifier/didmove.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidMoveMessage>`.
- [didMoveToWritableLocation](messageidentifier/didmovetowritablelocation.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIDocument.DidMoveToWritableLocationMessage>`.
- [didRemoveItem](messageidentifier/didremoveitem-4hapv.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSToolbar.DidRemoveItemMessage>`.
- [didRemoveItem](messageidentifier/didremoveitem-bimz.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMenu.DidRemoveItemMessage>`.
- [didResignActive](messageidentifier/didresignactive.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.DidResignActiveMessage>`.
- [didResignKey](messageidentifier/didresignkey-11hzh.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIWindow.DidResignKeyMessage>`.
- [didResignKey](messageidentifier/didresignkey-2dgp0.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidResignKeyMessage>`.
- [didResignMain](messageidentifier/didresignmain.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidResignMainMessage>`.
- [didResize](messageidentifier/didresize.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidResizeMessage>`.
- [didResizeSubviews](messageidentifier/didresizesubviews.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSplitView.DidResizeSubviewsMessage>`.
- [didSave](messageidentifier/didsave.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSManagedObjectContext.DidSaveMessage>`.
- [didSaveObjectIDs](messageidentifier/didsaveobjectids.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSManagedObjectContext.DidSaveObjectIDsMessage>`.
- [didSaveObjectIDsAsync](messageidentifier/didsaveobjectidsasync.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSManagedObjectContext.DidSaveObjectIDsAsyncMessage>`.
- [didSendAction](messageidentifier/didsendaction.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMenu.DidSendActionMessage>`.
- [didShow](messageidentifier/didshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPopover.DidShowMessage>`.
- [didStopBeingCurrent](messageidentifier/didstopbeingcurrent-2sc31.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCMouse.DidStopBeingCurrentMessage>`. The identifier of the message that posts after a mouse stops being longer the most recently used mouse.
- [didStopBeingCurrent](messageidentifier/didstopbeingcurrent-9pdq9.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<GCController.DidStopBeingCurrentMessage>`. The identifier of the message that posts after a game controller stops being longer the most recently used controller.
- [didUnhide](messageidentifier/didunhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.DidUnhideMessage>`.
- [didUpdate](messageidentifier/didupdate-p3fm.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIFocusSystem.DidUpdateMessage>`.
- [didUpdate](messageidentifier/didupdate-vu3m.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.DidUpdateMessage>`.
- [didUpdateWindows](messageidentifier/didupdatewindows.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.DidUpdateWindowsMessage>`.
- [displayGenlockModeChanged](messageidentifier/displaygenlockmodechanged.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<CMClock.DisplayGenlockModeChangedMessage>`. Identifies `CMClock/DisplayGenlockModeChangedMessage`.
- [eventChanged](messageidentifier/eventchanged.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPersistentCloudKitContainer.EventChangedMessage>`.
- [fontSetChanged](messageidentifier/fontsetchanged.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSFont.FontSetChangedMessage>`.
- [frameDidChange](messageidentifier/framedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSView.FrameDidChangeMessage>`.
- [indexDidUpdate](messageidentifier/indexdidupdate.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSCoreDataCoreSpotlightDelegate.IndexDidUpdateMessage>`.
- [itemDidCollapse](messageidentifier/itemdidcollapse.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSOutlineView.ItemDidCollapseMessage>`.
- [itemDidExpand](messageidentifier/itemdidexpand.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSOutlineView.ItemDidExpandMessage>`.
- [itemWillCollapse](messageidentifier/itemwillcollapse.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSOutlineView.ItemWillCollapseMessage>`.
- [itemWillExpand](messageidentifier/itemwillexpand.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSOutlineView.ItemWillExpandMessage>`.
- [keyboardSelectionDidChange](messageidentifier/keyboardselectiondidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTextInputContext.KeyboardSelectionDidChangeMessage>`.
- [objectsDidChange](messageidentifier/objectsdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSManagedObjectContext.ObjectsDidChangeMessage>`.
- [preferredScrollerStyleDidChange](messageidentifier/preferredscrollerstyledidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSScroller.PreferredScrollerStyleDidChangeMessage>`.
- [protectedDataDidBecomeAvailable](messageidentifier/protecteddatadidbecomeavailable-3di2c.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.ProtectedDataDidBecomeAvailableMessage>`.
- [protectedDataDidBecomeAvailable](messageidentifier/protecteddatadidbecomeavailable-6h44m.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.ProtectedDataDidBecomeAvailableMessage>`.
- [protectedDataWillBecomeUnavailable](messageidentifier/protecteddatawillbecomeunavailable-1izcs.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.ProtectedDataWillBecomeUnavailableMessage>`.
- [protectedDataWillBecomeUnavailable](messageidentifier/protecteddatawillbecomeunavailable-3n08h.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.ProtectedDataWillBecomeUnavailableMessage>`.
- [radioAccessTechnologyDidChange](messageidentifier/radioaccesstechnologydidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<CTTelephonyNetworkInfo.RadioAccessTechnologyDidChangeMessage>`.
- [registrationsChanged](messageidentifier/registrationschanged.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<AVAudioUnitComponentManager.RegistrationsChangedMessage>`.
- [registryDidChange](messageidentifier/registrydidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSImageRep.RegistryDidChangeMessage>`.
- [remoteChange](messageidentifier/remotechange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPersistentStoreCoordinator.RemoteChangeMessage>`.
- [resumptionRecommendation](messageidentifier/resumptionrecommendation.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<AVAudioSession.ResumptionRecommendationMessage>`.
- [rowsDidChange](messageidentifier/rowsdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSRuleEditor.RowsDidChangeMessage>`.
- [selectedAlternativeString](messageidentifier/selectedalternativestring.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTextAlternatives.SelectedAlternativeStringMessage>`.
- [selectionDidChange](messageidentifier/selectiondidchange-2akj4.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITableView.SelectionDidChangeMessage>`.
- [selectionDidChange](messageidentifier/selectiondidchange-676mh.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTableView.SelectionDidChangeMessage>`.
- [selectionDidChange](messageidentifier/selectiondidchange-72x2p.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSComboBox.SelectionDidChangeMessage>`.
- [selectionDidChange](messageidentifier/selectiondidchange-7qmnc.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSOutlineView.SelectionDidChangeMessage>`.
- [selectionIsChanging](messageidentifier/selectionischanging-2i647.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSComboBox.SelectionIsChangingMessage>`.
- [selectionIsChanging](messageidentifier/selectionischanging-5u4tc.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTableView.SelectionIsChangingMessage>`.
- [selectionIsChanging](messageidentifier/selectionischanging-abh0.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSOutlineView.SelectionIsChangingMessage>`.
- [storesDidChange](messageidentifier/storesdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPersistentStoreCoordinator.StoresDidChangeMessage>`.
- [storesDidChangeAsync](messageidentifier/storesdidchangeasync.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPersistentStoreCoordinator.StoresDidChangeAsyncMessage>`.
- [systemColorsDidChange](messageidentifier/systemcolorsdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSColor.SystemColorsDidChangeMessage>`.
- [systemPrefersReducedResourceUsageDidChange](messageidentifier/systemprefersreducedresourceusagedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.SystemPrefersReducedResourceUsageDidChangeMessage>`.
- [tagsDidChange](messageidentifier/tagsdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<AVAudioUnitComponent.TagsDidChangeMessage>`.
- [textDidBeginEditing](messageidentifier/textdidbeginediting-45vc.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSControl.TextDidBeginEditingMessage>`.
- [textDidChange](messageidentifier/textdidchange-5j4s4.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSControl.TextDidChangeMessage>`.
- [textDidEndEditing](messageidentifier/textdidendediting-5yxiy.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSControl.TextDidEndEditingMessage>`.
- [textMessageAvailabilityDidChange](messageidentifier/textmessageavailabilitydidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<MFMessageComposeViewController.TextMessageAvailabilityDidChangeMessage>`. Notification posted when text message availability changes.
- [tokensDidExpire](messageidentifier/tokensdidexpire.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<ManagedSettingsStore.TokenExpiryMessage>`.
- [userPreferencesDidChange](messageidentifier/userpreferencesdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<HKHealthStore.HKUserPreferencesDidChangeMessage>`.
- [willAddItem](messageidentifier/willadditem.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSToolbar.WillAddItemMessage>`.
- [willBecomeActive](messageidentifier/willbecomeactive.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.WillBecomeActiveMessage>`.
- [willBeginSheet](messageidentifier/willbeginsheet.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.WillBeginSheetMessage>`.
- [willChangeNotifyingTextView](messageidentifier/willchangenotifyingtextview.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSTextView.WillChangeNotifyingTextViewMessage>`.
- [willClose](messageidentifier/willclose-2wsvs.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPopover.WillCloseMessage>`.
- [willClose](messageidentifier/willclose-4565q.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.WillCloseMessage>`.
- [willDismiss](messageidentifier/willdismiss.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSComboBox.WillDismissMessage>`.
- [willEnterFullScreen](messageidentifier/willenterfullscreen.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.WillEnterFullScreenMessage>`.
- [willEnterVersionBrowser](messageidentifier/willenterversionbrowser.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.WillEnterVersionBrowserMessage>`.
- [willExitFullScreen](messageidentifier/willexitfullscreen.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.WillExitFullScreenMessage>`.
- [willExitVersionBrowser](messageidentifier/willexitversionbrowser.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.WillExitVersionBrowserMessage>`.
- [willFinishLaunching](messageidentifier/willfinishlaunching.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.WillFinishLaunchingMessage>`.
- [willHide](messageidentifier/willhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.WillHideMessage>`.
- [willMiniaturize](messageidentifier/willminiaturize.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.WillMiniaturizeMessage>`.
- [willMove](messageidentifier/willmove.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.WillMoveMessage>`.
- [willPopUp](messageidentifier/willpopup-4czk2.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSComboBox.WillPopUpMessage>`.
- [willPopUp](messageidentifier/willpopup-81zuu.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPopUpButton.WillPopUpMessage>`.
- [willPopUp](messageidentifier/willpopup-8ycpp.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPopUpButtonCell.WillPopUpMessage>`.
- [willResignActive](messageidentifier/willresignactive-9aumz.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.WillResignActiveMessage>`.
- [willResizeSubviews](messageidentifier/willresizesubviews.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSSplitView.WillResizeSubviewsMessage>`.
- [willSave](messageidentifier/willsave.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSManagedObjectContext.WillSaveMessage>`.
- [willSendAction](messageidentifier/willsendaction.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSMenu.WillSendActionMessage>`.
- [willShow](messageidentifier/willshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSPopover.WillShowMessage>`.
- [willStartLiveMagnify](messageidentifier/willstartlivemagnify.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSScrollView.WillStartLiveMagnifyMessage>`.
- [willStartLiveResize](messageidentifier/willstartliveresize.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWindow.WillStartLiveResizeMessage>`.
- [willStartLiveScroll](messageidentifier/willstartlivescroll.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSScrollView.WillStartLiveScrollMessage>`.
- [willTerminate](messageidentifier/willterminate-1u238.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIApplication.WillTerminateMessage>`.
- [willTerminate](messageidentifier/willterminate-7lu3s.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.WillTerminateMessage>`.
- [willUnhide](messageidentifier/willunhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.WillUnhideMessage>`.
- [willUpdateWindows](messageidentifier/willupdatewindows.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSApplication.WillUpdateWindowsMessage>`.

## Relationships

### Conforming Types

- [NotificationCenter.BaseMessageIdentifier](basemessageidentifier.md)

## See Also

### Using message identifiers

- [NotificationCenter.BaseMessageIdentifier](basemessageidentifier.md): A type for use when defining optional Message identifiers.
