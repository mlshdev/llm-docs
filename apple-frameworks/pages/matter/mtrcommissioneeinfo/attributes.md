> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioneeinfo/attributes](https://developer.apple.com/documentation/matter/mtrcommissioneeinfo/attributes)

# attributes (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Attributes that were read from the commissionee.  This will contain the following, if they are available:

## Declaration

```swift
var attributes: [MTRAttributePath : [String : Any]]? { get }
```

<a id="discussion"></a>

## Discussion

1. The attributes in extraAttributesToRead on MTRCommissioningParameters.
2. The FeatureMap attributes of all Network Commissioning clusters on the commissionee.

# attributes (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Attributes that were read from the commissionee.  This will contain the following, if they are available:

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDictionary<MTRAttributePath *,NSDictionary<NSString *,id> *> * attributes;
```

<a id="discussion"></a>

## Discussion

1. The attributes in extraAttributesToRead on MTRCommissioningParameters.
2. The FeatureMap attributes of all Network Commissioning clusters on the commissionee.
