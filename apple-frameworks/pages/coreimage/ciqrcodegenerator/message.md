> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciqrcodegenerator/message

# message (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The message to encode in the QR code.

## Declaration

```swift
var message: Data { get set }
```

## See Also

### Instance Properties

- [correctionLevel](correctionlevel.md): The QR code correction level: L, M, Q, or H.

# message (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The message to encode in the QR code.

## Declaration

```objectivec
@property (nonatomic, retain) NSData * message;
```

## See Also

### Instance Properties

- [correctionLevel](correctionlevel.md): The QR code correction level: L, M, Q, or H.
