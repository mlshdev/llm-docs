> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevice/descriptorclusters()](https://developer.apple.com/documentation/matter/mtrdevice/descriptorclusters())

# descriptorClusters() (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Read all known attributes from descriptor clusters on all known endpoints.

## Declaration

```swift
func descriptorClusters() -> [MTRAttributePath : [String : Any]]
```

<a id="return-value"></a>

## Return Value

A dictionary with the paths of the attributes as keys and the data-values (as described in the documentation for MTRDeviceResponseHandler) as values.

# descriptorClusters (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Read all known attributes from descriptor clusters on all known endpoints.

## Declaration

```objectivec
- (NSDictionary<MTRAttributePath *,NSDictionary<NSString *,id> *> *) descriptorClusters;
```

<a id="return-value"></a>

## Return Value

A dictionary with the paths of the attributes as keys and the data-values (as described in the documentation for MTRDeviceResponseHandler) as values.
