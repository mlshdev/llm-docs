> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/containerssortbyfield](https://developer.apple.com/documentation/cktooljs/containerssortbyfield)

# ContainersSortByField

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Enumeration  
**Availability:** CKTool JS 1.2.15+

An enumeration that indicates sorting options for retrieved containers.

## Declaration

```
interface ContainersSortByField {
	const string ID;
	const string NAME;
};
```

<a id="overview"></a>

## Overview

```javascript
import { ContainersSortByField } from "@apple/cktool.database";
```

## Topics

### Enumeration Cases

- [ID](containerssortbyfield/id.md)
- [NAME](containerssortbyfield/name.md)

## See Also

### Global Structures and Enumerations

- [Container](container.md): Details about a CloudKit container.
- [ContainersResponse](containersresponse.md): An object that represents results of fetching multiple CloudKit containers.
- [CKEnvironment](ckenvironment.md): An enumeration of container environments.
- [SortDirection](sortdirection.md): An enumeration that indicates sorting direction when applying a custom sort.
