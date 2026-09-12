> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioneeinfo/endpointsbyid](https://developer.apple.com/documentation/matter/mtrcommissioneeinfo/endpointsbyid)

# endpointsById (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Endpoint information for all endpoints of the commissionee. Will be present only if readEndpointInformation is set to YES on MTRCommissioningParameters.

## Declaration

```swift
var endpointsById: [NSNumber : MTREndpointInfo]? { get }
```

<a id="discussion"></a>

## Discussion

Use `rootEndpoint` and `-[MTREndpointInfo children]` to traverse endpoints in composition order.

# endpointsById (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Endpoint information for all endpoints of the commissionee. Will be present only if readEndpointInformation is set to YES on MTRCommissioningParameters.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDictionary<NSNumber *,MTREndpointInfo *> * endpointsById;
```

<a id="discussion"></a>

## Discussion

Use `rootEndpoint` and `-[MTREndpointInfo children]` to traverse endpoints in composition order.
