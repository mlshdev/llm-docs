> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cktoolnodejsmodule](https://developer.apple.com/documentation/cktooljs/cktoolnodejsmodule)

# CKToolNodeJsModule

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Class  
**Availability:** CKTool JS 1.2.15+

The imported package that supports using the client library within a Node.js environment.

## Declaration

```
interface CKToolNodeJsModule
```

<a id="overview"></a>

## Overview

This is the import of all exported content from the `@apple/cktool.target.nodejs` package.

To configure the tool for Node.js import the `createConfiguration` function from the `@apple/cktool.target.nodejs` package.

```javascript
import * as CKToolNodeJsModule from "@apple/cktool.target.nodejs";
// Example usage
const configuration = CKToolNodeJsModule.createConfiguration();
```

## Topics

### Instance Methods

- [createConfiguration](cktoolnodejsmodule/createconfiguration.md): This function creates an instance of `Configuration` with suitable values for use in Node.js.

## See Also

### Configuration

- [Configuration](configuration.md): An object you use to hold options for communicating with the API server.
- [CKToolBrowserModule](cktoolbrowsermodule.md): The imported package that supports using the client library within a web browser.
