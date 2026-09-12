> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/change-history-response-objects](https://developer.apple.com/documentation/apple-ads-platform-api/change-history-response-objects)

# Change History Response Objects

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** API Collection  
**Availability:** Apple Ads Platform API 1.0+

Parse the audit summary and change detail objects returned by change history endpoints.

## Topics

- [ActivityDetail](activitydetail.md): A group of field-level changes that occurred within a single activity context in a change details record.
- [AuditSummary](auditsummary.md): One row in the query change history response, grouping a single actor’s entity changes in one transaction by entity type and event type.
- [AuditSummaryResponse](auditsummaryresponse.md): The response envelope returned by the Query Change History endpoint, wrapping an array of audit summary rows with pagination metadata.
- [BaseAuditResponse](baseauditresponse.md): Common response envelope fields shared by all change history response objects.
- [ChangeDetails](changedetails.md): Field-level change record for a single API entity within a transaction.
- [ChangeDetailsResponse](changedetailsresponse.md): The response envelope returned by the Get Change History Detail endpoint, wrapping an array of change detail records with pagination metadata.
- [ErrorMessage](errormessage.md): Error information returned in a change history response when a request fails.

## See Also

### Change History

- [Change History Endpoints](change-history-endpoints.md): Query audit summaries and retrieve change detail records for entities in an ad account.
- [Change History Query Objects](change-history-query-objects.md): Build the filter, sort, and pagination inputs for change history query requests.
- [Change History Enumerations](change-history-enumerations.md): Look up the enumerated values accepted in change history query and response fields.
