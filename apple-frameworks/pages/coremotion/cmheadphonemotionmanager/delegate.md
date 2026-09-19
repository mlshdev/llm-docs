> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanager/delegate

# delegate (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

The object that receives headphone motion manager events.

## Declaration

```swift
weak var delegate: (any CMHeadphoneMotionManagerDelegate)? { get set }
```

## See Also

### Getting the Delegate

- [CMHeadphoneMotionManagerDelegate](../cmheadphonemotionmanagerdelegate.md): A set of methods that defines an interface for connecting and disconnecting headphones.

# delegate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

The object that receives headphone motion manager events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CMHeadphoneMotionManagerDelegate> delegate;
```

## See Also

### Getting the Delegate

- [CMHeadphoneMotionManagerDelegate](../cmheadphonemotionmanagerdelegate.md): A set of methods that defines an interface for connecting and disconnecting headphones.
