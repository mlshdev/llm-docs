> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetextfield/settextcontenttype(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacetextfield/settextcontenttype(_:))

# setTextContentType(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text field’s semantic meaning.

## Declaration

```swift
func setTextContentType(_ textContentType: WKTextContentType?)
```

## Parameters

- `textContentType`: The text field’s content type. Passing `nil` clears the content type. For a list of possible content types, see [WKTextContentType](../wktextcontenttype.md).

<a id="Discussion"></a>

## Discussion

The text field’s content type modifies how the text input controller and Apple Continuity Keyboard behave.

- The input controller provides suggestions for [oneTimeCode](../wktextcontenttype/onetimecode.md) content types, when available.
- The input controller displays a number pad for [telephoneNumber](../wktextcontenttype/telephonenumber.md), [creditCardNumber](../wktextcontenttype/creditcardnumber.md), [oneTimeCode](../wktextcontenttype/onetimecode.md), and [postalCode](../wktextcontenttype/postalcode.md) content types.
- The input controller disables dictation for [password](../wktextcontenttype/password.md) and [newPassword](../wktextcontenttype/newpassword.md) content types.
- The Apple Continuity Keyboard autofills data based on the content type. To share login credentials from your web page, set up an associated domain for your watchOS app.

## See Also

### Specifying the Content Type

- [WKTextContentType](../wktextcontenttype.md): Constants that specify a text field’s semantic meaning.

# setTextContentType: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text field’s semantic meaning.

## Declaration

```objectivec
- (void) setTextContentType:(WKTextContentType) textContentType;
```

## Parameters

- `textContentType`: The text field’s content type. Passing `nil` clears the content type. For a list of possible content types, see [WKTextContentType](../wktextcontenttype.md).

<a id="Discussion"></a>

## Discussion

The text field’s content type modifies how the text input controller and Apple Continuity Keyboard behave.

- The input controller provides suggestions for [WKTextContentTypeOneTimeCode](../wktextcontenttype/onetimecode.md) content types, when available.
- The input controller displays a number pad for [WKTextContentTypeTelephoneNumber](../wktextcontenttype/telephonenumber.md), [WKTextContentTypeCreditCardNumber](../wktextcontenttype/creditcardnumber.md), [WKTextContentTypeOneTimeCode](../wktextcontenttype/onetimecode.md), and [WKTextContentTypePostalCode](../wktextcontenttype/postalcode.md) content types.
- The input controller disables dictation for [WKTextContentTypePassword](../wktextcontenttype/password.md) and [WKTextContentTypeNewPassword](../wktextcontenttype/newpassword.md) content types.
- The Apple Continuity Keyboard autofills data based on the content type. To share login credentials from your web page, set up an associated domain for your watchOS app.

## See Also

### Specifying the Content Type

- [WKTextContentType](../wktextcontenttype.md): Constants that specify a text field’s semantic meaning.
