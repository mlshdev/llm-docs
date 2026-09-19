> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/uirequirespersistentwifi

# UIRequiresPersistentWiFi

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · visionOS 1.0+

A Boolean value that indicates whether the app requires a Wi-Fi connection.

## Details

`UIRequiresPersistentWiFi`

<a id="Discussion"></a>

## Discussion

If `YES`, iOS opens a Wi-Fi connection when the app launches and keeps it open while the app is running. If `NO`, iOS closes the active Wi-Fi connection after 30 minutes. If the app tries to connect to the network when there’s no open Wi-Fi connection, the system may use the cellular network instead.
