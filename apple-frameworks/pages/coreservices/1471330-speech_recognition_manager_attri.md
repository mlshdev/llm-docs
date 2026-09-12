> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471330-speech_recognition_manager_attri](https://developer.apple.com/documentation/coreservices/1471330-speech_recognition_manager_attri)

# Speech Recognition Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Speech Recognition Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltSpeechRecognitionAttr](1471330-speech_recognition_manager_attri/gestaltspeechrecognitionattr.md): The selector which you pass to the `Gestalt` function to determine the Speech Recognition Manager attributes.
- [gestaltDesktopSpeechRecognition](1471330-speech_recognition_manager_attri/gestaltdesktopspeechrecognition.md): If this bit is set, the Speech Recognition Manager supports the desktop microphone.
- [gestaltTelephoneSpeechRecognition](1471330-speech_recognition_manager_attri/gestalttelephonespeechrecognition.md): If this bit is set, the Speech Recognition Manager supports telephone input. In versions 1.5 and earlier, this bit is always 0.
