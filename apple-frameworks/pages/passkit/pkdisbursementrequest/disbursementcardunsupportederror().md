> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/disbursementcardunsupportederror()](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/disbursementcardunsupportederror())

# disbursementCardUnsupportedError() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Creates an error that indicates that the selected payment pass doesn’t support receiving funds through disbursements.

## Declaration

```swift
class func disbursementCardUnsupportedError() -> any Error
```

<a id="return-value"></a>

## Return Value

An [NSError](../../foundation/nserror.md) that describes the error condition.

## See Also

### Handling errors

- [disbursementContactInvalidError(withContactField:localizedDescription:)](disbursementcontactinvaliderror%28withcontactfield_localizeddescription_%29.md): Creates a recipient contact error with the supplied field.

# disbursementCardUnsupportedError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Creates an error that indicates that the selected payment pass doesn’t support receiving funds through disbursements.

## Declaration

```objectivec
+ (NSError *) disbursementCardUnsupportedError;
```

<a id="return-value"></a>

## Return Value

An [NSError](../../foundation/nserror.md) that describes the error condition.

## See Also

### Handling errors

- [disbursementContactInvalidErrorWithContactField:localizedDescription:](disbursementcontactinvaliderror%28withcontactfield_localizeddescription_%29.md): Creates a recipient contact error with the supplied field.
