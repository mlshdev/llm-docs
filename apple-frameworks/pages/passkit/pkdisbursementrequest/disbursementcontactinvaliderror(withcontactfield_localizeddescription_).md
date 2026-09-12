> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/disbursementcontactinvaliderror(withcontactfield:localizeddescription:)](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/disbursementcontactinvaliderror(withcontactfield:localizeddescription:))

# disbursementContactInvalidError(withContactField:localizedDescription:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Creates a recipient contact error with the supplied field.

## Declaration

```swift
class func disbursementContactInvalidError(withContactField field: PKContactField, localizedDescription: String?) -> any Error
```

## Parameters

- `field`: The [PKContactField](../pkcontactfield.md) that contains the error.
- `localizedDescription`: An optional localized description that the framework displays to the individual.

<a id="return-value"></a>

## Return Value

An [NSError](../../foundation/nserror.md) object.

<a id="Discussion"></a>

## Discussion

There’s limited display space available for descriptions, so keep your messages concise.

## See Also

### Handling errors

- [disbursementCardUnsupportedError()](disbursementcardunsupportederror%28%29.md): Creates an error that indicates that the selected payment pass doesn’t support receiving funds through disbursements.

# disbursementContactInvalidErrorWithContactField:localizedDescription: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Creates a recipient contact error with the supplied field.

## Declaration

```objectivec
+ (NSError *) disbursementContactInvalidErrorWithContactField:(PKContactField) field localizedDescription:(NSString *) localizedDescription;
```

## Parameters

- `field`: The [PKContactField](../pkcontactfield.md) that contains the error.
- `localizedDescription`: An optional localized description that the framework displays to the individual.

<a id="return-value"></a>

## Return Value

An [NSError](../../foundation/nserror.md) object.

<a id="Discussion"></a>

## Discussion

There’s limited display space available for descriptions, so keep your messages concise.

## See Also

### Handling errors

- [disbursementCardUnsupportedError](disbursementcardunsupportederror%28%29.md): Creates an error that indicates that the selected payment pass doesn’t support receiving funds through disbursements.
