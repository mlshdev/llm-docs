> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cktoolbrowsermodule](https://developer.apple.com/documentation/cktooljs/cktoolbrowsermodule)

# CKToolBrowserModule

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Class  
**Availability:** CKTool JS 1.2.15+

The imported package that supports using the client library within a web browser.

## Declaration

```
interface CKToolBrowserModule
```

<a id="overview"></a>

## Overview

This is the import of all exported content from the `@apple/cktool.target.browser` package.

To configure the tool for web browsers import the `createConfiguration` function from the `@apple/cktool.target.browser` package.

```javascript
import * as CKToolBrowserModule from "@apple/cktool.target.browser";
// Example usage
const configuration = CKToolBrowserModule.createConfiguration();
```

## Topics

### Instance Methods

- [createConfiguration](cktoolbrowsermodule/createconfiguration.md): This function creates an instance of `Configuration` with suitable values for use in web browsers.

## See Also

### Configuration

- [Configuration](configuration.md): An object you use to hold options for communicating with the API server.
- [CKToolNodeJsModule](cktoolnodejsmodule.md): The imported package that supports using the client library within a Node.js environment.
