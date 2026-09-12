> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersession-swift.class/readingavailable](https://developer.apple.com/documentation/corenfc/nfcreadersession-swift.class/readingavailable)

# readingAvailable (Swift)

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A Boolean value that determines whether the device supports NFC tag reading.

## Declaration

```swift
class var readingAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Before creating a reader session, always check the [readingAvailable](readingavailable.md) property to determine whether the user’s device supports scanning for and detecting NFC tags.

# readingAvailable (Objective-C)

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A Boolean value that determines whether the device supports NFC tag reading.

## Declaration

```objectivec
@property (class, nonatomic, readonly) BOOL readingAvailable;
```

<a id="Discussion"></a>

## Discussion

Before creating a reader session, always check the [readingAvailable](readingavailable.md) property to determine whether the user’s device supports scanning for and detecting NFC tags.
