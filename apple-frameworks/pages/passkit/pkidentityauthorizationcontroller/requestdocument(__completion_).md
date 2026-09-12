> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityauthorizationcontroller/requestdocument(_:completion:)](https://developer.apple.com/documentation/passkit/pkidentityauthorizationcontroller/requestdocument(_:completion:))

# requestDocument(\_:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Prompts the user to approve the request to get the identity information.

## Declaration

```swift
func requestDocument(_ request: PKIdentityRequest, completion: @escaping @Sendable (PKIdentityDocument?, (any Error)?) -> Void)
```

```swift
func requestDocument(_ request: PKIdentityRequest) async throws -> PKIdentityDocument
```

## Parameters

- `request`: The object that contains the identity elements the app requests.
- `completion`: The callback the system invokes after retrieving the document, or an error if one occurs.

<a id="Discussion"></a>

## Discussion

The user needs to approve the request before releasing any data. When the user approves the request, the system returns the document. If the user doesn’t approve the request, the handler returns a [PKIdentityError.Code.cancelled](../pkidentityerror-swift.struct/code/cancelled.md) error.

Only one request can be in progress at a time; otherwise, the method returns a [PKIdentityError.Code.requestAlreadyInProgress](../pkidentityerror-swift.struct/code/requestalreadyinprogress.md) error.

Your app’s `Info.plist` file needs to provide a message for the `NSIdentityUsageDescription` key. If this key is missing, any attempt to request a document fails.

## See Also

### Requesting a document

- [checkCanRequestDocument(\_:completion:)](checkcanrequestdocument%28__completion_%29.md): Returns whether an identity document is available to request.

# requestDocument:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Prompts the user to approve the request to get the identity information.

## Declaration

```objectivec
- (void) requestDocument:(PKIdentityRequest *) request completion:(void (^)(PKIdentityDocument *document, NSError *error)) completion;
```

## Parameters

- `request`: The object that contains the identity elements the app requests.
- `completion`: The callback the system invokes after retrieving the document, or an error if one occurs.

<a id="Discussion"></a>

## Discussion

The user needs to approve the request before releasing any data. When the user approves the request, the system returns the document. If the user doesn’t approve the request, the handler returns a [PKIdentityErrorCancelled](../pkidentityerror-swift.struct/code/cancelled.md) error.

Only one request can be in progress at a time; otherwise, the method returns a [PKIdentityErrorRequestAlreadyInProgress](../pkidentityerror-swift.struct/code/requestalreadyinprogress.md) error.

Your app’s `Info.plist` file needs to provide a message for the `NSIdentityUsageDescription` key. If this key is missing, any attempt to request a document fails.

## See Also

### Requesting a document

- [checkCanRequestDocument:completion:](checkcanrequestdocument%28__completion_%29.md): Returns whether an identity document is available to request.
