> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/apple_event_manager/1542896-typeapplicationbundleid

# typeApplicationBundleID

**Framework:** Core Services

For specifying a target application by bundle ID.

<a id="overview"></a>

## Overview

This address mode is preferred for targeting specific applications. For example, you should target the Finder by sending an event whose target address descriptor uses the bundle ID `"com.apple.finder"` rather than the application signature `'MACS'`.

## Topics

### Constants

- [typeApplicationBundleID](https://developer.apple.com/documentation/coreservices/typeapplicationbundleid): Indicates a descriptor containing UTF-8 characters that specify the bundle ID of an application. Bundle IDs should be constructed similarly to `"com.company.directorylocation.ApplicationName"`.
