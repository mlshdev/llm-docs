> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility](https://developer.apple.com/documentation/uikit/uiaccessibility)

# UIAccessibility

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A namespace for accessibility symbols for UIKit apps.

## Declaration

```swift
struct UIAccessibility
```

## Topics

### System notifications

- [announcementDidFinishNotification](uiaccessibility/announcementdidfinishnotification.md): A notification that UIKit posts when the system finishes reading an announcement.
- [elementFocusedNotification](uiaccessibility/elementfocusednotification.md): A notification that UIKit posts when an assistive app focuses on an accessibility element.

### App notifications

- [post(notification:argument:)](uiaccessibility/post%28notification_argument_%29.md): Posts a notification to assistive apps.
- [UIAccessibility.Notification](uiaccessibility/notification.md): An accessibility notification that an app can send.

### Notification keys

- [announcementStringValueUserInfoKey](uiaccessibility/announcementstringvalueuserinfokey.md): The text of the announcement.
- [announcementWasSuccessfulUserInfoKey](uiaccessibility/announcementwassuccessfuluserinfokey.md): A Boolean value that indicates whether the announcement is successful.
- [focusedElementUserInfoKey](uiaccessibility/focusedelementuserinfokey.md): The element currently in focus by the assistive app.
- [unfocusedElementUserInfoKey](uiaccessibility/unfocusedelementuserinfokey.md): The element previously in focus by the assistive app.
- [assistiveTechnologyUserInfoKey](uiaccessibility/assistivetechnologyuserinfokey.md): The identifier of the assistive app.

### VoiceOver

- [isVoiceOverRunning](uiaccessibility/isvoiceoverrunning.md): A Boolean value that indicates whether VoiceOver is in an enabled state.
- [voiceOverStatusDidChangeNotification](uiaccessibility/voiceoverstatusdidchangenotification.md): A notification that UIKit posts when VoiceOver starts or stops.

### Switch Control

- [isSwitchControlRunning](uiaccessibility/isswitchcontrolrunning.md): A Boolean value that indicates whether the Switch Control setting is in an enabled state.
- [switchControlStatusDidChangeNotification](uiaccessibility/switchcontrolstatusdidchangenotification.md): A notification that UIKit posts when the system’s Switch Control setting changes.

### AssistiveTouch

- [isAssistiveTouchRunning](uiaccessibility/isassistivetouchrunning.md): A Boolean value that indicates whether AssistiveTouch is in an enabled state.
- [assistiveTouchStatusDidChangeNotification](uiaccessibility/assistivetouchstatusdidchangenotification.md): A notification that indicates a change in the status of AssistiveTouch.

### Autoplay videos

- [isVideoAutoplayEnabled](uiaccessibility/isvideoautoplayenabled.md): A Boolean value that indicates whether the Auto-Play Video Previews setting is in an enabled state.
- [videoAutoplayStatusDidChangeNotification](uiaccessibility/videoautoplaystatusdidchangenotification.md): A notification that UIKit posts when the system’s Auto-Play Video Previews setting changes.

### Bold text

- [isBoldTextEnabled](uiaccessibility/isboldtextenabled.md): A Boolean value that indicates whether the Bold Text setting is in an enabled state.
- [boldTextStatusDidChangeNotification](uiaccessibility/boldtextstatusdidchangenotification.md): A notification that UIKit posts when the system’s Bold Text setting changes.

### Button shapes

- [buttonShapesEnabled](uiaccessibility/buttonshapesenabled.md): Deprecated. A Boolean value that indicates whether the Button Shapes setting is in an enabled state.
- [buttonShapesEnabledStatusDidChangeNotification](uiaccessibility/buttonshapesenabledstatusdidchangenotification.md): Deprecated. A notification that UIKit posts when the system’s Button Shapes setting changes.

### Closed captions

- [isClosedCaptioningEnabled](uiaccessibility/isclosedcaptioningenabled.md): A Boolean value that indicates whether the Closed Captions + SDH setting is in an enabled state.
- [closedCaptioningStatusDidChangeNotification](uiaccessibility/closedcaptioningstatusdidchangenotification.md): A notification that UIKit posts when the setting for Closed Captions + SDH changes.

### Cross-fade transitions

- [prefersCrossFadeTransitions](uiaccessibility/preferscrossfadetransitions.md): A Boolean value that indicates whether the Reduce Motion and the Prefer Cross-Fade Transitions settings are in an enabled state.
- [prefersCrossFadeTransitionsStatusDidChange](uiaccessibility/preferscrossfadetransitionsstatusdidchange.md): A notification that UIKit posts when the system’s Prefer Cross-Fade Transitions setting changes.

### Differentiate without color

- [shouldDifferentiateWithoutColor](uiaccessibility/shoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the Differentiate Without Color setting is in an enabled state.
- [differentiateWithoutColorDidChangeNotification](uiaccessibility/differentiatewithoutcolordidchangenotification.md): A notification that UIKit posts when the system’s Differentiate Without Color setting changes.

### Grayscale

- [isGrayscaleEnabled](uiaccessibility/isgrayscaleenabled.md): A Boolean value that indicates whether the Color Filters and the Grayscale settings are in an enabled state.
- [grayscaleStatusDidChangeNotification](uiaccessibility/grayscalestatusdidchangenotification.md): A notification that UIKit posts when the system’s Grayscale setting changes.

### Guided Access

- [isGuidedAccessEnabled](uiaccessibility/isguidedaccessenabled.md): A Boolean value that indicates whether the Guided Access setting is in an enabled state.
- [guidedAccessStatusDidChangeNotification](uiaccessibility/guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [requestGuidedAccessSession(enabled:completionHandler:)](uiaccessibility/requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [configureForGuidedAccess(features:enabled:completionHandler:)](uiaccessibility/configureforguidedaccess%28features_enabled_completionhandler_%29.md): Enables or disables the specified accessibility features while using Guided Access.
- [guidedAccessRestrictionState(forIdentifier:)](uiaccessibility/guidedaccessrestrictionstate%28foridentifier_%29.md): Returns the restriction state for the specified guided access restriction.
- [UIAccessibility.GuidedAccessRestrictionState](uiaccessibility/guidedaccessrestrictionstate.md): Constants that describe the state of a restriction, either allow or deny.
- [guidedAccessErrorDomain](uiaccessibility/guidedaccesserrordomain.md): A string that identifies the Guided Access error domain.
- [UIAccessibility.GuidedAccessError](uiaccessibility/guidedaccesserror.md): A Guided Access error.

### Hearing devices

- [hearingDevicePairedEar](uiaccessibility/hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [hearingDevicePairedEarDidChangeNotification](uiaccessibility/hearingdevicepairedeardidchangenotification.md): A notification that UIKit posts when there’s a change to the currently paired hearing devices.

### Increase contrast

- [isDarkerSystemColorsEnabled](uiaccessibility/isdarkersystemcolorsenabled.md): A Boolean value that indicates whether the Increase Contrast setting is in an enabled state.
- [darkerSystemColorsStatusDidChangeNotification](uiaccessibility/darkersystemcolorsstatusdidchangenotification.md): A notification that UIKit posts when the system’s Increase Contrast setting changes.

### Invert colors

- [isInvertColorsEnabled](uiaccessibility/isinvertcolorsenabled.md): A Boolean value that indicates whether the Classic Invert setting is in an enabled state.
- [invertColorsStatusDidChangeNotification](uiaccessibility/invertcolorsstatusdidchangenotification.md): A notification that UIKit posts when the settings for inverted colors change.

### Mono audio

- [isMonoAudioEnabled](uiaccessibility/ismonoaudioenabled.md): A Boolean value that indicates whether the Mono Audio setting is in an enabled state.
- [monoAudioStatusDidChangeNotification](uiaccessibility/monoaudiostatusdidchangenotification.md): A notification that UIKit posts when system audio changes from stereo to mono.

### On and off labels

- [isOnOffSwitchLabelsEnabled](uiaccessibility/isonoffswitchlabelsenabled.md): A Boolean value that indicates whether the On/Off Labels setting is in an enabled state.
- [onOffSwitchLabelsDidChangeNotification](uiaccessibility/onoffswitchlabelsdidchangenotification.md): A notification that UIKit posts when the system’s On/Off Labels setting changes.

### Reduce motion

- [isReduceMotionEnabled](uiaccessibility/isreducemotionenabled.md): A Boolean value that indicates whether the Reduce Motion setting is in an enabled state.
- [reduceMotionStatusDidChangeNotification](uiaccessibility/reducemotionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Motion setting changes.

### Reduce transparency

- [isReduceTransparencyEnabled](uiaccessibility/isreducetransparencyenabled.md): A Boolean value that indicates whether the Reduce Transparency setting is in an enabled state.
- [reduceTransparencyStatusDidChangeNotification](uiaccessibility/reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.

### Shake to undo

- [isShakeToUndoEnabled](uiaccessibility/isshaketoundoenabled.md): A Boolean value that indicates whether the Shake to Undo setting is in an enabled state.
- [shakeToUndoDidChangeNotification](uiaccessibility/shaketoundodidchangenotification.md): A notification that UIKit posts when the system’s Shake to Undo setting changes.

### Spoken content

- [isSpeakScreenEnabled](uiaccessibility/isspeakscreenenabled.md): A Boolean value that indicates whether the Speak Screen setting is in an enabled state.
- [speakScreenStatusDidChangeNotification](uiaccessibility/speakscreenstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Screen setting changes.
- [isSpeakSelectionEnabled](uiaccessibility/isspeakselectionenabled.md): A Boolean value that indicates whether the Speak Selection setting is in an enabled state.
- [speakSelectionStatusDidChangeNotification](uiaccessibility/speakselectionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Selection setting changes.

### Conversions

- [convertToScreenCoordinates(\_:in:)](uiaccessibility/converttoscreencoordinates%28__in_%29-6dx4a.md): Converts the specified path object to screen coordinates and returns a new path object with the results.
- [convertToScreenCoordinates(\_:in:)](uiaccessibility/converttoscreencoordinates%28__in_%29-9ziiu.md): Converts the specified rectangle from view coordinates to screen coordinates.

### Convenience functions

- [focusedElement(using:)](uiaccessibility/focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [registerGestureConflictWithZoom()](uiaccessibility/registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [zoomFocusChanged(zoomType:toFrame:in:)](uiaccessibility/zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.

### Constants

- [UIAccessibilityTraits](uiaccessibilitytraits.md): Constants that describe how an accessibility element behaves.
- [UIAccessibility.AssistiveTechnologyIdentifier](uiaccessibility/assistivetechnologyidentifier.md): Identifiers for assistive apps.
- [UIAccessibility.HearingDeviceEar](uiaccessibility/hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [UIAccessibilityContainerType](uiaccessibilitycontainertype.md): Constants that indicate the type of content in a data-based container.
- [UIAccessibilityNavigationStyle](uiaccessibilitynavigationstyle.md): Constants that describe how to navigate an object’s elements with an assistive app.
- [UIAccessibilityScrollDirection](uiaccessibilityscrolldirection.md): The direction of a scrolling action.
- [UIAccessibility.ZoomType](uiaccessibility/zoomtype.md): The types of system Zoom that can be in effect.
- [UIAccessibility.DirectTouchOptions](uiaccessibility/directtouchoptions.md): Constants that configure how VoiceOver produces audio for direct touch areas.

### Structures

- [UIAccessibility.AnnouncementDidFinishMessage](uiaccessibility/announcementdidfinishmessage.md)
- [UIAccessibility.AssistiveTouchStatusDidChangeMessage](uiaccessibility/assistivetouchstatusdidchangemessage.md)
- [UIAccessibility.BoldTextStatusDidChangeMessage](uiaccessibility/boldtextstatusdidchangemessage.md)
- [UIAccessibility.ButtonShapesEnabledStatusDidChangeMessage](uiaccessibility/buttonshapesenabledstatusdidchangemessage.md): Deprecated.
- [UIAccessibility.ClosedCaptioningStatusDidChangeMessage](uiaccessibility/closedcaptioningstatusdidchangemessage.md)
- [UIAccessibility.DarkerSystemColorsStatusDidChangeMessage](uiaccessibility/darkersystemcolorsstatusdidchangemessage.md)
- [UIAccessibility.ElementFocusedMessage](uiaccessibility/elementfocusedmessage.md)
- [UIAccessibility.GrayscaleStatusDidChangeMessage](uiaccessibility/grayscalestatusdidchangemessage.md)
- [UIAccessibility.GuidedAccessStatusDidChangeMessage](uiaccessibility/guidedaccessstatusdidchangemessage.md)
- [UIAccessibility.HearingDevicePairedEarDidChangeMessage](uiaccessibility/hearingdevicepairedeardidchangemessage.md)
- [UIAccessibility.InvertColorsStatusDidChangeMessage](uiaccessibility/invertcolorsstatusdidchangemessage.md)
- [UIAccessibility.MonoAudioStatusDidChangeMessage](uiaccessibility/monoaudiostatusdidchangemessage.md)
- [UIAccessibility.ReduceMotionStatusDidChangeMessage](uiaccessibility/reducemotionstatusdidchangemessage.md)
- [UIAccessibility.ReduceTransparencyStatusDidChangeMessage](uiaccessibility/reducetransparencystatusdidchangemessage.md)
- [UIAccessibility.ShakeToUndoDidChangeMessage](uiaccessibility/shaketoundodidchangemessage.md)
- [UIAccessibility.SpeakScreenStatusDidChangeMessage](uiaccessibility/speakscreenstatusdidchangemessage.md)
- [UIAccessibility.SpeakSelectionStatusDidChangeMessage](uiaccessibility/speakselectionstatusdidchangemessage.md)
- [UIAccessibility.SwitchControlStatusDidChangeMessage](uiaccessibility/switchcontrolstatusdidchangemessage.md)
- [UIAccessibility.VoiceOverStatusDidChangeMessage](uiaccessibility/voiceoverstatusdidchangemessage.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Supporting types

- [AXArrayReturnBlock](axarrayreturnblock.md)
- [AXAttributedStringArrayReturnBlock](axattributedstringarrayreturnblock.md)
- [AXAttributedStringReturnBlock](axattributedstringreturnblock.md)
- [AXBoolReturnBlock](axboolreturnblock.md)
- [AXContainerTypeReturnBlock](axcontainertypereturnblock.md)
- [AXCustomActionsReturnBlock](axcustomactionsreturnblock.md)
- [AXCustomRotorsReturnBlock](axcustomrotorsreturnblock.md)
- [AXNavigationStyleReturnBlock](axnavigationstylereturnblock.md)
- [AXObjectReturnBlock](axobjectreturnblock.md)
- [AXPathReturnBlock](axpathreturnblock.md)
- [AXPointReturnBlock](axpointreturnblock.md)
- [AXRectReturnBlock](axrectreturnblock.md)
- [AXStringArrayReturnBlock](axstringarrayreturnblock.md)
- [AXStringReturnBlock](axstringreturnblock.md)
- [AXTextualContextReturnBlock](axtextualcontextreturnblock.md)
