> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrcommissioneeinfo/rootendpoint

# rootEndpoint (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Endpoint information for the root endpoint of the commissionee. Will be present only if readEndpointInformation is set to YES on MTRCommissioningParameters.

## Declaration

```swift
@NSCopying var rootEndpoint: MTREndpointInfo? { get }
```

# rootEndpoint (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Endpoint information for the root endpoint of the commissionee. Will be present only if readEndpointInformation is set to YES on MTRCommissioningParameters.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) MTREndpointInfo * rootEndpoint;
```
