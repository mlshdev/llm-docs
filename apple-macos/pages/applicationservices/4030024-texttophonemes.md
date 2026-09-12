> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/4030024-texttophonemes](https://developer.apple.com/documentation/applicationservices/4030024-texttophonemes)

# TextToPhonemes(\_:\_:\_:\_:\_:)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 16.0+ (deprecated in 16.0) · Xcode 14.0+ (deprecated in 14.0)

## Declaration

```swift
func TextToPhonemes(_ chan: SpeechChannel, _ textBuf: UnsafeRawPointer, _ textBytes: UInt, _ phonemeBuf: Handle, _ phonemeBytes: UnsafeMutablePointer<Int>) -> OSErr
```
