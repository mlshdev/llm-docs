> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassesviewcontroller/init(issuerdata:signature:)](https://developer.apple.com/documentation/passkit/pkaddpassesviewcontroller/init(issuerdata:signature:))

# init(issuerData:signature:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

Initializes and returns a new add-passes view controller with the issuer data, and signature you provide.

## Declaration

```swift
init(issuerData: Data, signature: Data) throws
```

## Parameters

- `issuerData`: The [NSData](../../foundation/nsdata.md) object that represents the issuer data.
- `signature`: The [NSData](../../foundation/nsdata.md) object that represents the issuer’s signature.

## See Also

### Creating an add-passes view controller

- [init(pass:)](init%28pass_%29.md): Initializes and returns a newly created add-passes view controller with a single pass.
- [init(passes:)](init%28passes_%29.md): Initializes and returns a newly created add-passes view controller with an array of passes.

# initWithIssuerData:signature:error: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

Initializes and returns a new add-passes view controller with the issuer data, and signature you provide.

## Declaration

```objectivec
- (instancetype) initWithIssuerData:(NSData *) issuerData signature:(NSData *) signature error:(NSError **) error;
```

## Parameters

- `issuerData`: The [NSData](../../foundation/nsdata.md) object that represents the issuer data.
- `signature`: The [NSData](../../foundation/nsdata.md) object that represents the issuer’s signature.
- `error`: An optional [NSError](../../foundation/nserror.md); if non-`nil`, the framework assigns an error object that represents any error that occurred as a result of the request.

## See Also

### Creating an add-passes view controller

- [initWithPass:](init%28pass_%29.md): Initializes and returns a newly created add-passes view controller with a single pass.
- [initWithPasses:](init%28passes_%29.md): Initializes and returns a newly created add-passes view controller with an array of passes.
