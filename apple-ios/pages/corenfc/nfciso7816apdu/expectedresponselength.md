> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso7816apdu/expectedresponselength

# expectedResponseLength (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The expected response data length (Le) in bytes.

## Declaration

```swift
var expectedResponseLength: Int { get }
```

<a id="Discussion"></a>

## Discussion

Setting [expectedResponseLength](expectedresponselength.md) with a value less than 0 means the Le field is absent.

# expectedResponseLength (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The expected response data length (Le) in bytes.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger expectedResponseLength;
```

<a id="Discussion"></a>

## Discussion

Setting [expectedResponseLength](expectedresponselength.md) with a value less than 0 means the Le field is absent.
