> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionresetform/fieldsincludedarecleared](https://developer.apple.com/documentation/pdfkit/pdfactionresetform/fieldsincludedarecleared)

# fieldsIncludedAreCleared (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Sets whether the fields associated with the reset action are cleared when the action is performed.

## Declaration

```swift
var fieldsIncludedAreCleared: Bool { get set }
```

## Parameters

- `include`: Pass [true](https://developer.apple.com/documentation/swift/true) to clear the fields associated with the action when the reset action is performed. Pass [false](https://developer.apple.com/documentation/swift/false) to exclude from the reset action only the fields associated with the action.

## See Also

### Related Documentation

- [PDFActionResetForm](../pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.

# fieldsIncludedAreCleared (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Sets whether the fields associated with the reset action are cleared when the action is performed.

## Declaration

```objectivec
@property (nonatomic) BOOL fieldsIncludedAreCleared;
```

## Parameters

- `include`: Pass [true](https://developer.apple.com/documentation/swift/true) to clear the fields associated with the action when the reset action is performed. Pass [false](https://developer.apple.com/documentation/swift/false) to exclude from the reset action only the fields associated with the action.

## See Also

### Related Documentation

- [PDFActionResetForm](../pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
