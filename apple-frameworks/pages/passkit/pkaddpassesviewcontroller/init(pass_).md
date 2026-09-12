> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassesviewcontroller/init(pass:)](https://developer.apple.com/documentation/passkit/pkaddpassesviewcontroller/init(pass:))

# init(pass:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns a newly created add-passes view controller with a single pass.

## Declaration

```swift
init?(pass: PKPass)
```

## Parameters

- `pass`: The pass for the view controller to display.

<a id="return-value"></a>

## Return Value

The initialized add-passes view controller object or `nil` if there was a problem initializing the object.

## See Also

### Creating an add-passes view controller

- [init(passes:)](init%28passes_%29.md): Initializes and returns a newly created add-passes view controller with an array of passes.
- [init(issuerData:signature:)](init%28issuerdata_signature_%29.md): Initializes and returns a new add-passes view controller with the issuer data, and signature you provide.

# initWithPass: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns a newly created add-passes view controller with a single pass.

## Declaration

```objectivec
- (instancetype) initWithPass:(PKPass *) pass;
```

## Parameters

- `pass`: The pass for the view controller to display.

<a id="return-value"></a>

## Return Value

The initialized add-passes view controller object or `nil` if there was a problem initializing the object.

## See Also

### Creating an add-passes view controller

- [initWithPasses:](init%28passes_%29.md): Initializes and returns a newly created add-passes view controller with an array of passes.
- [initWithIssuerData:signature:error:](init%28issuerdata_signature_%29.md): Initializes and returns a new add-passes view controller with the issuer data, and signature you provide.
