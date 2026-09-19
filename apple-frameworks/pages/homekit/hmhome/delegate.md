> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmhome/delegate

# delegate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate that receives updates on the state of the home.

## Declaration

```swift
weak var delegate: (any HMHomeDelegate)? { get set }
```

## See Also

### Keeping track of home configuration changes

- [HMHomeDelegate](../hmhomedelegate.md): An interface that communicates changes to a home’s configuration.

# delegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate that receives updates on the state of the home.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<HMHomeDelegate> delegate;
```

## See Also

### Keeping track of home configuration changes

- [HMHomeDelegate](../hmhomedelegate.md): An interface that communicates changes to a home’s configuration.
