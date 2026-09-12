> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/contactaccesspicker(ispresented:completionhandler:)](https://developer.apple.com/documentation/swiftui/view/contactaccesspicker(ispresented:completionhandler:))

# contactAccessPicker(isPresented:completionHandler:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Modally present UI which allows the user to select which contacts your app has access to.

## Declaration

```swift
@MainActor @preconcurrency func contactAccessPicker(isPresented: Binding<Bool>, completionHandler: @escaping ([String]) -> Void = { _ in }) -> some View

```

<a id="discussion"></a>

## Discussion

This API should only be used when your app has “Limited” authorization.  See `CNAuthorizationStatus` and `CNContactStore/authorizationStatus(for:)`.  The completion handler will be invoked with an empty result if your app doesn’t have the correct authorization status.

Your completion handler will receive an array of contact identifiers that were newly granted to your app.  Contacts which your app lost access to are not listed.  The newly-available contacts can be accessed using `CNContactStore`.

Parameters:

- isPresented: The binding to whether the contact picker should be shown.
- completionHandler: A function to invoke when the management UI is dismissed.  Receives an array containing contact identifiers of newly-available contacts.

## See Also

### Managing contact access

- [contactAccessButtonCaption(\_:)](contactaccessbuttoncaption%28__%29.md)
- [contactAccessButtonStyle(\_:)](contactaccessbuttonstyle%28__%29.md)
