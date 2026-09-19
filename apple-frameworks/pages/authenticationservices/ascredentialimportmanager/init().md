> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialimportmanager/init()

# init()

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates an import manager instance.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Create an instance of this class when the system launches your app with an [NSUserActivity](../../foundation/nsuseractivity.md) of type `ASCredentialExchangeActivityType`, then call [importCredentials(token:)](importcredentials%28token_%29.md) to import credentials from the source app.
