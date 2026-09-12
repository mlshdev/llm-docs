> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aedisposeexternalupp](https://developer.apple.com/documentation/coreservices/aedisposeexternalupp)

# AEDisposeExternalUPP (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Defines a universal procedure pointer to a function the Apple Event Manager calls to dispose of a descriptor created by the `AECreateDescFromExternalPtr` function.

## Declaration

```swift
typealias AEDisposeExternalUPP = AEDisposeExternalProcPtr
```

<a id="discussion"></a>

## Discussion

See the [AEDisposeExternalProcPtr](aedisposeexternalprocptr.md) callback function.

# AEDisposeExternalUPP (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Defines a universal procedure pointer to a function the Apple Event Manager calls to dispose of a descriptor created by the `AECreateDescFromExternalPtr` function.

## Declaration

```objectivec
typedef AEDisposeExternalProcPtr AEDisposeExternalUPP;
```

<a id="discussion"></a>

## Discussion

See the [AEDisposeExternalProcPtr](aedisposeexternalprocptr.md) callback function.
