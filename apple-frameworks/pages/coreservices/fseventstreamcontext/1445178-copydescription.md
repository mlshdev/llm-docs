> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/fseventstreamcontext/1445178-copydescription](https://developer.apple.com/documentation/coreservices/fseventstreamcontext/1445178-copydescription)

# copyDescription (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The callback used to create a descriptive string representation of the info pointer (or the data pointed to by the info pointer) for debugging purposes. This can be NULL.

## Declaration

```swift
var copyDescription: CFAllocatorCopyDescriptionCallBack?
```

# copyDescription (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The callback used to create a descriptive string representation of the info pointer (or the data pointed to by the info pointer) for debugging purposes. This can be NULL.

## Declaration

```objectivec
CFAllocatorCopyDescriptionCallBack copyDescription;
```
