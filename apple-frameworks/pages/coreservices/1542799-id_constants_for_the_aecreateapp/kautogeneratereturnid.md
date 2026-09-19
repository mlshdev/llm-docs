> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1542799-id_constants_for_the_aecreateapp/kautogeneratereturnid

# kAutoGenerateReturnID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If you pass this value for the `returnID` parameter of the [AECreateAppleEvent](../1448525-aecreateappleevent.md) function, the Apple Event Manager assigns to the created Apple event a return ID that is unique to the current session.

## Declaration

```objectivec
kAutoGenerateReturnID = -1
```
