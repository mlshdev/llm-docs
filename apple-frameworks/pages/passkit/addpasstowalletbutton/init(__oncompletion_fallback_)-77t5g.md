> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/addpasstowalletbutton/init(_:oncompletion:fallback:)-77t5g](https://developer.apple.com/documentation/passkit/addpasstowalletbutton/init(_:oncompletion:fallback:)-77t5g)

# init(\_:onCompletion:fallback:)

**Framework:** PassKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

## Declaration

```swift
nonisolated init(_ passes: [PKPass], onCompletion: @escaping (Bool) -> Void, @ViewBuilder fallback: () -> Fallback)
```

## See Also

### Creating the button

- [init(\_:cardholderName:passStyle:primaryAccountSuffix:cardDetails:description:filters:onRequest:onCompletion:)](init%28__cardholdername_passstyle_primaryaccountsuffix_carddetails_description_filters_onrequest_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:cardholderName:passStyle:primaryAccountSuffix:cardDetails:description:filters:onRequest:onCompletion:fallback:)](init%28__cardholdername_passstyle_primaryaccountsuffix_carddetails_description_filters_onrequest_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
- [init(\_:onCompletion:)](init%28__oncompletion_%29-1inhj.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:onCompletion:)](init%28__oncompletion_%29-5wkyi.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:onCompletion:fallback:)](init%28__oncompletion_fallback_%29-7adn5.md): Conforms when `Fallback` conforms to `View`.
- [init(\_:onRequest:onCompletion:)](init%28__onrequest_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:onRequest:onCompletion:fallback:)](init%28__onrequest_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
- [init(\_:primaryAccountSuffix:passStyle:cardDetails:description:filters:onRequest:onCompletion:)](init%28__primaryaccountsuffix_passstyle_carddetails_description_filters_onrequest_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:primaryAccountSuffix:passStyle:cardDetails:description:filters:onRequest:onCompletion:fallback:)](init%28__primaryaccountsuffix_passstyle_carddetails_description_filters_onrequest_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
- [init(action:)](init%28action_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(carKeyPassword:supportedRadioTechnologies:issuerIdentifier:onCompletion:)](init%28carkeypassword_supportedradiotechnologies_issueridentifier_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(carKeyPassword:supportedRadioTechnologies:issuerIdentifier:onCompletion:fallback:)](init%28carkeypassword_supportedradiotechnologies_issueridentifier_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
