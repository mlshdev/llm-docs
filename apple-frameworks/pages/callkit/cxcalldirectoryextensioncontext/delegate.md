> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontext/delegate

# delegate (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

Sets a delegate that can handle request failures for the Call Directory extension context object.

## Declaration

```swift
weak var delegate: (any CXCallDirectoryExtensionContextDelegate)? { get set }
```

# delegate (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Sets a delegate that can handle request failures for the Call Directory extension context object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CXCallDirectoryExtensionContextDelegate> delegate;
```
