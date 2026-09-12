> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/connectedtag-1mnjc](https://developer.apple.com/documentation/corenfc/nfctagreadersession/connectedtag-1mnjc)

# connectedTag

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The tag connected to the reader session.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) id<NFCTag> connectedTag;
```

## See Also

### Connecting to a Tag

- [connectToTag:completionHandler:](connecttotag_completionhandler_.md): Connects the reader session to a tag and activates that tag.
