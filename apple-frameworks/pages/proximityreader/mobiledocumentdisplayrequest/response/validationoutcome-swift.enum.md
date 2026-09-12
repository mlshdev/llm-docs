> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentdisplayrequest/response/validationoutcome-swift.enum](https://developer.apple.com/documentation/proximityreader/mobiledocumentdisplayrequest/response/validationoutcome-swift.enum)

# MobileDocumentDisplayRequest.Response.ValidationOutcome

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A type that represents how the user validates the mobile document response.

## Declaration

```swift
enum ValidationOutcome
```

## Topics

### Enumeration Cases

- [MobileDocumentDisplayRequest.Response.ValidationOutcome.approved](validationoutcome-swift.enum/approved.md): A message that indicates the user approved the document response.
- [MobileDocumentDisplayRequest.Response.ValidationOutcome.dismissed](validationoutcome-swift.enum/dismissed.md): A message that indicates the user didn’t explicitly approve or reject the document response.
- [MobileDocumentDisplayRequest.Response.ValidationOutcome.rejected](validationoutcome-swift.enum/rejected.md): A message that indicates the user rejected the document response.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the response

- [validationOutcome](validationoutcome-swift.property.md): The value that indicates how the user validated the mobile document response.
