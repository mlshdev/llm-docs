> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmaccessorybrowser/delegate

# delegate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

A delegate that receives updates on the discovered accessories.

## Declaration

```swift
weak var delegate: (any HMAccessoryBrowserDelegate)? { get set }
```

## See Also

### Tracking the addition or removal of accessories

- [HMAccessoryBrowserDelegate](../hmaccessorybrowserdelegate.md): An interface used to notify an accessory browser delegate of new accessories.

# delegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

A delegate that receives updates on the discovered accessories.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<HMAccessoryBrowserDelegate> delegate;
```

## See Also

### Tracking the addition or removal of accessories

- [HMAccessoryBrowserDelegate](../hmaccessorybrowserdelegate.md): An interface used to notify an accessory browser delegate of new accessories.
