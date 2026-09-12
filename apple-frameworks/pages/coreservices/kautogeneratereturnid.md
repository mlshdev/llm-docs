> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kautogeneratereturnid](https://developer.apple.com/documentation/coreservices/kautogeneratereturnid)

# kAutoGenerateReturnID

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If you pass this value for the `returnID` parameter of the [AECreateAppleEvent(\_:\_:\_:\_:\_:\_:)](1448525-aecreateappleevent.md) function, the Apple Event Manager assigns to the created Apple event a return ID that is unique to the current session.

## Declaration

```swift
var kAutoGenerateReturnID: Int { get }
```
