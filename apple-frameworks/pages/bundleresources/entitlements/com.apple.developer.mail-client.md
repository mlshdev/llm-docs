> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.mail-client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.mail-client)

# com.apple.developer.mail-client

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · visionOS 1.0+

A Boolean that indicates whether the app can act as a user’s default email client.

## Details

`com.apple.developer.mail-client`

<a id="Discussion"></a>

## Discussion

The system launches the default mail client in iOS whenever a user opens a `mailto:` link. Since email is a critical avenue for communication, Apple requires that email apps must meet specific functional criteria aimed at ensuring private and accurate access for users.

You can use this managed entitlement to allow people to use your app as a default mail app. To request this entitlement, sign in to your developer account with the Account Holder role, go to the [request access](https://developer.apple.com/contact/request/default-mail-client) page, and fill out the form on that page.

Any app that registers as a default email client option must:

- Specify the `mailto:` scheme in its `Info.plist` file.
- Be able to send a message to any valid email recipient.
- Be able to receive a message from any email sender. Apps that provide user-controlled incoming mail screening features are permitted.
