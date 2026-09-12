> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol/isproxy()](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isproxy())

# isProxy() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the receiver does not descend from [NSObject](../nsobject-swift.class.md).

## Declaration

```swift
func isProxy() -> Bool
```

<a id="return-value"></a>

## Return Value

[NO](../no.md) if the receiver really descends from [NSObject](../nsobject-swift.class.md), otherwise [YES](../yes.md).

<a id="Discussion"></a>

## Discussion

This method is necessary because sending [isKind(of:)](iskind%28of_%29.md) or [isMember(of:)](ismember%28of_%29.md) to an [NSProxy](../../foundation/nsproxy.md) object will test the object the proxy stands in for, not the proxy itself. Use this method to test if the receiver is a proxy (or a member of some other root class).

# isProxy (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the receiver does not descend from [NSObject](../nsobject-swift.class.md).

## Declaration

```objectivec
- (BOOL) isProxy;
```

<a id="return-value"></a>

## Return Value

[NO](../no.md) if the receiver really descends from [NSObject](../nsobject-swift.class.md), otherwise [YES](../yes.md).

<a id="Discussion"></a>

## Discussion

This method is necessary because sending [isKindOfClass:](iskind%28of_%29.md) or [isMemberOfClass:](ismember%28of_%29.md) to an [NSProxy](../../foundation/nsproxy.md) object will test the object the proxy stands in for, not the proxy itself. Use this method to test if the receiver is a proxy (or a member of some other root class).
