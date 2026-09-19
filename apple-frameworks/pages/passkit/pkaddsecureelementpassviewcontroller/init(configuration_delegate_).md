> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkaddsecureelementpassviewcontroller/init(configuration:delegate:)

# init(configuration:delegate:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Creates a view controller using the specified pass configuration.

## Declaration

```swift
init?(configuration: PKAddSecureElementPassConfiguration, delegate: (any PKAddSecureElementPassViewControllerDelegate)?)
```

## Parameters

- `configuration`: The configuration that the view controller uses to create a Secure Element pass.
- `delegate`: An object that acts as the view controller’s delegate.

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [PKAddSecureElementPassViewControllerDelegate](../pkaddsecureelementpassviewcontrollerdelegate.md) protocol. The view controller doesn’t retain the delegate.

# initWithConfiguration:delegate: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Creates a view controller using the specified pass configuration.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(PKAddSecureElementPassConfiguration *) configuration delegate:(id<PKAddSecureElementPassViewControllerDelegate>) delegate;
```

## Parameters

- `configuration`: The configuration that the view controller uses to create a Secure Element pass.
- `delegate`: An object that acts as the view controller’s delegate.

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [PKAddSecureElementPassViewControllerDelegate](../pkaddsecureelementpassviewcontrollerdelegate.md) protocol. The view controller doesn’t retain the delegate.
