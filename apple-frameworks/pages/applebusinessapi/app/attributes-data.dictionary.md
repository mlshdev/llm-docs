> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/app/attributes-data.dictionary

# App.Attributes

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.5+

Attributes that describe an app resource.

## Declaration

```
object App.Attributes
```

## Properties

- `name` — `string`: The display name of the app.
- `bundleId` — `string`: The bundle identifier of the app.
- `websiteUrl` — `string`: The website URL for the app.
- `version` — `string`: The current version of the app.
- `supportedOS` — `[SupportedOS]`: The list of operating systems the app supports. See [SupportedOS](../supportedos.md) for possible values.
- `isCustomApp` — `boolean`: Indicates whether this is a custom B2B app.
- `appStoreUrl` — `string`: The App Store URL for the app.

<a id="overview"></a>

## Overview

> **Note**

> When additional attributes are added by Apple, they appear automatically, without requiring a newer version of the API.
