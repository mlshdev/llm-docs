> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693customcommandconfiguration/init(manufacturercode:customcommandcode:requestparameters:maximumretries:retryinterval:)

# init(manufacturerCode:customCommandCode:requestParameters:maximumRetries:retryInterval:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```swift
init(manufacturerCode: Int, customCommandCode: Int, requestParameters: Data?, maximumRetries: Int, retryInterval: TimeInterval)
```

## Parameters

- `manufacturerCode`: 8 bits manufacturer code.
- `customCommandCode`: 8 bits custom command code.  Valid range is 0xA0 to 0xDF.
- `requestParameters`: Optional custom request parameters.
- `maximumRetries`: Maximum number of retry attempt when tag response is not received.
- `retryInterval`: Time interval wait between each retry attempt.

# initWithManufacturerCode:customCommandCode:requestParameters:maximumRetries:retryInterval: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
- (instancetype) initWithManufacturerCode:(NSUInteger) manufacturerCode customCommandCode:(NSUInteger) customCommandCode requestParameters:(NSData *) requestParameters maximumRetries:(NSUInteger) maximumRetries retryInterval:(NSTimeInterval) retryInterval;
```

## Parameters

- `manufacturerCode`: 8 bits manufacturer code.
- `customCommandCode`: 8 bits custom command code.  Valid range is 0xA0 to 0xDF.
- `requestParameters`: Optional custom request parameters.
- `maximumRetries`: Maximum number of retry attempt when tag response is not received.
- `retryInterval`: Time interval wait between each retry attempt.
