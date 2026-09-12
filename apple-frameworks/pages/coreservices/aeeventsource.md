> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aeeventsource](https://developer.apple.com/documentation/coreservices/aeeventsource)

# AEEventSource (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A data type for values that specify how an Apple event was delivered.

## Declaration

```swift
typealias AEEventSource = Int8
```

<a id="discussion"></a>

## Discussion

[Event Source Constants](apple_events/1527201-event_source_constants.md) lists the valid constant values for a variable or parameter of type `AEEventSource`.

You might use a variable of this type, for example, to get the source type of an Apple event by calling the function [AEGetAttributePtr(\_:\_:\_:\_:\_:\_:\_:)](1445109-aegetattributeptr.md). You pass the `keyEventSourceAttr` constant as the value for the `theAEKeyWord` parameter and you pass a pointer to a variable of type `AEEventSource` for the `dataPtr` parameter.On return, the variable will contain one of the event source constant values described in [Event Source Constants](apple_events/1527201-event_source_constants.md). The complete call looks like the following:

<a id="2556033"></a>

**Listing 1**

```occ
AppleEvent       theAppleEvent; // previously obtained Apple event
DescType        returnedType;
AEEventSource   sourceOfAE;
Size            actualSize;
OSErr           myErr;
myErr = AEGetAttributePtr(theAppleEvent,
                            keyEventSourceAttr,
                            typeShortInteger,
                            &returnedType,
                            (void *) &sourceOfAE,
                            sizeof (sourceOfAE),
                            &actualSize);
```

# AEEventSource (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A data type for values that specify how an Apple event was delivered.

## Declaration

```objectivec
typedef SInt8 AEEventSource;
```

<a id="discussion"></a>

## Discussion

[Event Source Constants](1527201-event_source_constants.md) lists the valid constant values for a variable or parameter of type `AEEventSource`.

You might use a variable of this type, for example, to get the source type of an Apple event by calling the function [AEGetAttributePtr](1445109-aegetattributeptr.md). You pass the `keyEventSourceAttr` constant as the value for the `theAEKeyWord` parameter and you pass a pointer to a variable of type `AEEventSource` for the `dataPtr` parameter.On return, the variable will contain one of the event source constant values described in [Event Source Constants](1527201-event_source_constants.md). The complete call looks like the following:

<a id="2556033"></a>

**Listing 1**

```occ
AppleEvent       theAppleEvent; // previously obtained Apple event
DescType        returnedType;
AEEventSource   sourceOfAE;
Size            actualSize;
OSErr           myErr;
myErr = AEGetAttributePtr(theAppleEvent,
                            keyEventSourceAttr,
                            typeShortInteger,
                            &returnedType,
                            (void *) &sourceOfAE,
                            sizeof (sourceOfAE),
                            &actualSize);
```
