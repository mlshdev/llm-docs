> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/sendcustomcommand(commandconfiguration:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/sendcustomcommand(commandconfiguration:completionhandler:))

# sendCustomCommand(commandConfiguration:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```swift
func sendCustomCommand(commandConfiguration: NFCISO15693CustomCommandConfiguration, completionHandler: @escaping (Data, (any Error)?) -> Void)
```

## Parameters

- `commandConfiguration`: Configuration for the Manufacturer Custom Command.
- `completionHandler`: Completion handler called when the operation is completed.  error is nil if operation succeeds. A @link NFCISO15693TagResponseErrorKey @link/ in NSError userInfo dictionary is returned when the tag responded to the command with an error, and the error code value is defined in ISO15693-3 specification.

<a id="discussion"></a>

## Discussion

Send a manufacturer dependent custom command using command code range from 0xA0 to 0xDF.  Refer to ISO15693-3 specification for details.

# sendCustomCommandWithConfiguration:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
- (void) sendCustomCommandWithConfiguration:(NFCISO15693CustomCommandConfiguration *) commandConfiguration completionHandler:(void (^)(NSData *customResponseParameters, NSError *error)) completionHandler;
```

## Parameters

- `commandConfiguration`: Configuration for the Manufacturer Custom Command.
- `completionHandler`: Completion handler called when the operation is completed.  error is nil if operation succeeds. A @link NFCISO15693TagResponseErrorKey @link/ in NSError userInfo dictionary is returned when the tag responded to the command with an error, and the error code value is defined in ISO15693-3 specification.

<a id="discussion"></a>

## Discussion

Send a manufacturer dependent custom command using command code range from 0xA0 to 0xDF.  Refer to ISO15693-3 specification for details.
