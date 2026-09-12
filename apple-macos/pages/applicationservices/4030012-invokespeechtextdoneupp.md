> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/4030012-invokespeechtextdoneupp](https://developer.apple.com/documentation/applicationservices/4030012-invokespeechtextdoneupp)

# InvokeSpeechTextDoneUPP(\_:\_:\_:\_:\_:\_:)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 16.0+ (deprecated in 16.0) · Xcode 14.0+ (deprecated in 14.0)

## Declaration

```swift
func InvokeSpeechTextDoneUPP(_ chan: SpeechChannel, _ refCon: SRefCon, _ nextBuf: UnsafeMutablePointer<UnsafeRawPointer?>?, _ byteLen: UnsafeMutablePointer<UInt>, _ controlFlags: UnsafeMutablePointer<Int32>, _ userUPP: SpeechTextDoneUPP)
```
