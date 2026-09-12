> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload/wellknowntypetextpayloadwithlocale:](https://developer.apple.com/documentation/corenfc/nfcndefpayload/wellknowntypetextpayloadwithlocale:)

# wellKnownTypeTextPayloadWithLocale:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Returns the text of a valid Well Known Type Text payload.

## Declaration

```objectivec
- (NSString *) wellKnownTypeTextPayloadWithLocale:(NSLocale **) locale;
```

<a id="return-value"></a>

## Return Value

A string containing the text when the payload is a Well Known Type Text; otherwise, `nil`.
