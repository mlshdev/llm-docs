> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/nodeswithstoreddata](https://developer.apple.com/documentation/matter/mtrdevicecontroller/nodeswithstoreddata)

# nodesWithStoredData (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Returns the list of node IDs for which this controller has stored information.  Returns empty list if the controller does not have any information stored.

## Declaration

```swift
var nodesWithStoredData: [NSNumber] { get }
```

# nodesWithStoredData (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Returns the list of node IDs for which this controller has stored information.  Returns empty list if the controller does not have any information stored.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * nodesWithStoredData;
```
