> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvasreadersession/init(vascommandconfigurations:delegate:queue:)-23h52](https://developer.apple.com/documentation/corenfc/nfcvasreadersession/init(vascommandconfigurations:delegate:queue:)-23h52)

# init(vasCommandConfigurations:delegate:queue:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a VAS reader session.

## Declaration

```swift
init(vasCommandConfigurations commandConfigurations: [NFCVASCommandConfiguration], delegate: any NFCVASReaderSessionDelegate, queue: dispatch_queue_t?)
```

<a id="return-value"></a>

## Return Value

A newly initialized VAS reader session object.

## See Also

### Creating a VAS Reader Session

- [NFCVASCommandConfiguration](../nfcvascommandconfiguration.md): An object providing the configuration for a GET VAS DATA command.
- [NFCVASReaderSessionDelegate](../nfcvasreadersessiondelegate.md): A protocol that an object implements to receive callbacks from a VAS reader session.

# initWithVASCommandConfigurations:delegate:queue: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a VAS reader session.

## Declaration

```objectivec
- (instancetype) initWithVASCommandConfigurations:(NSArray<NFCVASCommandConfiguration *> *) commandConfigurations delegate:(id<NFCVASReaderSessionDelegate>) delegate queue:(dispatch_queue_t) queue;
```

<a id="return-value"></a>

## Return Value

A newly initialized VAS reader session object.

## See Also

### Creating a VAS Reader Session

- [NFCVASCommandConfiguration](../nfcvascommandconfiguration.md): An object providing the configuration for a GET VAS DATA command.
- [NFCVASReaderSessionDelegate](../nfcvasreadersessiondelegate.md): A protocol that an object implements to receive callbacks from a VAS reader session.
