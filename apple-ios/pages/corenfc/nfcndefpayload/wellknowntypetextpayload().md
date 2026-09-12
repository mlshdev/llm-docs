> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload/wellknowntypetextpayload()](https://developer.apple.com/documentation/corenfc/nfcndefpayload/wellknowntypetextpayload())

# wellKnownTypeTextPayload()

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

Returns the text and locale of a valid Well Known Type Text payload.

## Declaration

```swift
func wellKnownTypeTextPayload() -> (String?, Locale?)
```

<a id="return-value"></a>

## Return Value

A tuple containing a string and locale from a Well Known Type Text payload. The string and locale can be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to get option text from a text payload.

```swift
// Get the optional informational text from the text payload.
var additionInfo: String? = nil

for payload in message.records {
    (additionInfo, _) = payload.wellKnownTypeTextPayload()
    
    if additionInfo != nil {
        break
    }
}
```
