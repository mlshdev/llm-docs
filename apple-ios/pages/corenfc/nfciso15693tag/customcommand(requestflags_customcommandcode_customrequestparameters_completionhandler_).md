> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/customcommand(requestflags:customcommandcode:customrequestparameters:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/customcommand(requestflags:customcommandcode:customrequestparameters:completionhandler:))

# customCommand(requestFlags:customCommandCode:customRequestParameters:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends a custom command (0xA0 to 0xDF command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func customCommand(requestFlags flags: NFCISO15693RequestFlag, customCommandCode: Int, customRequestParameters: Data, completionHandler: @escaping @Sendable (Data, (any Error)?) -> Void)
```

```swift
func customCommand(requestFlags flags: NFCISO15693RequestFlag, customCommandCode: Int, customRequestParameters: Data) async throws -> Data
```

<a id="Discussion"></a>

## Discussion

This method inserts the [icManufacturerCode](icmanufacturercode.md) after the command byte before appending the `customRequestParameters` when constructing the data packet that the method sends to the tag.

# customCommandWithRequestFlag:customCommandCode:customRequestParameters:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends a custom command (0xA0 to 0xDF command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) customCommandWithRequestFlag:(NFCISO15693RequestFlag) flags customCommandCode:(NSInteger) customCommandCode customRequestParameters:(NSData *) customRequestParameters completionHandler:(void (^)(NSData *customResponseParameters, NSError *error)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

This method inserts the [icManufacturerCode](icmanufacturercode.md) after the command byte before appending the `customRequestParameters` when constructing the data packet that the method sends to the tag.
