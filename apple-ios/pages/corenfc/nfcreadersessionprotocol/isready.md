> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersessionprotocol/isready](https://developer.apple.com/documentation/corenfc/nfcreadersessionprotocol/isready)

# isReady (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the reader session is started and ready to use.

## Declaration

```swift
var isReady: Bool { get }
```

<a id="Discussion"></a>

## Discussion

As soon as a reader session is successfully activated, radio-frequency discovery polling begins. When a tag is detected, [readerSession:didDetectTags:](../nfcreadersessiondelegate/readersession_diddetecttags_.md) is called.

# ready (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the reader session is started and ready to use.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReady) BOOL ready;
```

<a id="Discussion"></a>

## Discussion

As soon as a reader session is successfully activated, radio-frequency discovery polling begins. When a tag is detected, [readerSession:didDetectTags:](../nfcreadersessiondelegate/readersession_diddetecttags_.md) is called.
