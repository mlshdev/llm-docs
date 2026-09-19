> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693readmultipleblocksconfiguration/range

# range (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```swift
var range: NSRange { get set }
```

<a id="discussion"></a>

## Discussion

Range to read in blocks.  Valid start index range is 0x00 to 0xFF.  Length shall not be 0.

# range (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
@property (nonatomic, assign) NSRange range;
```

<a id="discussion"></a>

## Discussion

Range to read in blocks.  Valid start index range is 0x00 to 0xFF.  Length shall not be 0.
