> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallcontactunsupportedreason](https://developer.apple.com/documentation/intents/instartcallcontactunsupportedreason)

# INStartCallContactUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Constants indicating the reason the app can’t support starting a call with the contact.

## Declaration

```swift
enum INStartCallContactUnsupportedReason
```

## Topics

### Constants

- [INStartCallContactUnsupportedReason.noContactFound](instartcallcontactunsupportedreason/nocontactfound.md): The contact wasn’t found in the app.
- [INStartCallContactUnsupportedReason.multipleContactsUnsupported](instartcallcontactunsupportedreason/multiplecontactsunsupported.md): The app doesn’t support calls with multiple contacts.
- [INStartCallContactUnsupportedReason.noHandleForLabel](instartcallcontactunsupportedreason/nohandleforlabel.md): The handle for the label wasn’t found.
- [INStartCallContactUnsupportedReason.invalidHandle](instartcallcontactunsupportedreason/invalidhandle.md): The handle is invalid.
- [INStartCallContactUnsupportedReason.unsupportedMmiUssd](instartcallcontactunsupportedreason/unsupportedmmiussd.md): An unsupported MMI codewas used.
- [INStartCallContactUnsupportedReason.noCallHistoryForRedial](instartcallcontactunsupportedreason/nocallhistoryforredial.md): Deprecated. No redial attempt doesn’t have an associated call history.
- [INStartCallContactUnsupportedReason.noUsableHandleForRedial](instartcallcontactunsupportedreason/nousablehandleforredial.md): The redial attempt doesn’t have a usable handle.

### Enumeration Cases

- [INStartCallContactUnsupportedReason.requiringInAppAuthentication](instartcallcontactunsupportedreason/requiringinappauthentication.md)

### Initializers

- [init(rawValue:)](instartcallcontactunsupportedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Resolution Result Object

- [init(personResolutionResult:)](instartcallcontactresolutionresult/init%28personresolutionresult_%29.md): Creates an object whose resolution involves the succesful start of a call with the specified contact.
- [unsupported(forReason:)](instartcallcontactresolutionresult/unsupported%28forreason_%29.md): Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.

# INStartCallContactUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Constants indicating the reason the app can’t support starting a call with the contact.

## Declaration

```objectivec
enum INStartCallContactUnsupportedReason : NSInteger;
```

## Topics

### Constants

- [INStartCallContactUnsupportedReasonNoContactFound](instartcallcontactunsupportedreason/nocontactfound.md): The contact wasn’t found in the app.
- [INStartCallContactUnsupportedReasonMultipleContactsUnsupported](instartcallcontactunsupportedreason/multiplecontactsunsupported.md): The app doesn’t support calls with multiple contacts.
- [INStartCallContactUnsupportedReasonNoHandleForLabel](instartcallcontactunsupportedreason/nohandleforlabel.md): The handle for the label wasn’t found.
- [INStartCallContactUnsupportedReasonInvalidHandle](instartcallcontactunsupportedreason/invalidhandle.md): The handle is invalid.
- [INStartCallContactUnsupportedReasonUnsupportedMmiUssd](instartcallcontactunsupportedreason/unsupportedmmiussd.md): An unsupported MMI codewas used.
- [INStartCallContactUnsupportedReasonNoCallHistoryForRedial](instartcallcontactunsupportedreason/nocallhistoryforredial.md): Deprecated. No redial attempt doesn’t have an associated call history.
- [INStartCallContactUnsupportedReasonNoUsableHandleForRedial](instartcallcontactunsupportedreason/nousablehandleforredial.md): The redial attempt doesn’t have a usable handle.

### Enumeration Cases

- [INStartCallContactUnsupportedReasonRequiringInAppAuthentication](instartcallcontactunsupportedreason/requiringinappauthentication.md)

## See Also

### Creating a Resolution Result Object

- [initWithPersonResolutionResult:](instartcallcontactresolutionresult/init%28personresolutionresult_%29.md): Creates an object whose resolution involves the succesful start of a call with the specified contact.
- [unsupportedForReason:](instartcallcontactresolutionresult/unsupported%28forreason_%29.md): Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.
