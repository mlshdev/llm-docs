> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/blueprint/attributes-data.dictionary](https://developer.apple.com/documentation/applebusinessapi/blueprint/attributes-data.dictionary)

# Blueprint.Attributes

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

Attributes that describe a Blueprint resource.

## Declaration

```
object Blueprint.Attributes
```

## Properties

- `name` — `string`: The display name of the Blueprint.
- `description` — `string`: A description of the Blueprint.
- `status` — `BlueprintStatus`: The current status of the Blueprint. See [BlueprintStatus](../blueprintstatus.md) for possible values.
- `appLicenseDeficient` — `boolean`: Indicates whether the Blueprint has insufficient app licenses for all assigned members.
- `createdDateTime` — `date-time`: The date and time that the Blueprint was created.
- `updatedDateTime` — `date-time`: The date and time that the Blueprint was last updated.

<a id="overview"></a>

## Overview

> **Note**

> When additional attributes are added by Apple, they appear automatically, without requiring a newer version of the API.
