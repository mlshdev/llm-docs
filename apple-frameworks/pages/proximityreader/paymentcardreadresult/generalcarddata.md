> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadresult/generalcarddata](https://developer.apple.com/documentation/proximityreader/paymentcardreadresult/generalcarddata)

# generalCardData

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

A Base64-encoded string that contains general cardholder and terminal data in tag-length-value (TLV) format.

## Declaration

```swift
let generalCardData: String?
```

<a id="discussion"></a>

## Discussion

The content of this field is determined by your payment service provider. This field can contain both card tags and terminal tags.

## See Also

### Getting the result data

- [paymentCardData](paymentcarddata.md): A Base64-encoded string that contains the encrypted payment information to send to your payment provider.
