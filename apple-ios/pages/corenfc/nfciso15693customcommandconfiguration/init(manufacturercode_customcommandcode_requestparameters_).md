> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693customcommandconfiguration/init(manufacturercode:customcommandcode:requestparameters:)](https://developer.apple.com/documentation/corenfc/nfciso15693customcommandconfiguration/init(manufacturercode:customcommandcode:requestparameters:))

# init(manufacturerCode:customCommandCode:requestParameters:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```swift
init(manufacturerCode: Int, customCommandCode: Int, requestParameters: Data?)
```

## Parameters

- `manufacturerCode`: 8 bits manufacturer code.
- `customCommandCode`: 8 bits custom command code.  Valid range is 0xA0 to 0xDF.
- `requestParameters`: Optional custom request parameters.

<a id="discussion"></a>

## Discussion

Initialize with default zero maximum retry and zero retry interval.

# initWithManufacturerCode:customCommandCode:requestParameters: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
- (instancetype) initWithManufacturerCode:(NSUInteger) manufacturerCode customCommandCode:(NSUInteger) customCommandCode requestParameters:(NSData *) requestParameters;
```

## Parameters

- `manufacturerCode`: 8 bits manufacturer code.
- `customCommandCode`: 8 bits custom command code.  Valid range is 0xA0 to 0xDF.
- `requestParameters`: Optional custom request parameters.

<a id="discussion"></a>

## Discussion

Initialize with default zero maximum retry and zero retry interval.
