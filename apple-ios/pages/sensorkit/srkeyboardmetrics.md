> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srkeyboardmetrics](https://developer.apple.com/documentation/sensorkit/srkeyboardmetrics)

# SRKeyboardMetrics (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration of a device’s keyboard and its usage patterns.

## Declaration

```swift
class SRKeyboardMetrics
```

<a id="overview"></a>

## Overview

The [keyboardMetrics](srsensor/keyboardmetrics.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Inspecting Keyboard Configuration and Sessions

- [duration](srkeyboardmetrics/duration.md): The duration that the report spans.
- [keyboardIdentifier](srkeyboardmetrics/keyboardidentifier.md): The identifier of the keyboard in the keyboard list.
- [version](srkeyboardmetrics/version.md): The version of keyboard metrics.
- [width](srkeyboardmetrics/width.md): The width, in millimeters, of the keyboard in the report.
- [height](srkeyboardmetrics/height.md): The height, in millimeters, of the keyboard in the report.
- [inputModes](srkeyboardmetrics/inputmodes.md): The active keyboard languages in the session.
- [sessionIdentifiers](srkeyboardmetrics/sessionidentifiers.md): The identifiers for the keyboard sessions that report metrics to the sample.

### Quantifying Key Use

- [totalWords](srkeyboardmetrics/totalwords.md): The total number of typed words for the keyboard.
- [totalAlteredWords](srkeyboardmetrics/totalalteredwords.md): The total number of altered words for the keyboard.
- [totalTaps](srkeyboardmetrics/totaltaps.md): The total number of taps for the keyboard.
- [totalDrags](srkeyboardmetrics/totaldrags.md): The total number of drags for the keyboard.
- [totalDeletes](srkeyboardmetrics/totaldeletes.md): The total number of deletions for the keyboard.
- [totalEmojis](srkeyboardmetrics/totalemojis.md): The total number of emojis for the keyboard.
- [totalPaths](srkeyboardmetrics/totalpaths.md): The total number of completed paths for the keyboard.
- [totalPathTime](srkeyboardmetrics/totalpathtime.md): The total time to complete paths for the keyboard.
- [totalPathLength](srkeyboardmetrics/totalpathlength.md): The total length of completed paths for the keyboard.
- [totalAutoCorrections](srkeyboardmetrics/totalautocorrections.md): The total number of autocorrections for the keyboard.
- [totalSpaceCorrections](srkeyboardmetrics/totalspacecorrections.md): The total number of space corrections for the keyboard.
- [totalRetroCorrections](srkeyboardmetrics/totalretrocorrections.md): The total number of retro corrections for the keyboard.
- [totalTranspositionCorrections](srkeyboardmetrics/totaltranspositioncorrections.md): The total number of transposition corrections for the keyboard.
- [totalInsertKeyCorrections](srkeyboardmetrics/totalinsertkeycorrections.md): The total number of Insert key corrections for the keyboard.
- [totalSkipTouchCorrections](srkeyboardmetrics/totalskiptouchcorrections.md): The total number of skip touch corrections for the keyboard.
- [totalNearKeyCorrections](srkeyboardmetrics/totalnearkeycorrections.md): The total number of near key corrections for the keyboard.
- [totalSubstitutionCorrections](srkeyboardmetrics/totalsubstitutioncorrections.md): The total number of substitution corrections for the keyboard.
- [totalHitTestCorrections](srkeyboardmetrics/totalhittestcorrections.md): The total number of hit test corrections for the keyboard.
- [totalTypingDuration](srkeyboardmetrics/totaltypingduration.md): The total amount of typing time for the keyboard.
- [totalPathPauses](srkeyboardmetrics/totalpathpauses.md): The total number of pauses while drawing a path for a word.
- [totalPauses](srkeyboardmetrics/totalpauses.md): The total number of pauses during the session.
- [totalTypingEpisodes](srkeyboardmetrics/totaltypingepisodes.md): The total number of continuous typing episodes during the session.

### Timing Key Use

- [SRKeyboardMetrics.ProbabilityMetric](srkeyboardmetrics/probabilitymetric.md): A likelihood of occurrence.
- [touchDownUp](srkeyboardmetrics/touchdownup.md): The duration between touch down to touch up for any key.
- [touchUpDown](srkeyboardmetrics/touchupdown.md): The duration between touch up and touch down for any key.
- [spaceTouchDownUp](srkeyboardmetrics/spacetouchdownup.md): The duration between touch down and touch up of all Space bar events for the keyboard.
- [deleteTouchDownUp](srkeyboardmetrics/deletetouchdownup.md): The duration between touch down and touch up of all Delete key events for the keyboard.
- [shortWordCharKeyTouchDownUp](srkeyboardmetrics/shortwordcharkeytouchdownup.md): The duration between touch down and touch up of all character keys in short words for the keyboard.
- [touchDownDown](srkeyboardmetrics/touchdowndown.md): The duration between touch down and touch down for any key.
- [charKeyToPrediction](srkeyboardmetrics/charkeytoprediction.md): The duration between touch up on a character key and touch down on a word in the prediction bar.
- [shortWordCharKeyToCharKey](srkeyboardmetrics/shortwordcharkeytocharkey.md): The duration between touch up on a character key and touch down on any sequential character key in a short word.
- [charKeyToAnyTapKey](srkeyboardmetrics/charkeytoanytapkey.md): The duration between touch up on a character key and touch down on the next sequential key.
- [anyTapToCharKey](srkeyboardmetrics/anytaptocharkey.md): The duration between touch up of any key and touch down on a sequential character key.
- [spaceToCharKey](srkeyboardmetrics/spacetocharkey.md): The duration between touch up of the Space bar and touch down of a sequential character key.
- [charKeyToSpaceKey](srkeyboardmetrics/charkeytospacekey.md): The duration between touch up of a character key and touch down of a sequential Space bar.
- [spaceToDeleteKey](srkeyboardmetrics/spacetodeletekey.md): The duration between touch up of the Space bar and touch down of a sequential Delete key.
- [deleteToSpaceKey](srkeyboardmetrics/deletetospacekey.md): The duration between touch up of the Delete key and touch down of a sequential Space bar.
- [spaceToSpaceKey](srkeyboardmetrics/spacetospacekey.md): The duration between touch up of the Space bar and touch down of a sequential Space bar.
- [spaceToShiftKey](srkeyboardmetrics/spacetoshiftkey.md): The duration between touch up of the Space bar and touch down of a sequential Shift key.
- [spaceToPlaneChangeKey](srkeyboardmetrics/spacetoplanechangekey.md): The duration between touch up of the Space bar and touch down of a sequential plane change key.
- [spaceToPredictionKey](srkeyboardmetrics/spacetopredictionkey.md): The duration between touch up of the Space bar and touch down of a sequential selection from the prediction bar.
- [deleteToCharKey](srkeyboardmetrics/deletetocharkey.md): The duration between touch up of the Delete key and touch down of a sequential character key.
- [charKeyToDelete](srkeyboardmetrics/charkeytodelete.md): The duration between touch up of a character key and touch down of a sequential Delete key.
- [deleteToDelete](srkeyboardmetrics/deletetodelete.md): The duration between touch up of the Delete key and touch down of a sequential Delete key.
- [deleteToDeletes](srkeyboardmetrics/deletetodeletes.md): The duration between touch up of the Delete key and touch down of a sequential Delete key for an entire word.
- [deleteToShiftKey](srkeyboardmetrics/deletetoshiftkey.md): The duration between touch up of the Delete key and touch down of a sequential Shift key.
- [deleteToPlaneChangeKey](srkeyboardmetrics/deletetoplanechangekey.md): The duration between touch up of the Delete key and touch down of a sequential plane change key.
- [anyTapToPlaneChangeKey](srkeyboardmetrics/anytaptoplanechangekey.md): The duration between touch up of any key and touch down on a plane change key.
- [planeChangeToAnyTap](srkeyboardmetrics/planechangetoanytap.md): The duration between touch up on a plane change key and touch down on the next sequential key.
- [charKeyToPlaneChangeKey](srkeyboardmetrics/charkeytoplanechangekey.md): The duration between touch up of a character key and touch down of a sequential plane change key.
- [planeChangeKeyToCharKey](srkeyboardmetrics/planechangekeytocharkey.md): The duration between touch up of a plane change key and touch down of any key.
- [deleteToPath](srkeyboardmetrics/deletetopath.md): The duration between touch up of the Delete key and touch down of a sequential path.
- [pathToDelete](srkeyboardmetrics/pathtodelete.md): The duration between touch up of the Delete key and touch down of a continuous path.
- [spaceToPath](srkeyboardmetrics/spacetopath.md): The duration between touch up of the Space bar and touch down to begin a sequential path.
- [pathToSpace](srkeyboardmetrics/pathtospace.md): The duration between touch up of a path and touch down of a sequential Space bar.
- [pathToPath](srkeyboardmetrics/pathtopath.md): The duration between touch up of a path and touch down of a sequential path.
- [longWordTouchDownUp](srkeyboardmetrics/longwordtouchdownup.md): The duration between touch down and touch up of the character keys of all the long words in the session.
- [longWordTouchDownDown](srkeyboardmetrics/longwordtouchdowndown.md): The duration between touch down and touch down of the character keys of all the long words in the session.
- [longWordTouchUpDown](srkeyboardmetrics/longwordtouchupdown.md): The duration between touch up and touch down of the character keys of all the long words in the session.
- [pathTypingSpeed](srkeyboardmetrics/pathtypingspeed.md): The QuickType words per minute in the session.
- [typingSpeed](srkeyboardmetrics/typingspeed.md): The user’s typing rate in characters per second.

### Measuring Key Use

- [longWordUpErrorDistance](srkeyboardmetrics/longworduperrordistance.md): The distance from the touch up to the center of the intended key of the characters of a long word.
- [longWordDownErrorDistance](srkeyboardmetrics/longworddownerrordistance.md): The distance from the touch down to the center of the intended key of the characters of a long word.
- [upErrorDistance](srkeyboardmetrics/uperrordistance.md): The distance from the touch up to the center of any key.
- [downErrorDistance](srkeyboardmetrics/downerrordistance.md): The distance from the touch down to the center of any key.
- [spaceUpErrorDistance](srkeyboardmetrics/spaceuperrordistance.md): The distance from the touch up to the right centroid of the Space bar.
- [spaceDownErrorDistance](srkeyboardmetrics/spacedownerrordistance.md): The distance from the touch down to the right centroid of the Space bar.
- [deleteUpErrorDistance](srkeyboardmetrics/deleteuperrordistance.md): The distance from the touch up to the center of the Delete key.
- [deleteDownErrorDistance](srkeyboardmetrics/deletedownerrordistance.md): The distance from the touch down to the center of the Delete key.
- [shortWordCharKeyUpErrorDistance](srkeyboardmetrics/shortwordcharkeyuperrordistance.md): The distance from the touch up to the center of the intended key of a character in a short word.
- [shortWordCharKeyDownErrorDistance](srkeyboardmetrics/shortwordcharkeydownerrordistance.md): The distance from the touch down to the center of the intended key of a character in a short word.
- [pathErrorDistanceRatio](srkeyboardmetrics/patherrordistanceratio.md): Sample values of the ratio of error distance between the intended and actual path.

### Inferring Sentiment

- [wordCount(for:)](srkeyboardmetrics/wordcount%28for_%29.md): Provides the number of typed words for the specified sentiment in the report.
- [emojiCount(for:)](srkeyboardmetrics/emojicount%28for_%29.md): Provides the number of typed emojis for the specified sentiment in the report.
- [SRKeyboardMetrics.SentimentCategory](srkeyboardmetrics/sentimentcategory.md): Moods that the framework determines by analyzing the user’s input.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interpreting data

- [SRAmbientLightSample](srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRDeviceUsageReport](srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRMediaEvent](srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.

# SRKeyboardMetrics (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration of a device’s keyboard and its usage patterns.

## Declaration

```objectivec
@interface SRKeyboardMetrics : NSObject
```

<a id="overview"></a>

## Overview

The [SRSensorKeyboardMetrics](srsensor/keyboardmetrics.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Inspecting Keyboard Configuration and Sessions

- [duration](srkeyboardmetrics/duration.md): The duration that the report spans.
- [keyboardIdentifier](srkeyboardmetrics/keyboardidentifier.md): The identifier of the keyboard in the keyboard list.
- [version](srkeyboardmetrics/version.md): The version of keyboard metrics.
- [width](srkeyboardmetrics/width.md): The width, in millimeters, of the keyboard in the report.
- [height](srkeyboardmetrics/height.md): The height, in millimeters, of the keyboard in the report.
- [inputModes](srkeyboardmetrics/inputmodes.md): The active keyboard languages in the session.
- [sessionIdentifiers](srkeyboardmetrics/sessionidentifiers.md): The identifiers for the keyboard sessions that report metrics to the sample.

### Quantifying Key Use

- [totalWords](srkeyboardmetrics/totalwords.md): The total number of typed words for the keyboard.
- [totalAlteredWords](srkeyboardmetrics/totalalteredwords.md): The total number of altered words for the keyboard.
- [totalTaps](srkeyboardmetrics/totaltaps.md): The total number of taps for the keyboard.
- [totalDrags](srkeyboardmetrics/totaldrags.md): The total number of drags for the keyboard.
- [totalDeletes](srkeyboardmetrics/totaldeletes.md): The total number of deletions for the keyboard.
- [totalEmojis](srkeyboardmetrics/totalemojis.md): The total number of emojis for the keyboard.
- [totalPaths](srkeyboardmetrics/totalpaths.md): The total number of completed paths for the keyboard.
- [totalPathTime](srkeyboardmetrics/totalpathtime.md): The total time to complete paths for the keyboard.
- [totalPathLength](srkeyboardmetrics/totalpathlength.md): The total length of completed paths for the keyboard.
- [totalAutoCorrections](srkeyboardmetrics/totalautocorrections.md): The total number of autocorrections for the keyboard.
- [totalSpaceCorrections](srkeyboardmetrics/totalspacecorrections.md): The total number of space corrections for the keyboard.
- [totalRetroCorrections](srkeyboardmetrics/totalretrocorrections.md): The total number of retro corrections for the keyboard.
- [totalTranspositionCorrections](srkeyboardmetrics/totaltranspositioncorrections.md): The total number of transposition corrections for the keyboard.
- [totalInsertKeyCorrections](srkeyboardmetrics/totalinsertkeycorrections.md): The total number of Insert key corrections for the keyboard.
- [totalSkipTouchCorrections](srkeyboardmetrics/totalskiptouchcorrections.md): The total number of skip touch corrections for the keyboard.
- [totalNearKeyCorrections](srkeyboardmetrics/totalnearkeycorrections.md): The total number of near key corrections for the keyboard.
- [totalSubstitutionCorrections](srkeyboardmetrics/totalsubstitutioncorrections.md): The total number of substitution corrections for the keyboard.
- [totalHitTestCorrections](srkeyboardmetrics/totalhittestcorrections.md): The total number of hit test corrections for the keyboard.
- [totalTypingDuration](srkeyboardmetrics/totaltypingduration.md): The total amount of typing time for the keyboard.
- [totalPathPauses](srkeyboardmetrics/totalpathpauses.md): The total number of pauses while drawing a path for a word.
- [totalPauses](srkeyboardmetrics/totalpauses.md): The total number of pauses during the session.
- [totalTypingEpisodes](srkeyboardmetrics/totaltypingepisodes.md): The total number of continuous typing episodes during the session.

### Timing Key Use

- [SRKeyboardProbabilityMetric](srkeyboardmetrics/probabilitymetric.md): A likelihood of occurrence.
- [touchDownUp](srkeyboardmetrics/touchdownup.md): The duration between touch down to touch up for any key.
- [touchUpDown](srkeyboardmetrics/touchupdown.md): The duration between touch up and touch down for any key.
- [spaceTouchDownUp](srkeyboardmetrics/spacetouchdownup.md): The duration between touch down and touch up of all Space bar events for the keyboard.
- [deleteTouchDownUp](srkeyboardmetrics/deletetouchdownup.md): The duration between touch down and touch up of all Delete key events for the keyboard.
- [shortWordCharKeyTouchDownUp](srkeyboardmetrics/shortwordcharkeytouchdownup.md): The duration between touch down and touch up of all character keys in short words for the keyboard.
- [touchDownDown](srkeyboardmetrics/touchdowndown.md): The duration between touch down and touch down for any key.
- [charKeyToPrediction](srkeyboardmetrics/charkeytoprediction.md): The duration between touch up on a character key and touch down on a word in the prediction bar.
- [shortWordCharKeyToCharKey](srkeyboardmetrics/shortwordcharkeytocharkey.md): The duration between touch up on a character key and touch down on any sequential character key in a short word.
- [charKeyToAnyTapKey](srkeyboardmetrics/charkeytoanytapkey.md): The duration between touch up on a character key and touch down on the next sequential key.
- [anyTapToCharKey](srkeyboardmetrics/anytaptocharkey.md): The duration between touch up of any key and touch down on a sequential character key.
- [spaceToCharKey](srkeyboardmetrics/spacetocharkey.md): The duration between touch up of the Space bar and touch down of a sequential character key.
- [charKeyToSpaceKey](srkeyboardmetrics/charkeytospacekey.md): The duration between touch up of a character key and touch down of a sequential Space bar.
- [spaceToDeleteKey](srkeyboardmetrics/spacetodeletekey.md): The duration between touch up of the Space bar and touch down of a sequential Delete key.
- [deleteToSpaceKey](srkeyboardmetrics/deletetospacekey.md): The duration between touch up of the Delete key and touch down of a sequential Space bar.
- [spaceToSpaceKey](srkeyboardmetrics/spacetospacekey.md): The duration between touch up of the Space bar and touch down of a sequential Space bar.
- [spaceToShiftKey](srkeyboardmetrics/spacetoshiftkey.md): The duration between touch up of the Space bar and touch down of a sequential Shift key.
- [spaceToPlaneChangeKey](srkeyboardmetrics/spacetoplanechangekey.md): The duration between touch up of the Space bar and touch down of a sequential plane change key.
- [spaceToPredictionKey](srkeyboardmetrics/spacetopredictionkey.md): The duration between touch up of the Space bar and touch down of a sequential selection from the prediction bar.
- [deleteToCharKey](srkeyboardmetrics/deletetocharkey.md): The duration between touch up of the Delete key and touch down of a sequential character key.
- [charKeyToDelete](srkeyboardmetrics/charkeytodelete.md): The duration between touch up of a character key and touch down of a sequential Delete key.
- [deleteToDelete](srkeyboardmetrics/deletetodelete.md): The duration between touch up of the Delete key and touch down of a sequential Delete key.
- [deleteToDeletes](srkeyboardmetrics/deletetodeletes.md): The duration between touch up of the Delete key and touch down of a sequential Delete key for an entire word.
- [deleteToShiftKey](srkeyboardmetrics/deletetoshiftkey.md): The duration between touch up of the Delete key and touch down of a sequential Shift key.
- [deleteToPlaneChangeKey](srkeyboardmetrics/deletetoplanechangekey.md): The duration between touch up of the Delete key and touch down of a sequential plane change key.
- [anyTapToPlaneChangeKey](srkeyboardmetrics/anytaptoplanechangekey.md): The duration between touch up of any key and touch down on a plane change key.
- [planeChangeToAnyTap](srkeyboardmetrics/planechangetoanytap.md): The duration between touch up on a plane change key and touch down on the next sequential key.
- [charKeyToPlaneChangeKey](srkeyboardmetrics/charkeytoplanechangekey.md): The duration between touch up of a character key and touch down of a sequential plane change key.
- [planeChangeKeyToCharKey](srkeyboardmetrics/planechangekeytocharkey.md): The duration between touch up of a plane change key and touch down of any key.
- [deleteToPath](srkeyboardmetrics/deletetopath.md): The duration between touch up of the Delete key and touch down of a sequential path.
- [pathToDelete](srkeyboardmetrics/pathtodelete.md): The duration between touch up of the Delete key and touch down of a continuous path.
- [spaceToPath](srkeyboardmetrics/spacetopath.md): The duration between touch up of the Space bar and touch down to begin a sequential path.
- [pathToSpace](srkeyboardmetrics/pathtospace.md): The duration between touch up of a path and touch down of a sequential Space bar.
- [pathToPath](srkeyboardmetrics/pathtopath.md): The duration between touch up of a path and touch down of a sequential path.
- [longWordTouchDownUp](srkeyboardmetrics/longwordtouchdownup.md): The duration between touch down and touch up of the character keys of all the long words in the session.
- [longWordTouchDownDown](srkeyboardmetrics/longwordtouchdowndown.md): The duration between touch down and touch down of the character keys of all the long words in the session.
- [longWordTouchUpDown](srkeyboardmetrics/longwordtouchupdown.md): The duration between touch up and touch down of the character keys of all the long words in the session.
- [pathTypingSpeed](srkeyboardmetrics/pathtypingspeed.md): The QuickType words per minute in the session.
- [typingSpeed](srkeyboardmetrics/typingspeed.md): The user’s typing rate in characters per second.

### Measuring Key Use

- [longWordUpErrorDistance](srkeyboardmetrics/longworduperrordistance.md): The distance from the touch up to the center of the intended key of the characters of a long word.
- [longWordDownErrorDistance](srkeyboardmetrics/longworddownerrordistance.md): The distance from the touch down to the center of the intended key of the characters of a long word.
- [upErrorDistance](srkeyboardmetrics/uperrordistance.md): The distance from the touch up to the center of any key.
- [downErrorDistance](srkeyboardmetrics/downerrordistance.md): The distance from the touch down to the center of any key.
- [spaceUpErrorDistance](srkeyboardmetrics/spaceuperrordistance.md): The distance from the touch up to the right centroid of the Space bar.
- [spaceDownErrorDistance](srkeyboardmetrics/spacedownerrordistance.md): The distance from the touch down to the right centroid of the Space bar.
- [deleteUpErrorDistance](srkeyboardmetrics/deleteuperrordistance.md): The distance from the touch up to the center of the Delete key.
- [deleteDownErrorDistance](srkeyboardmetrics/deletedownerrordistance.md): The distance from the touch down to the center of the Delete key.
- [shortWordCharKeyUpErrorDistance](srkeyboardmetrics/shortwordcharkeyuperrordistance.md): The distance from the touch up to the center of the intended key of a character in a short word.
- [shortWordCharKeyDownErrorDistance](srkeyboardmetrics/shortwordcharkeydownerrordistance.md): The distance from the touch down to the center of the intended key of a character in a short word.
- [pathErrorDistanceRatio](srkeyboardmetrics/patherrordistanceratio.md): Sample values of the ratio of error distance between the intended and actual path.

### Inferring Sentiment

- [wordCountForSentimentCategory:](srkeyboardmetrics/wordcount%28for_%29.md): Provides the number of typed words for the specified sentiment in the report.
- [emojiCountForSentimentCategory:](srkeyboardmetrics/emojicount%28for_%29.md): Provides the number of typed emojis for the specified sentiment in the report.
- [SRKeyboardMetricsSentimentCategory](srkeyboardmetrics/sentimentcategory.md): Moods that the framework determines by analyzing the user’s input.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Interpreting data

- [SRAmbientLightSample](srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRDeviceUsageReport](srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRMediaEvent](srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.
