> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/serviceconfigresponse/urls-data.dictionary

# ServiceConfigResponse.Urls

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The set of current service URLs.

## Declaration

```
object ServiceConfigResponse.Urls
```

## Properties

- `Any Key` — `string`:

## Mentioned In

- [Managing users](../managing-users.md)

<a id="overview"></a>

## Overview

Each key names an endpoint and each value is its current URL. These URLs are dynamic and can change without notice, so sync them every 5 minutes rather than hard-coding them into your device management service.

## See Also

### Objects and Data Types

- [ServiceConfigResponse.Limits](limits-data.dictionary.md): The set of current request limits.
- [ResponseErrorCode](../responseerrorcode.md): An error code.
