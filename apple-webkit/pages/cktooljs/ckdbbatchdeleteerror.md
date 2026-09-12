> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbbatchdeleteerror](https://developer.apple.com/documentation/cktooljs/ckdbbatchdeleteerror)

# CKDBBatchDeleteError

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

An object that represents an error that may occur when deleting a resource as part of a batch delete operation.

## Declaration

```
dictionary CKDBBatchDeleteError {
	string id;
	string code;
	string message;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBBatchDeleteError } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [code](ckdbbatchdeleteerror/code.md): A string that contains the code for the error that occurred.
- [id](ckdbbatchdeleteerror/id.md): The identifier for the resource that failed to be deleted.
- [message](ckdbbatchdeleteerror/message.md): A string that indicates the reason for the error.

## See Also

### Database Errors

- [AuthenticationRequiredError](authenticationrequirederror.md): An object that represents an error that occurs when authentication information is missing for the current user.
- [RequestError](requesterror.md): An object that represents a general error from the service.
