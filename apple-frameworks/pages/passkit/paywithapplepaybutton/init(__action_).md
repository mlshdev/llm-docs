> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/paywithapplepaybutton/init(_:action:)](https://developer.apple.com/documentation/passkit/paywithapplepaybutton/init(_:action:))

# init(\_:action:)

**Framework:** PassKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
nonisolated init(_ label: PayWithApplePayButtonLabel = .plain, action: @escaping () -> Void)
```

## See Also

### Creating the button

- [init(\_:action:fallback:)](init%28__action_fallback_%29.md)
- [init(\_:request:onPaymentAuthorizationChange:)](init%28__request_onpaymentauthorizationchange_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:request:onPaymentAuthorizationChange:fallback:)](init%28__request_onpaymentauthorizationchange_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
- [init(\_:request:onPaymentAuthorizationChange:onMerchantSessionRequested:)](init%28__request_onpaymentauthorizationchange_onmerchantsessionrequested_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:request:onPaymentAuthorizationChange:onMerchantSessionRequested:fallback:)](init%28__request_onpaymentauthorizationchange_onmerchantsessionrequested_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
