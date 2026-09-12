> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/auditevent](https://developer.apple.com/documentation/applebusinessapi/auditevent)

# AuditEvent

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

The data structure that represents an audit event resource.

## Declaration

```
object AuditEvent
```

## Properties

- `type` — `string` (required): The resource type.
  **Allowed values:** `auditEvents`
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `attributes` — `(AuditEventDeviceAddedToOrgAttributes | AuditEventDeviceRemovedFromOrgAttributes | AuditEventDeviceAssignedToServerAttributes | AuditEventDeviceUnassignedFromServerAttributes | AuditEventSubjectHasIcloudStoragePurchaseAddedAttributes | AuditEventSubjectHasIcloudStoragePurchaseRemovedAttributes | AuditEventSubjectHasApplecarePurchaseAddedAttributes | AuditEventSubjectHasApplecarePurchaseRemovedAttributes | AuditEventDeviceIsErasedAttributes | AuditEventConfigSettingsCreatedAttributes | AuditEventConfigSettingsUpdatedAttributes | AuditEventConfigSettingsDeletedAttributes | AuditEventCollectionCreatedAttributes | AuditEventCollectionUpdatedAttributes | AuditEventCollectionDeletedAttributes | AuditEventSubscriptionCreatedAttributes | AuditEventSubscriptionUpdatedAttributes | AuditEventSubscriptionDeletedAttributes | AuditEventAccountRoleLocationChangedAttributes | AuditEventAccountAddedAttributes | AuditEventAccountDeletedAttributes | AuditEventExternalAccountAssociatedAttributes | AuditEventExternalAccountDisassociatedAttributes | AuditEventDomainAddedAttributes | AuditEventDomainRemovedAttributes | AuditEventDomainVerifiedAttributes | AuditEventApiAccountCreatedWithKeyAttributes | AuditEventApiAccountCreatedWithoutKeyAttributes | AuditEventApiAccountDeletedAttributes | AuditEventApiAccountKeyRevokedAttributes | AuditEventApiAccountKeyGeneratedAttributes | AuditEventApiAccountRoleLocationChangedAttributes | AuditEventApiAccountNameChangedAttributes)`: A polymorphic audit event resource’s attributes. Depending upon the type of event, attributes may vary.
  **Allowed types:** `AuditEventDeviceAddedToOrgAttributes`, `AuditEventDeviceRemovedFromOrgAttributes`, `AuditEventDeviceAssignedToServerAttributes`, `AuditEventDeviceUnassignedFromServerAttributes`, `AuditEventSubjectHasIcloudStoragePurchaseAddedAttributes`, `AuditEventSubjectHasIcloudStoragePurchaseRemovedAttributes`, `AuditEventSubjectHasApplecarePurchaseAddedAttributes`, `AuditEventSubjectHasApplecarePurchaseRemovedAttributes`, `AuditEventDeviceIsErasedAttributes`, `AuditEventConfigSettingsCreatedAttributes`, `AuditEventConfigSettingsUpdatedAttributes`, `AuditEventConfigSettingsDeletedAttributes`, `AuditEventCollectionCreatedAttributes`, `AuditEventCollectionUpdatedAttributes`, `AuditEventCollectionDeletedAttributes`, `AuditEventSubscriptionCreatedAttributes`, `AuditEventSubscriptionUpdatedAttributes`, `AuditEventSubscriptionDeletedAttributes`, `AuditEventAccountRoleLocationChangedAttributes`, `AuditEventAccountAddedAttributes`, `AuditEventAccountDeletedAttributes`, `AuditEventExternalAccountAssociatedAttributes`, `AuditEventExternalAccountDisassociatedAttributes`, `AuditEventDomainAddedAttributes`, `AuditEventDomainRemovedAttributes`, `AuditEventDomainVerifiedAttributes`, `AuditEventApiAccountCreatedWithKeyAttributes`, `AuditEventApiAccountCreatedWithoutKeyAttributes`, `AuditEventApiAccountDeletedAttributes`, `AuditEventApiAccountKeyRevokedAttributes`, `AuditEventApiAccountKeyGeneratedAttributes`, `AuditEventApiAccountRoleLocationChangedAttributes`, `AuditEventApiAccountNameChangedAttributes`
