> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanager/delegate](https://developer.apple.com/documentation/backgroundassets/badownloadmanager/delegate)

# delegate (Swift)

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

The download manager’s delegate.

## Declaration

```swift
weak var delegate: (any BADownloadManagerDelegate)? { get set }
```

## See Also

### Monitoring downloads

- [BADownloadManagerDelegate](../badownloadmanagerdelegate.md): An interface for reacting to asset download events and processing concluded downloads.

# delegate (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

The download manager’s delegate.

## Declaration

```objectivec
@property (weak) id<BADownloadManagerDelegate> delegate;
```

## See Also

### Monitoring downloads

- [BADownloadManagerDelegate](../badownloadmanagerdelegate.md): An interface for reacting to asset download events and processing concluded downloads.
