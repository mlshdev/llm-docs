> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmhomemanager/delegate

# delegate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate that receives updates on the collection of homes.

## Declaration

```swift
weak var delegate: (any HMHomeManagerDelegate)? { get set }
```

## See Also

### Keeping track of connected homes

- [HMHomeManagerDelegate](../hmhomemanagerdelegate.md): An interface the home manager uses to communicate changes to the state of the home network.

# delegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate that receives updates on the collection of homes.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<HMHomeManagerDelegate> delegate;
```

## See Also

### Keeping track of connected homes

- [HMHomeManagerDelegate](../hmhomemanagerdelegate.md): An interface the home manager uses to communicate changes to the state of the home network.
