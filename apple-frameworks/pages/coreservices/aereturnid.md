> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aereturnid](https://developer.apple.com/documentation/coreservices/aereturnid)

# AEReturnID (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a return ID for a created Apple event.

## Declaration

```swift
typealias AEReturnID = Int16
```

<a id="discussion"></a>

## Discussion

When you call the [AECreateAppleEvent(\_:\_:\_:\_:\_:\_:)](1448525-aecreateappleevent.md) function, you pass a value of type `AEReturnID` for the `returnID` parameter. [ID Constants for the AECreateAppleEvent Function](apple_events/1542799-id_constants_for_the_aecreateapp.md) lists the valid constant values for a variable or parameter of this type.

# AEReturnID (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a return ID for a created Apple event.

## Declaration

```objectivec
typedef SInt16 AEReturnID;
```

<a id="discussion"></a>

## Discussion

When you call the [AECreateAppleEvent](1448525-aecreateappleevent.md) function, you pass a value of type `AEReturnID` for the `returnID` parameter. [ID Constants for the AECreateAppleEvent Function](1542799-id_constants_for_the_aecreateapp.md) lists the valid constant values for a variable or parameter of this type.
