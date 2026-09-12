> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctag-c.protocol/asnfciso7816tag](https://developer.apple.com/documentation/corenfc/nfctag-c.protocol/asnfciso7816tag)

# asNFCISO7816Tag

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Returns the tag as an ISO 7816 tag object.

## Declaration

```objectivec
- (id<NFCISO7816Tag>) asNFCISO7816Tag;
```

<a id="return-value"></a>

## Return Value

The tag object, if it conforms to the [NFCISO7816Tag](../nfciso7816tag.md) protocol; otherwise, returns `nil`.

## See Also

### Getting the Tag Type

- [type](type.md): The tag type.
- [asNFCISO15693Tag](asnfciso15693tag.md): Returns the tag as an ISO 15693 tag object.
- [asNFCFeliCaTag](asnfcfelicatag.md): Returns the tag as a FeliCa tag object.
- [asNFCMiFareTag](asnfcmifaretag.md): Returns the tag as a MIFARE tag object.
- [NFCTagType](../nfctagtype.md): Constants that identify the type of an NFC tag.
