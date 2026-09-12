> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentauthorizationresult/errors](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentauthorizationresult/errors)

# errors

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A list of custom errors to display on the payment sheet.

## Declaration

```
sequence <ApplePayError> errors;
```

<a id="Discussion"></a>

## Discussion

List the errors on the payment sheet for the user to remedy. If there are multiple errors, list the most critical error first. For information about errors, see [ApplePayError](../applepayerror.md).

## See Also

### Providing authorization results

- [status](status.md): The status code for the authorization result.
