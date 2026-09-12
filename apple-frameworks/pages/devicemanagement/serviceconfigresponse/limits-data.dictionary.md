> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/serviceconfigresponse/limits-data.dictionary](https://developer.apple.com/documentation/devicemanagement/serviceconfigresponse/limits-data.dictionary)

# ServiceConfigResponse.Limits

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The set of current request limits.

## Declaration

```
object ServiceConfigResponse.Limits
```

## Properties

- `Any Key` — `int32`:

## Mentioned In

- [Managing assets](../managing-assets.md)
- [Managing subscriptions](../managing-subscriptions.md)
- [Managing users](../managing-users.md)

<a id="overview"></a>

## Overview

Each key names a limit and each value is the current limit. The set of keys varies by endpoint, and the limits are dynamic and can change without notice, so sync them every 5 minutes.

## See Also

### Objects and Data Types

- [ServiceConfigResponse.Urls](urls-data.dictionary.md): The set of current service URLs.
- [ResponseErrorCode](../responseerrorcode.md): An error code.
