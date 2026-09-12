> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs](https://developer.apple.com/documentation/cktooljs)

# CKTool JS

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Framework  
**Availability:** CKTool JS 1.2.15+

Manage your CloudKit containers and databases from JavaScript.

<a id="overview"></a>

## Overview

CKTool JS gives you access to features provided in the CloudKit Console API, facilitating CloudKit setup operations for local development and integration testing. It’s a JavaScript client library alternative to the macOS `cktool` command-line utility distributed with Xcode. To learn more about `cktool`, see [Automating CloudKit Development](https://developer.apple.com/icloud/cloudkit/automating/).

With this library, you can:

- Apply a CloudKit schema file to Sandbox databases (for more information about CloudKit schema files, see [Integrating a Text-Based Schema into Your Workflow](https://developer.apple.com/documentation/cloudkit/integrating-a-text-based-schema-into-your-workflow)).
- Populate databases with test data.
- Reset Sandbox databases to the production configuration.
- Write scripts for your integration tests to incorporate.

The library consists of three main modules:

- [CKToolDatabaseModule](cktooljs/cktooldatabasemodule.md): This package contains all the CloudKit related types and methods, operations to fetch teams and containers for the authorized user, and utility functions and types to communicate with the CloudKit servers. This package also contains operations to work with CloudKit records. You include `@apple/cktool.database` as a dependency in your `package.json` file to access this package.
- [CKToolNodeJsModule](cktooljs/cktoolnodejsmodule.md): This package contains a [createConfiguration](cktooljs/cktoolnodejsmodule/createconfiguration.md) function you use in projects intended to run in Node.js. You include `@apple/cktool.target.nodejs` as a dependency in your `package.json` file to access this package.
- [CKToolBrowserModule](cktooljs/cktoolbrowsermodule.md): This package contains a [createConfiguration](cktooljs/cktoolbrowsermodule/createconfiguration.md) function for use in browser-based projects. You include `@apple/cktool.target.browser` as a dependency in your `package.json` file to access this package.

## Topics

### Essentials

- [Integrating CloudKit access into your JavaScript automation scripts](cktooljs/integrating-cloudkit-access-into-your-javascript-automation-scripts.md): Configure your JavaScript project to use CKTool JS.

### Promises API

- [PromisesApi](cktooljs/promisesapi.md): A class that exposes promise-based functions for interacting with the API.
- [CancellablePromise](cktooljs/cancellablepromise.md): A promise that has a function to cancel its operation.
- [CKToolDatabaseModule](cktooljs/cktooldatabasemodule.md): The imported package that provides access to CloudKit containers and databases.

### Configuration

- [Configuration](cktooljs/configuration.md): An object you use to hold options for communicating with the API server.
- [CKToolNodeJsModule](cktooljs/cktoolnodejsmodule.md): The imported package that supports using the client library within a Node.js environment.
- [CKToolBrowserModule](cktooljs/cktoolbrowsermodule.md): The imported package that supports using the client library within a web browser.

### Global Structures and Enumerations

- [Container](cktooljs/container.md): Details about a CloudKit container.
- [ContainersResponse](cktooljs/containersresponse.md): An object that represents results of fetching multiple CloudKit containers.
- [CKEnvironment](cktooljs/ckenvironment.md): An enumeration of container environments.
- [ContainersSortByField](cktooljs/containerssortbyfield.md): An enumeration that indicates sorting options for retrieved containers.
- [SortDirection](cktooljs/sortdirection.md): An enumeration that indicates sorting direction when applying a custom sort.

### Errors

- [ErrorBase](cktooljs/errorbase.md): The base class of any error emitted by functions in the client library.
- [Database, Length, Validation, and Value Errors](cktooljs/database-length-validation-and-value-errors.md)

### Classes

- [Blob](cktooljs/blob.md)
- [File](cktooljs/file.md)
