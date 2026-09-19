> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmhome/mattercontrollerxpcconnectblock

# matterControllerXPCConnectBlock (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
var matterControllerXPCConnectBlock: () -> NSXPCConnection { get }
```

## See Also

### Instance Properties

- [matterControllerID](mattercontrollerid.md)

# matterControllerXPCConnectBlock (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSXPCConnection *(^)(void) matterControllerXPCConnectBlock;
```

## See Also

### Instance Properties

- [matterControllerID](mattercontrollerid.md)
