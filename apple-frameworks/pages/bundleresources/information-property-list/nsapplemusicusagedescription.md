> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsapplemusicusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsapplemusicusagedescription)

# NSAppleMusicUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · macOS 15.0+ · visionOS 1.0+

A message that tells people why the app is requesting access to their media library.

## Details

`NSAppleMusicUsageDescription`

<a id="Discussion"></a>

## Discussion

Set the value of this key to a user-readable description of how your app intends to use a person’s media library. The first time your app attempts to access their library, the system prompts the user to grant or deny access to your app. The system includes this key’s description in the dialog it displays to the user.

> **Important**

>  Your app must provide a value for this key to access a person’s media library. This requirement applies to iOS, iPadOS, visionOS, and macOS apps that link against the macOS 15 SDK or later.

## See Also

### MediaPlayer

- [Requesting Access to Apple Music Library](../../storekit/requesting-access-to-apple-music-library.md): Prompt the customer to authorize access to Apple Music library.
