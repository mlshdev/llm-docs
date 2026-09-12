> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/package/attributes-data.dictionary](https://developer.apple.com/documentation/applebusinessapi/package/attributes-data.dictionary)

# Package.Attributes

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

Attributes that describe a package resource.

## Declaration

```
object Package.Attributes
```

## Properties

- `name` — `string`: The display name of the package.
- `url` — `string`: The HTTPS URL to download the package.
- `hash` — `string`: The hex string hash of the package file.
- `bundleIds` — `[string]`: The list of bundle identifiers contained in the package.
- `description` — `string`: A short description of the package.
- `version` — `string`: The version string of the package.
- `createdDateTime` — `date-time`: The date and time that the package was created.
- `updatedDateTime` — `date-time`: The date and time that the package was last updated.

<a id="overview"></a>

## Overview

> **Note**

> When additional attributes are added by Apple, they appear automatically, without requiring a newer version of the API.
