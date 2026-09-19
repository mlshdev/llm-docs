> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitylookupui/ilclassificationuiextensionviewcontroller/prepare(for:)

# prepare(for:) (Swift)

**Framework:** IdentityLookupUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Notifies the view controller just before the system presents it to the user.

## Declaration

```swift
func prepare(for request: ILClassificationRequest)
```

## See Also

### Collecting Data from the User

- [classificationResponse(for:)](classificationresponse%28for_%29.md): Notifies the view controller when the user finishes entering data and presses the Done button.

# prepareForClassificationRequest: (Objective-C)

**Framework:** IdentityLookupUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Notifies the view controller just before the system presents it to the user.

## Declaration

```objectivec
- (void) prepareForClassificationRequest:(ILClassificationRequest *) request;
```

## See Also

### Collecting Data from the User

- [classificationResponseForRequest:](classificationresponse%28for_%29.md): Notifies the view controller when the user finishes entering data and presses the Done button.
