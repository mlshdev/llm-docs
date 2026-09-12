> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/isunlocked](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/isunlocked)

# isUnlocked (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the specified PDF document is currently unlocked.

## Declaration

```swift
var isUnlocked: Bool { get }
```

<a id="Discussion"></a>

## Discussion

There are two possible reasons why a PDF document is unlocked:

- The document is not encrypted.
- The document is encrypted, and a valid password was previously specified using [unlockWithPassword(\_:)](unlockwithpassword%28__%29.md).

## See Also

### Working with an Encrypted PDF Document

- [isEncrypted](isencrypted.md): Returns whether the specified PDF file is encrypted.
- [allowsCopying](allowscopying.md): Returns whether the specified PDF document allows copying.
- [allowsPrinting](allowsprinting.md): Returns whether a PDF document allows printing.
- [unlockWithPassword(\_:)](unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.

# CGPDFDocumentIsUnlocked (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the specified PDF document is currently unlocked.

## Declaration

```objectivec
extern bool CGPDFDocumentIsUnlocked(CGPDFDocumentRef document);
```

## Parameters

- `document`: A PDF document.

<a id="return-value"></a>

## Return Value

A Boolean that, if [true](https://developer.apple.com/documentation/swift/true), indicates that the document is not locked. If the value is [false](https://developer.apple.com/documentation/swift/false), the document is locked.

<a id="Discussion"></a>

## Discussion

There are two possible reasons why a PDF document is unlocked:

- The document is not encrypted.
- The document is encrypted, and a valid password was previously specified using [CGPDFDocumentUnlockWithPassword](unlockwithpassword%28__%29.md).

## See Also

### Working with an Encrypted PDF Document

- [CGPDFDocumentIsEncrypted](isencrypted.md): Returns whether the specified PDF file is encrypted.
- [CGPDFDocumentAllowsCopying](allowscopying.md): Returns whether the specified PDF document allows copying.
- [CGPDFDocumentAllowsPrinting](allowsprinting.md): Returns whether a PDF document allows printing.
- [CGPDFDocumentUnlockWithPassword](unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.
