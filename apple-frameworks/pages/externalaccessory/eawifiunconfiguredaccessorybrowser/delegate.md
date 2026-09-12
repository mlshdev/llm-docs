> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowser/delegate](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowser/delegate)

# delegate (Swift)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The object that acts as the delegate of the browser and receives browser events.

## Declaration

```swift
weak var delegate: (any EAWiFiUnconfiguredAccessoryBrowserDelegate)? { get set }
```

## See Also

### Managing Browser Interactions

- [EAWiFiUnconfiguredAccessoryBrowserDelegate](../eawifiunconfiguredaccessorybrowserdelegate.md): A protocol you use to manage the search and configuration processes for an unconfigured accessory browser.

# delegate (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The object that acts as the delegate of the browser and receives browser events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<EAWiFiUnconfiguredAccessoryBrowserDelegate> delegate;
```

## See Also

### Managing Browser Interactions

- [EAWiFiUnconfiguredAccessoryBrowserDelegate](../eawifiunconfiguredaccessorybrowserdelegate.md): A protocol you use to manage the search and configuration processes for an unconfigured accessory browser.
