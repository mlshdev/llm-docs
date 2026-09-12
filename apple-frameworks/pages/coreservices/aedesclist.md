> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aedesclist](https://developer.apple.com/documentation/coreservices/aedesclist)

# AEDescList (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A descriptor whose data consists of a list of one or more descriptors.

## Declaration

```swift
typealias AEDescList = AEDesc
```

<a id="discussion"></a>

## Discussion

Descriptor lists are a key building block of Apple events.

A descriptor list is identical to a descriptor of data type [AEDesc](aedesc.md) —the only difference is that the data in a descriptor list must always consist of a list of other descriptors.

Many Apple Event Manager functions take or return lists of descriptors in descriptor lists. For example, see the functions described in [Counting the Items in Descriptor Lists](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1651518) and [Getting Items From Descriptor Lists](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652069).

The format of the data in the `dataHandle` of the descriptor is private. You can only operate on the contained elements with Apple Event Manager functions, including those described in [Counting the Items in Descriptor Lists](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1651518) and [Getting Items From Descriptor Lists](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652069).

# AEDescList (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A descriptor whose data consists of a list of one or more descriptors.

## Declaration

```objectivec
typedef AEDesc AEDescList;
```

<a id="discussion"></a>

## Discussion

Descriptor lists are a key building block of Apple events.

A descriptor list is identical to a descriptor of data type [AEDesc](aedesc.md) —the only difference is that the data in a descriptor list must always consist of a list of other descriptors.

Many Apple Event Manager functions take or return lists of descriptors in descriptor lists. For example, see the functions described in [Counting the Items in Descriptor Lists](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1651518) and [Getting Items From Descriptor Lists](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652069).

The format of the data in the `dataHandle` of the descriptor is private. You can only operate on the contained elements with Apple Event Manager functions, including those described in [Counting the Items in Descriptor Lists](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1651518) and [Getting Items From Descriptor Lists](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652069).
