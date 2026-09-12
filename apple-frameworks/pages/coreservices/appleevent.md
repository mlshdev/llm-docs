> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/appleevent](https://developer.apple.com/documentation/coreservices/appleevent)

# AppleEvent (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A descriptor whose data is a list of descriptors containing both attributes and parameters that make up an Apple event.

## Declaration

```swift
typealias AppleEvent = AERecord
```

<a id="discussion"></a>

## Discussion

The Apple event data type describes a full-fledged Apple event. Like the data for an Apple event record (data type [AERecord](aerecord.md)), the data for an Apple event consists of a list of keyword-specified descriptors. Unlike an Apple event record, the data for an Apple event is conceptually divided into two parts, one for attributes and one for parameters. This division within the Apple event allows the Apple Event Manager to distinguish between an event’s attributes and its parameters.

Many functions work with Apple events, including the functions described in [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager), [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager), [Creating an Apple Event](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1651538), and [Sending an Apple Event](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652529).

# AppleEvent (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A descriptor whose data is a list of descriptors containing both attributes and parameters that make up an Apple event.

## Declaration

```objectivec
typedef AERecord AppleEvent;
```

<a id="discussion"></a>

## Discussion

The Apple event data type describes a full-fledged Apple event. Like the data for an Apple event record (data type [AERecord](aerecord.md)), the data for an Apple event consists of a list of keyword-specified descriptors. Unlike an Apple event record, the data for an Apple event is conceptually divided into two parts, one for attributes and one for parameters. This division within the Apple event allows the Apple Event Manager to distinguish between an event’s attributes and its parameters.

Many functions work with Apple events, including the functions described in [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager), [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager), [Creating an Apple Event](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1651538), and [Sending an Apple Event](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652529).
