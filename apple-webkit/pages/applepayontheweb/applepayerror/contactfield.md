> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayerror/contactfield](https://developer.apple.com/documentation/applepayontheweb/applepayerror/contactfield)

# contactField

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The field name that contains the error on the payment sheet.

## Declaration

```
attribute ApplePayErrorContactField contactField;
```

<a id="Discussion"></a>

## Discussion

The payment sheet highlights the field corresponding to the value of this attribute.

For the possible field values, see [ApplePayErrorContactField](../applepayerrorcontactfield.md).

## See Also

### Error Properties

- [code](code.md): The error code for this instance.
- [message](message.md): A localized, user-facing string that describes the error.
