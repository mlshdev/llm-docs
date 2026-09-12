> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctag-c.protocol/asnfcfelicatag](https://developer.apple.com/documentation/corenfc/nfctag-c.protocol/asnfcfelicatag)

# asNFCFeliCaTag

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Returns the tag as a FeliCa tag object.

## Declaration

```objectivec
- (id<NFCFeliCaTag>) asNFCFeliCaTag;
```

<a id="return-value"></a>

## Return Value

The tag object, if it conforms to the [NFCFeliCaTag](../nfcfelicatag.md) protocol; otherwise, returns `nil`.

## See Also

### Getting the Tag Type

- [type](type.md): The tag type.
- [asNFCISO15693Tag](asnfciso15693tag.md): Returns the tag as an ISO 15693 tag object.
- [asNFCISO7816Tag](asnfciso7816tag.md): Returns the tag as an ISO 7816 tag object.
- [asNFCMiFareTag](asnfcmifaretag.md): Returns the tag as a MIFARE tag object.
- [NFCTagType](../nfctagtype.md): Constants that identify the type of an NFC tag.
