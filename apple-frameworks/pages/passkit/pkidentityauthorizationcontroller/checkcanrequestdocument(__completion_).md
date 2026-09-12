> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityauthorizationcontroller/checkcanrequestdocument(_:completion:)](https://developer.apple.com/documentation/passkit/pkidentityauthorizationcontroller/checkcanrequestdocument(_:completion:))

# checkCanRequestDocument(\_:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns whether an identity document is available to request.

## Declaration

```swift
func checkCanRequestDocument(_ descriptor: any PKIdentityDocumentDescriptor, completion: @escaping @Sendable (Bool) -> Void)
```

```swift
func canRequestDocument(_ descriptor: any PKIdentityDocumentDescriptor) async -> Bool
```

## Parameters

- `descriptor`: The object that describes the document the app requests.
- `completion`: The callback the system invokes after determining whether you can request the document you describe.

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

<a id="Discussion"></a>

## Discussion

This method checks whether you have the correct entitlements and if the device has an ID in the Wallet app.

```swift
// Check whether the app can request the document.
controller.checkCanRequestDocument(descriptor) { canRequest in
    if canRequest {
        // Show the identity button for triggering the request.
    } else {
        // Hide the request button.
    }
}
```

## See Also

### Requesting a document

- [requestDocument(\_:completion:)](requestdocument%28__completion_%29.md): Prompts the user to approve the request to get the identity information.

# checkCanRequestDocument:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns whether an identity document is available to request.

## Declaration

```objectivec
- (void) checkCanRequestDocument:(id<PKIdentityDocumentDescriptor>) descriptor completion:(void (^)(BOOL canRequest)) completion;
```

## Parameters

- `descriptor`: The object that describes the document the app requests.
- `completion`: The callback the system invokes after determining whether you can request the document you describe.

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

<a id="Discussion"></a>

## Discussion

This method checks whether you have the correct entitlements and if the device has an ID in the Wallet app.

```swift
// Check whether the app can request the document.
controller.checkCanRequestDocument(descriptor) { canRequest in
    if canRequest {
        // Show the identity button for triggering the request.
    } else {
        // Hide the request button.
    }
}
```

## See Also

### Requesting a document

- [requestDocument:completion:](requestdocument%28__completion_%29.md): Prompts the user to approve the request to get the identity information.
