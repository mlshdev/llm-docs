> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/updates/watchos](https://developer.apple.com/documentation/updates/watchos)

# watchOS updates

**Framework:** Updates  
**Kind:** Article

Learn about important changes to watchOS.

<a id="Overview"></a>

## Overview

Browse notable changes in [watchOS apps](https://developer.apple.com/documentation/watchos-apps).

<a id="September-2024"></a>

## September 2024

<a id="Watch-sizes"></a>

### Watch sizes

- Apple Watch Series 10 are larger and have a different aspect ratio than previous watches. The watch is 1mm larger than the Series 9 (42mm and 46mm), but the screen gains more width than height. Use [scenePadding(\_:)](https://developer.apple.com/documentation/swiftui/view/scenepadding%28_:%29) to align text with the text margins, and [ignoresSafeArea(\_:edges:)](https://developer.apple.com/documentation/swiftui/view/ignoressafearea%28_:edges:%29) to extend content beyond the watch’s safe area.

<a id="Shallow-dives"></a>

### Shallow dives

- Apple Watch Series 10 supports the Shallow Depth and Pressure capability. Use [CMWaterSubmersionManager](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanager) to start a shallow dive session, and [underwaterDepth](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/underwaterdepth) and [waterTemperature](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/watertemperature) to read depth and temperature samples from HealthKit.

<a id="June-2024"></a>

## June 2024

<a id="Water-temperature"></a>

### Water temperature

- Access water temperature data from swimming workouts. Apple Watch Ultra records [waterTemperature](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/watertemperature) samples during swimming workouts.

<a id="Double-tap"></a>

### Double tap

- Specify which control responds to the double tap gesture using the [handGestureShortcut(\_:isEnabled:)](https://developer.apple.com/documentation/swiftui/view/handgestureshortcut%28_:isenabled:%29) view modifier, passing [primaryAction](https://developer.apple.com/documentation/swiftui/handgestureshortcut/primaryaction) as the parameter. Double tap can interact with any buttonlike controls, such as buttons or toggles.

<a id="Creating-workouts"></a>

### Creating workouts

- Create custom pool swimming workouts with the [HKWorkoutActivityType.swimming](https://developer.apple.com/documentation/healthkit/hkworkoutactivitytype/swimming) activity.
- Set a distance-with-time goal for custom swimming workouts with the [WorkoutGoal.poolSwimDistanceWithTime(\_:\_:)](https://developer.apple.com/documentation/workoutkit/workoutgoal/poolswimdistancewithtime%28_:_:%29) goal.
- Provide a custom name to a workout step using the [WorkoutStep](https://developer.apple.com/documentation/workoutkit/workoutstep) structure’s [displayName](https://developer.apple.com/documentation/workoutkit/workoutstep/displayname).
- Preview workouts on Apple Watch using the [workoutPreview(\_:isPresented:)](https://developer.apple.com/documentation/swiftui/view/workoutpreview%28_:ispresented:%29) view modifier.
- Set average power goals for cycling and running with [PowerThresholdAlert](https://developer.apple.com/documentation/workoutkit/powerthresholdalert) and [PowerRangeAlert](https://developer.apple.com/documentation/workoutkit/powerrangealert).
- Set pace goals for indoor running with the [SpeedThresholdAlert](https://developer.apple.com/documentation/workoutkit/speedthresholdalert) and [SpeedRangeAlert](https://developer.apple.com/documentation/workoutkit/speedrangealert) targets.

<a id="September-2023"></a>

## September 2023

- When someone performs a Double Tap gesture while viewing a notification on Apple Watch Series 9 or Apple Watch Ultra 2, the system invokes the first nondestructive action. A nondestructive action doesn’t include the [destructive](https://developer.apple.com/documentation/usernotifications/unnotificationactionoptions/destructive) option, and won’t delete user data or change the app irrevocably.

<a id="June-2023"></a>

## June 2023

- Use the new watchOS user interface design to simplify navigation, better use the Digital Crown, and enrich the app experience. For more information, see [Designing for watchOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos) and [Creating an intuitive and effective UI in watchOS 10](https://developer.apple.com/documentation/watchos-apps/creating-an-intuitive-and-effective-ui-in-watchos-10).
- Update your WidgetKit-based complications to take advantage of the Smart Stack on Apple Watch. People can scroll down to see relevant widgets directly on the watch face using the Digital Crown. For more information, see [Increasing the visibility of widgets in Smart Stacks](https://developer.apple.com/documentation/widgetkit/widget-suggestions-in-smart-stacks).
- Use curved text along the bevel or around the corners in WidgetKit-based complications.
- Add state preservation and restoration to watchOS apps. For more information, see [Preserving your app’s UI across launches](https://developer.apple.com/documentation/uikit/preserving-your-app-s-ui-across-launches).
- Use WorkoutKit to create goal, pacer, multisport, and fully custom interval workouts. Display a preview of the workout that shows the workout details, and sync workouts with a paired Apple Watch. For more information, see   [WorkoutKit](https://developer.apple.com/documentation/workoutkit).
- Access batches of high-frequency accelerometer and device motion data during workouts. Use this data to analyze motion — such as a golf or baseball swing — after the action occurs. For more information, see [Core Motion](https://developer.apple.com/documentation/coremotion).
- Use Core Motion’s water submersion manager to monitor shallow dives on Apple Watch Ultra. For more information, see [Core Motion](https://developer.apple.com/documentation/coremotion).
- Support Bluetooth cycling sensors. People can pair power, cadence, and speed sensors to Apple Watch to enhance their cycling workouts. You can access this data using HealthKit for live and historical workouts.

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
