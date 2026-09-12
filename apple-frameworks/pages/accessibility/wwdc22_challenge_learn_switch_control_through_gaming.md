> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/wwdc22_challenge_learn_switch_control_through_gaming](https://developer.apple.com/documentation/accessibility/wwdc22_challenge_learn_switch_control_through_gaming)

# WWDC22 Challenge: Learn Switch Control through gaming

**Interface languages:** Swift, Objective-C

**Framework:** Accessibility  
**Kind:** Sample Code  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · Xcode 14.0+

Play a card-matching game using Switch Control.

<a id="Overview"></a>

## Overview

> **Note**

> This is a companion project for WWDC22 Challenge [Learn Switch Control through gaming](https://developer.apple.com/news/?id=2nfiv7v0).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

This project requires an iPhone or iPad, that’s running iOS 16 or iPadOS 16. It doesn’t support running in Simulator.

<a id="Configure-and-enable-switch-control"></a>

### Configure and enable switch control

You need to enable and configure Switch Control to play this game. Switch Control is an accessibility feature that helps you interact with your device using a variety of software and hardware switches. These can be located on the screen, and can use the camera, sounds, or connected accessories.

First, configure a switch for Switch Control:

1. Open the Settings app.
2. Choose Accessibility \> Switch Control \> Switches.
3. Select Add New Switch, select a type of switch, then select an action for the switch.
4. Alternatively, you can choose Bluetooth Devices, select a device to use as a switch, and select an action for that switch.

After you’ve finished setting up your switch, you’re ready to enable Switch Control on your device. If you don’t typically use Switch Control, you can set up an Accessibility Shortcut to quickly enable or disable it for the purposes of this challenge. Here’s how:

1. Open the Settings app.
2. Choose Accessibility \> Accessibility Shortcut.
3. Select Switch Control. Make sure this is the only enabled item in the list.

You can now triple-click the Side button or Home button on your device to trigger the Accessibility Shortcut and toggle Switch Control on or off.

## See Also

### WWDC Challenges

- [WWDC21 Challenge: Large Text Challenge](wwdc21_challenge_large_text_challenge.md): Design for large text sizes by modifying the user interface.
- [WWDC21 Challenge: Speech Synthesizer Simulator](wwdc21_challenge_speech_synthesizer_simulator.md): Simulate a conversation using speech synthesis.
- [WWDC21 Challenge: VoiceOver Maze](wwdc21_challenge_voiceover_maze.md): Navigate to the end of a dark maze using VoiceOver as your guide.
