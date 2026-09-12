> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsalwaysallowmicrophonemodecontrol](https://developer.apple.com/documentation/bundleresources/information-property-list/nsalwaysallowmicrophonemodecontrol)

# NSAlwaysAllowMicrophoneModeControl

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A Boolean value that indicates if a person can configure a microphone mode regardless of whether the microphone is in an active state.

## Details

`NSAlwaysAllowMicrophoneModeControl`

<a id="Discussion"></a>

## Discussion

When your app is in the foreground, use this key to allow someone to configure their microphone mode — automatic, standard, voice isolation, or wide spectrum — before activating the microphone. For example, a person can configure the microphone mode to voice isolation before starting a call in your teleconferencing app.
