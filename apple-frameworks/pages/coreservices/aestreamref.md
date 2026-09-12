> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aestreamref](https://developer.apple.com/documentation/coreservices/aestreamref)

# AEStreamRef (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An opaque data structure for storing stream-based descriptor data.

## Declaration

```swift
typealias AEStreamRef = OpaquePointer
```

<a id="discussion"></a>

## Discussion

You create `AEStreamRef` objects and manipulate their contents using the stream routines found in the section [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).

# AEStreamRef (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An opaque data structure for storing stream-based descriptor data.

## Declaration

```objectivec
typedef struct OpaqueAEStreamRef *AEStreamRef;
```

<a id="discussion"></a>

## Discussion

You create `AEStreamRef` objects and manipulate their contents using the stream routines found in the section [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).
