> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-audit-events](https://developer.apple.com/documentation/applebusinessapi/get-audit-events)

# Get Audit Events

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get a list of audit events in an organization that satisfies the query criteria.

## URL

```http
GET https://api-business.apple.com/v1/auditEvents
```

## Query Parameters

- `filter[startTimestamp]` — `[string]` (required): ISO8601 formatted start timestamp of query time range.
- `filter[endTimestamp]` — `[string]` (required): ISO8601 formatted end timestamp of query time range.
- `filter[actorId]` — `[string]`: Id of actor of event. Note that only one actor id in query is supported.
- `filter[subjectId]` — `[string]`: Id of subject of event. Note that only one subject id in query is supported.
- `filter[type]` — `[string]`: Type of event. Note that only one type in query is supported.
  **Allowed values:** `DEVICE_ADDED_TO_ORG`, `DEVICE_REMOVED_FROM_ORG`, `DEVICE_ASSIGNED_TO_SERVER`, `DEVICE_UNASSIGNED_FROM_SERVER`, `SUBJECT_HAS_ICLOUD_STORAGE_PURCHASE_ADDED`, `SUBJECT_HAS_ICLOUD_STORAGE_PURCHASE_REMOVED`, `SUBJECT_HAS_APPLECARE_PURCHASE_ADDED`, `SUBJECT_HAS_APPLECARE_PURCHASE_REMOVED`, `DEVICE_IS_ERASED`, `CONFIG_SETTINGS_CREATED`, `CONFIG_SETTINGS_UPDATED`, `CONFIG_SETTINGS_DELETED`, `COLLECTION_CREATED`, `COLLECTION_UPDATED`, `COLLECTION_DELETED`, `SUBSCRIPTION_CREATED`, `SUBSCRIPTION_UPDATED`, `SUBSCRIPTION_DELETED`, `ACCOUNT_ROLE_LOCATION_CHANGED`, `ACCOUNT_ADDED`, `ACCOUNT_DELETED`, `EXTERNAL_ACCOUNT_ASSOCIATED`, `EXTERNAL_ACCOUNT_DISASSOCIATED`, `DOMAIN_ADDED`, `DOMAIN_REMOVED`, `DOMAIN_VERIFIED`, `API_ACCOUNT_CREATED_WITH_KEY`, `API_ACCOUNT_CREATED_WITHOUT_KEY`, `API_ACCOUNT_DELETED`, `API_ACCOUNT_KEY_REVOKED`, `API_ACCOUNT_KEY_GENERATED`, `API_ACCOUNT_ROLE_LOCATION_CHANGED`, `API_ACCOUNT_NAME_CHANGED`
- `limit` — `integer`: The number of included related resources to return.
  **Maximum:** `1000`
- `fields[auditEvents]` — `[string]`: **Allowed values:** `eventDateTime`, `type`, `category`, `actorType`, `actorId`, `actorName`, `subjectType`, `subjectId`, `subjectName`, `outcome`, `groupId`, `eventDataPropertyKey`, `eventDataDeviceAddedToOrg`, `eventDataDeviceRemovedFromOrg`, `eventDataDeviceAssignedToServer`, `eventDataDeviceIsErased`, `eventDataDeviceUnassignedFromServer`, `eventDataSubjectHasICloudStoragePurchaseAdded`, `eventDataSubjectHasICloudStoragePurchaseRemoved`, `eventDataSubjectHasAppleCarePurchaseAdded`, `eventDataSubjectHasAppleCarePurchaseRemoved`, `eventDataConfigSettingsCreated`, `eventDataConfigSettingsUpdated`, `eventDataConfigSettingsDeleted`, `eventDataCollectionCreated`, `eventDataCollectionUpdated`, `eventDataCollectionDeleted`, `eventDataSubscriptionCreated`, `eventDataSubscriptionUpdated`, `eventDataSubscriptionDeleted`, `eventDataAccountRoleLocationChanged`, `eventDataAccountAdded`, `eventDataAccountDeleted`, `eventDataExternalAccountAssociated`, `eventDataExternalAccountDisassociated`, `eventDataDomainAdded`, `eventDataDomainRemoved`, `eventDataDomainVerified`, `eventDataApiAccountCreatedWithKey`, `eventDataApiAccountCreatedWithoutKey`, `eventDataApiAccountDeleted`, `eventDataApiAccountKeyGenerated`, `eventDataApiAccountKeyRevoked`, `eventDataApiAccountNameChanged`, `eventDataApiAccountRoleLocationChanged`
- `cursor` — `string`:

## Response Codes

- `200` OK — `AuditEventsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/auditEvents?filter[startTimestamp]=2026-03-01T00:00:00Z&filter[endTimestamp]=2025-03-02T23:59:59Z&limit=100" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
    {
    "data": [
        {
            "type": "auditEvents",
            "id": "event-12345",
            "attributes": {
                "eventDateTime": "2026-02-14T12:00:00Z",
                "type": "DEVICE_ADDED_TO_ORG",
                "category": "DEVICE_INVENTORY",
                "actorType": "USER",
                "actorId": "user-abc123",
                "actorName": "elana.landot@melardclothing.com",
                "subjectType": "DEVICE",
                "subjectId": "device-xyz789",
                "subjectName": "MacBook Pro",
                "outcome": "SUCCESS",
                "groupId": "group-001",
                "eventDataPropertyKey": "eventDataDeviceAddedToOrg",
                "eventDataDeviceAddedToOrg": {
                    "serialNumber": "C02X1234ABCD",
                    "purchaseSourceType": "APPLE",
                    "purchaseSourceId": "order-56789"
                    }
                }
            }
        ],
    "links": {
        "self": "<llink to query to generate this output>"
        "next": "<llink to next page of data, if more data is available>"
        },  
    "meta": {
        "paging": {
            "nextCursor": "next-page-token"
            "limit": 5
        }  
    }
}
```

## Topics

### Responses

- [AuditEventsResponse](auditeventsresponse.md): The response containing a list of audit events.
