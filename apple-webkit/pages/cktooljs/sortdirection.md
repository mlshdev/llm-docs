> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/sortdirection

# SortDirection

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Enumeration  
**Availability:** CKTool JS 1.2.15+

An enumeration that indicates sorting direction when applying a custom sort.

## Declaration

```
interface SortDirection {
	const string ASC;
	const string DESC;
};
```

<a id="overview"></a>

## Overview

```javascript
import { SortDirection } from "@apple/cktool.database";
```

## Topics

### Enumeration Cases

- [ASC](sortdirection/asc.md)
- [DESC](sortdirection/desc.md)

## See Also

### Global Structures and Enumerations

- [Container](container.md): Details about a CloudKit container.
- [ContainersResponse](containersresponse.md): An object that represents results of fetching multiple CloudKit containers.
- [CKEnvironment](ckenvironment.md): An enumeration of container environments.
- [ContainersSortByField](containerssortbyfield.md): An enumeration that indicates sorting options for retrieved containers.
