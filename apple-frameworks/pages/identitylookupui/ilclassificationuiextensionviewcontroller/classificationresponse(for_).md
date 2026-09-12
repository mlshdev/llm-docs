> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookupui/ilclassificationuiextensionviewcontroller/classificationresponse(for:)](https://developer.apple.com/documentation/identitylookupui/ilclassificationuiextensionviewcontroller/classificationresponse(for:))

# classificationResponse(for:) (Swift)

**Framework:** IdentityLookupUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Notifies the view controller when the user finishes entering data and presses the Done button.

## Declaration

```swift
func classificationResponse(for request: ILClassificationRequest) -> ILClassificationResponse
```

## See Also

### Collecting Data from the User

- [prepare(for:)](prepare%28for_%29.md): Notifies the view controller just before the system presents it to the user.

# classificationResponseForRequest: (Objective-C)

**Framework:** IdentityLookupUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Notifies the view controller when the user finishes entering data and presses the Done button.

## Declaration

```objectivec
- (ILClassificationResponse *) classificationResponseForRequest:(ILClassificationRequest *) request;
```

## See Also

### Collecting Data from the User

- [prepareForClassificationRequest:](prepare%28for_%29.md): Notifies the view controller just before the system presents it to the user.
