> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevice/readattributepaths(_:)](https://developer.apple.com/documentation/matter/mtrdevice/readattributepaths(_:))

# readAttributePaths(\_:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Read the attributes identified by the provided attribute paths.  The paths can include wildcards.

## Declaration

```swift
func readAttributePaths(_ attributePaths: [MTRAttributeRequestPath]) -> [[String : Any]]
```

<a id="return-value"></a>

## Return Value

An array of response-value dictionaries as described in the documentation for MTRDeviceResponseHandler.  Each one will have an MTRAttributePathKey and an MTRDataKey.

<a id="discussion"></a>

## Discussion

Paths that do not correspond to any existing attributes, or that the MTRDevice does not have attribute values for, will not be present in the return value from this function.

# readAttributePaths: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Read the attributes identified by the provided attribute paths.  The paths can include wildcards.

## Declaration

```objectivec
- (NSArray<NSDictionary<NSString *,id> *> *) readAttributePaths:(NSArray<MTRAttributeRequestPath *> *) attributePaths;
```

<a id="return-value"></a>

## Return Value

An array of response-value dictionaries as described in the documentation for MTRDeviceResponseHandler.  Each one will have an MTRAttributePathKey and an MTRDataKey.

<a id="discussion"></a>

## Discussion

Paths that do not correspond to any existing attributes, or that the MTRDevice does not have attribute values for, will not be present in the return value from this function.
