> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/promisesapi/updaterecord](https://developer.apple.com/documentation/cktooljs/promisesapi/updaterecord)

# updateRecord

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Method  
**Availability:** CKTool JS 1.2.15+

Updates an existing record.

## Declaration

```
CancellablePromise updateRecord(
	UpdateRecordParams params
);
```

## Parameters

- `params`: A dictionary as described in the Discussion section.

<a id="return-value"></a>

## Return Value

A `CancellablePromise` with the following resolutions.

<a id="discussion"></a>

## Discussion

If the promise is successful, it will resolve with one of the following dictionaries:

- `{ statusCode: 200; result: CKDBRecordResponse }`

The promise may reject and throw the following:

- `DocumentedResponseError`, if the HTTP status code is 421. The result member will be a dictionary conforming to AuthenticationRequiredError.
- `DocumentedResponseError`, if the HTTP status code is none of the above and in the range 400 to 599. The result member will be a dictionary conforming to RequestError.
- `ValidationError`, if the parameters to the method are incorrect.
- A `FetchError` descendant, if there is a problem with the network request. A reference to the request object can be used to examine the underlying cause.

<a id="Discussion"></a>

## Discussion

The `params` dictionary has the following properties:

```javascript
dictionary UpdateRecordParams {
  CKDBModifyRecordRequestBody body;
  string containerId;
  CKEnvironment environment;
  string databaseType;
  string zoneName;
  string recordName;
  boolean? force;
}
```

- `body`: Updated record details. If there are `assetType` fields in your record type, you must upload the assets prior to creating a record using the createAssetUploadUrl operation. If this record will be shared, you must set `createShortGuid` to `true` to create a globally unique identifier for this record that your app uses when a share participant accepts a shared record.
- `containerId`: The container identifier. See `Container`.
- `environment`: The container environment. For valid values, see `CKEnvironment`.
- `databaseType`: The database type. For valid values, see `CKDatabaseType`.
- `zoneName`: The zone name. See `CKDBZone`.
- `recordName`: The record name. See `CKDBRecord`.
- `force`: If true, forces the operation to work without `changeTag`.

If successful, the response contains a `CKDBRecordResponse` object with the updated record. If there are `assetType` fields in your record type, you must upload the assets prior to creating a record using the `createAssetUploadUrl` operation. If this record will be shared, you must set `createShortGuid` to `true` to create a globally unique identifier for this record that your app uses when a share participant accepts a shared record.

Node.js example:

```javascript

import { createConfiguration } from "@apple/cktool.target.nodejs";
import {
  CKDatabaseType,
  CKEnvironment,
  PromisesApi,
  createCKDBRecordFieldStringValue
} from "@apple/cktool.database";

// These parameters are commonly passed to
// operations on records.
const defaultParams = {
  containerId: "YOUR_CONTAINER_ID",
  environment: CKEnvironment.DEVELOPMENT,
  databaseType: CKDatabaseType.PUBLIC,
  zoneName: "_defaultZone",
};

try {
  const api = new PromisesApi({
    configuration: createConfiguration(),
    security: {
      // You can obtain tokens from CloudKit Console.
      "ManagementTokenAuth": "YOUR_MANAGEMENT_TOKEN",
      "UserTokenAuth": "YOUR_USER_TOKEN"
    },
  });
  const { result } = await api.updateRecord({
    ...defaultParams,
    recordName: "RECORD_NAME",
    body: {
      recordType: "MyUserAccounts",
      fields: {
        "lastName": createCKDBRecordFieldStringValue({
          value: "Smith-Jones"
        }),
      }
    }
  });
  // Do something with result.record
  console.log(result.record.recordName);
} catch(ex) {
  // Handle error
}
```

## See Also

### Record Management

- [acceptRecord](acceptrecord.md): Accepts a share on behalf of the current user.
- [createRecord](createrecord.md): Creates a new record.
- [deleteRecord](deleterecord.md): Deletes a single record.
- [deleteRecordsByQuery](deleterecordsbyquery.md): Deletes records matching the provided query.
- [getRecord](getrecord.md): Returns a record’s details.
- [lookupRecords](lookuprecords.md): Fetches multiple records by record name.
- [queryRecordChanges](queryrecordchanges.md): Returns records that changed since a specified sync token or since a zone was created.
- [queryRecords](queryrecords.md): Returns a collection of records matching the provided query.
- [resolveRecord](resolverecord.md): Fetches information about records given their shortGuid properties.
