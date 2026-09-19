> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/sksearchgroup

# SKSearchGroup

**Framework:** Core Services  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.

## Declaration

```swift
class SKSearchGroup
```

<a id="overview"></a>

## Overview

Defines an opaque data type representing a search group.

A search group is a group of one or more indexes to be searched. To create a search group, use [SKSearchGroupCreate](1448627-sksearchgroupcreate.md). For other operations with search groups, see [Fast Asynchronous Searching](search_kit.md#1655469).
