> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningparameters/extraattributestoread](https://developer.apple.com/documentation/matter/mtrcommissioningparameters/extraattributestoread)

# extraAttributesToRead (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

List of attribute paths to read from the commissionee (in addition to whatever attributes are already read to handle readEndpointInformation being YES, or to handle other commissioning tasks).

## Declaration

```swift
var extraAttributesToRead: [MTRAttributeRequestPath]? { get set }
```

<a id="discussion"></a>

## Discussion

The FeatureMap attribute of all Network Commissioning clusters on the commissionee will always be read and does not need to be included in this list.

# extraAttributesToRead (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

List of attribute paths to read from the commissionee (in addition to whatever attributes are already read to handle readEndpointInformation being YES, or to handle other commissioning tasks).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<MTRAttributeRequestPath *> * extraAttributesToRead;
```

<a id="discussion"></a>

## Discussion

The FeatureMap attribute of all Network Commissioning clusters on the commissionee will always be read and does not need to be included in this list.
