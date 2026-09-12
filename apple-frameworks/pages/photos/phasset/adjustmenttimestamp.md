> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/adjustmenttimestamp](https://developer.apple.com/documentation/photos/phasset/adjustmenttimestamp)

# adjustmentTimestamp (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The date when the asset was last edited.

## Declaration

```swift
var adjustmentTimestamp: Date? { get }
```

<a id="discussion"></a>

## Discussion

If the asset has never been edited, then this property is nil. If the asset was edited and later reverted, such that hasAdjustments is false, then `adjustmentTimestamp` is the timestamp of the revert operation.

# adjustmentTimestamp (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The date when the asset was last edited.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDate * adjustmentTimestamp;
```

<a id="discussion"></a>

## Discussion

If the asset has never been edited, then this property is nil. If the asset was edited and later reverted, such that hasAdjustments is false, then `adjustmentTimestamp` is the timestamp of the revert operation.
