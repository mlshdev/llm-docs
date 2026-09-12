> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassesviewcontroller/init(passes:)](https://developer.apple.com/documentation/passkit/pkaddpassesviewcontroller/init(passes:))

# init(passes:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns a newly created add-passes view controller with an array of passes.

## Declaration

```swift
init?(passes: [PKPass])
```

## Parameters

- `passes`: The passes for the view controller to display.

<a id="return-value"></a>

## Return Value

The initialized add-passes view controller object or `nil` if there was a problem initializing the object.

## See Also

### Creating an add-passes view controller

- [init(pass:)](init%28pass_%29.md): Initializes and returns a newly created add-passes view controller with a single pass.
- [init(issuerData:signature:)](init%28issuerdata_signature_%29.md): Initializes and returns a new add-passes view controller with the issuer data, and signature you provide.

# initWithPasses: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns a newly created add-passes view controller with an array of passes.

## Declaration

```objectivec
- (instancetype) initWithPasses:(NSArray<PKPass *> *) passes;
```

## Parameters

- `passes`: The passes for the view controller to display.

<a id="return-value"></a>

## Return Value

The initialized add-passes view controller object or `nil` if there was a problem initializing the object.

## See Also

### Creating an add-passes view controller

- [initWithPass:](init%28pass_%29.md): Initializes and returns a newly created add-passes view controller with a single pass.
- [initWithIssuerData:signature:error:](init%28issuerdata_signature_%29.md): Initializes and returns a new add-passes view controller with the issuer data, and signature you provide.
