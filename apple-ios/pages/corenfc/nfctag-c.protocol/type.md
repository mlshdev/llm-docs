> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfctag-c.protocol/type

# type

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The tag type.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NFCTagType type;
```

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [NFCTagType](../nfctagtype.md).

## See Also

### Getting the Tag Type

- [asNFCISO15693Tag](asnfciso15693tag.md): Returns the tag as an ISO 15693 tag object.
- [asNFCISO7816Tag](asnfciso7816tag.md): Returns the tag as an ISO 7816 tag object.
- [asNFCFeliCaTag](asnfcfelicatag.md): Returns the tag as a FeliCa tag object.
- [asNFCMiFareTag](asnfcmifaretag.md): Returns the tag as a MIFARE tag object.
- [NFCTagType](../nfctagtype.md): Constants that identify the type of an NFC tag.
