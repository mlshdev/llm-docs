> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/allowsprinting](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/allowsprinting)

# allowsPrinting (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether a PDF document allows printing.

## Declaration

```swift
var allowsPrinting: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the document is encrypted and the current password doesn’t grant permission to perform printing, this returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with an Encrypted PDF Document

- [isEncrypted](isencrypted.md): Returns whether the specified PDF file is encrypted.
- [allowsCopying](allowscopying.md): Returns whether the specified PDF document allows copying.
- [isUnlocked](isunlocked.md): Returns whether the specified PDF document is currently unlocked.
- [unlockWithPassword(\_:)](unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.

# CGPDFDocumentAllowsPrinting (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether a PDF document allows printing.

## Declaration

```objectivec
extern bool CGPDFDocumentAllowsPrinting(CGPDFDocumentRef document);
```

## Parameters

- `document`: A PDF document.

<a id="return-value"></a>

## Return Value

A Boolean that, if [true](https://developer.apple.com/documentation/swift/true), indicates that the document allows printing. If the value is [false](https://developer.apple.com/documentation/swift/false), the document does not allow printing.

<a id="Discussion"></a>

## Discussion

If the document is encrypted and the current password doesn’t grant permission to perform printing, this returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with an Encrypted PDF Document

- [CGPDFDocumentIsEncrypted](isencrypted.md): Returns whether the specified PDF file is encrypted.
- [CGPDFDocumentAllowsCopying](allowscopying.md): Returns whether the specified PDF document allows copying.
- [CGPDFDocumentIsUnlocked](isunlocked.md): Returns whether the specified PDF document is currently unlocked.
- [CGPDFDocumentUnlockWithPassword](unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.
