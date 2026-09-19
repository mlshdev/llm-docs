> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfctag-c.protocol/session

# session

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The reader session that provides the tag.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) id<NFCReaderSession> session;
```

## See Also

### Getting Information About a Tag

- [available](available.md): A Boolean value that indicates whether a detected tag is available.
