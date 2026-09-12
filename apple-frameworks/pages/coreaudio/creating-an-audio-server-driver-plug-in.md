> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/creating-an-audio-server-driver-plug-in](https://developer.apple.com/documentation/coreaudio/creating-an-audio-server-driver-plug-in)

# Creating an Audio Server Driver Plug-in

**Interface languages:** Swift, Objective-C

**Framework:** Core Audio  
**Kind:** Sample Code  
**Availability:** macOS 12.0+ · Xcode 13.0+

Build a virtual audio device by creating a custom driver plug-in.

<a id="Overview"></a>

## Overview

This sample shows how to create a minimal Audio Server plug-in. Written in standard C, the sample provides the minimal implementation you need to publish a single, functioning audio device to the system. The audio device provides the following features:

- Configurable device primary volume, muting, and data sources
- 44.1 kHz and 48 kHz sample rates
- Two channels of audio I/O in 32-bit, floating point, linear PCM format

Install the sample’s `.driver` bundle to `/Library/Audio/Plug-Ins/HAL` and reboot your computer. Use Audio MIDI Setup to inspect the newly installed device.

## See Also

### Drivers

- [Building an Audio Server Plug-in and Driver Extension](building-an-audio-server-plug-in-and-driver-extension.md): Create a plug-in and driver extension to support an audio device in macOS.
- [Capturing system audio with Core Audio taps](capturing-system-audio-with-core-audio-taps.md): Use a Core Audio tap to capture outgoing audio from a process or group of processes.
