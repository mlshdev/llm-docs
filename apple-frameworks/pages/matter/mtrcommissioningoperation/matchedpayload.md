> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningoperation/matchedpayload](https://developer.apple.com/documentation/matter/mtrcommissioningoperation/matchedpayload)

# matchedPayload (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

If not nil, the payload (from possibly multiple payloads represented by the provided setupPayload) that represents the commissionee we successfully established PASE with.  This will only be non-nil after successful PASE establishment.

## Declaration

```swift
var matchedPayload: MTRSetupPayload? { get }
```

# matchedPayload (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

If not nil, the payload (from possibly multiple payloads represented by the provided setupPayload) that represents the commissionee we successfully established PASE with.  This will only be non-nil after successful PASE establishment.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) MTRSetupPayload * matchedPayload;
```
