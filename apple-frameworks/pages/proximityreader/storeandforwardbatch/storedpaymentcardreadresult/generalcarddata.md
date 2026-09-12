> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardbatch/storedpaymentcardreadresult/generalcarddata](https://developer.apple.com/documentation/proximityreader/storeandforwardbatch/storedpaymentcardreadresult/generalcarddata)

# generalCardData

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Base64-encoded string that contains general cardholder and terminal data in tag-length-value (TLV) format.

## Declaration

```swift
let generalCardData: String
```

<a id="discussion"></a>

## Discussion

The content of this field is determined by your payment service provider. This field can contain both card tags and terminal tags.
