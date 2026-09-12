> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi](https://developer.apple.com/documentation/applebusinessapi)

# Apple Business API

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service  
**Availability:** Apple Business API 2.4+

Automate device management activities, view device information, and manage users and user groups in Apple Business.

<a id="overview"></a>

## Overview

> **Note**

> This API is a part of the [Apple School Manager and Apple Business APIs](apple-school-and-business-manager-api.md) collection.

## Topics

### Authentication

- [Implementing OAuth for the Apple School Manager and Apple Business API](apple-school-and-business-manager-api/implementing-oauth-for-the-apple-school-manager-and-apple-business-api.md): Manage secure access to Apple School Manager and Apple Business API accounts.

### Devices

- [Get Organization Devices](applebusinessapi/get-org-devices.md): Get a list of devices in an organization that enroll using Automated Device Enrollment.
- [Get Device Information](applebusinessapi/get-orgdevice-information.md): Get information about a device in an organization.
- [Get AppleCare coverage Information for a Device](applebusinessapi/get-all-applecare-coverage-for-an-orgdevice.md): Get a list of AppleCare coverage resources for an organization device.
- [Get Devices Enrolled in Apple Device Management Service](applebusinessapi/get-apple-mdm-enrolled-devices.md): Get a list of devices enrolled in Apple Device Management service.
- [Get Details for a Device Enrolled in Apple Device Management Service](applebusinessapi/get-the-details-for-apple-mdm-enrolled-device.md): Get detailed information about a device enrolled in Apple Device Management service.

### Device Management Services

- [Get Device Management Services](applebusinessapi/get-mdm-servers.md): Get a list of device management services in an organization.
- [Get Device Management Service Information](applebusinessapi/get-mdmserver-information.md): Get the information for a specific device management service.
- [Create a Device Management Service](applebusinessapi/create-an-mdmserver.md): Create a new device management service in an organization.
- [Update a Device Management Service](applebusinessapi/update-an-mdmserver.md): Update an existing device management service in an organization.
- [Delete a Device Management Service](applebusinessapi/delete-an-mdmserver.md): Delete a device management service from an organization.
- [Get the Device Serial Numbers for a Device Management Service](applebusinessapi/get-all-device-ids-for-an-mdmserver.md): Get a list of device serial numbers assigned to a device management service.
- [Get the Assigned Device Management Service ID for a Device](applebusinessapi/get-the-assigned-server-id-for-an-orgdevice.md): Get the assigned device management service ID information for a device.
- [Get the Assigned Device Management Service Information for a Device](applebusinessapi/get-the-assigned-server-information-for-an-orgdevice.md): Get the assigned device management service information for a device.
- [Assign or Unassign Devices to a Device Management Service or Release Devices](applebusinessapi/create-an-orgdeviceactivity.md): Assign or unassign devices to a device management service, manage a device management service migration for devices, or release devices from an organization.
- [Get Organization Device Activity Information](applebusinessapi/get-orgdeviceactivity-information.md): Get information for an organization device activity that a device management action, such as assign or unassign, creates.

### Users

- [Get Users](applebusinessapi/get-users.md): Get a list of users in an organization.
- [Get User Information](applebusinessapi/get-user-information.md): Get information about a specific user in an organization.

### UserGroups

- [Get User Groups](applebusinessapi/get-user-groups.md): Get a list of user groups in an organization.
- [Get User Group Information](applebusinessapi/get-usergroup-information.md): Get information about a specific user group in an organization.
- [Get User IDs for a User Group](applebusinessapi/get-all-user-ids-for-a-user-group.md): Get a list of user IDs for a user group in an organization.

### Organizational Units

- [Get Organizational Units](applebusinessapi/get-organizational-units.md): Get a list of organizational units in an organization.
- [Get Organizational Unit Information](applebusinessapi/get-organizationalunit-information.md): Get information about a specific organizational unit in an organization.
- [Get User IDs for an Organizational Unit](applebusinessapi/get-all-user-ids-for-an-organizationalunit.md): Get a list of user IDs for an organizational unit in an organization.

### Apps and Packages

- [Get Apps](applebusinessapi/get-apps.md): Get a list of apps for an organization using the built-in device management in Apple Business.
- [Get App Information](applebusinessapi/get-app-information.md): Get information about a specific app for an organization using the built-in device management in Apple Business.
- [Get Packages](applebusinessapi/get-packages.md): Get a list of packages for an organization using Apple Business’s built-in device management.
- [Get Package Information](applebusinessapi/get-package-information.md): Get information about a specific package for an organization using Apple Business’s built-in device management.

### Blueprints

- [Get Blueprints](applebusinessapi/get-blueprints.md): Get a list of Blueprints in an organization.
- [Create a Blueprint](applebusinessapi/create-a-blueprint.md): Create a new Blueprint in an organization.
- [Get Blueprint Information](applebusinessapi/get-blueprint-information.md): Get information about a specific Blueprint in an organization.
- [Update a Blueprint](applebusinessapi/update-a-blueprint.md): Update an existing Blueprint in an organization.
- [Delete a Blueprint](applebusinessapi/delete-a-blueprint.md): Delete a Blueprint from an organization.
- [Get App IDs for a Blueprint](applebusinessapi/get-all-app-ids-for-a-blueprint.md): Get a list of app IDs associated with a Blueprint.
- [Add Apps to a Blueprint](applebusinessapi/add-apps-to-a-blueprint.md): Add apps to a Blueprint.
- [Remove Apps from a Blueprint](applebusinessapi/remove-apps-from-a-blueprint.md): Remove apps from a Blueprint.
- [Get Configuration IDs for a Blueprint](applebusinessapi/get-all-configuration-ids-for-a-blueprint.md): Get a list of Configuration IDs associated with a Blueprint.
- [Add Configurations to a Blueprint](applebusinessapi/add-configurations-to-a-blueprint.md): Add Configurations to a Blueprint.
- [Remove Configurations from a Blueprint](applebusinessapi/remove-configurations-from-a-blueprint.md): Remove Configurations from a Blueprint.
- [Get Package IDs for a Blueprint](applebusinessapi/get-all-package-ids-for-a-blueprint.md): Get a list of package IDs associated with a Blueprint.
- [Add Packages to a Blueprint](applebusinessapi/add-packages-to-a-blueprint.md): Add packages to a Blueprint.
- [Remove Packages from a Blueprint](applebusinessapi/remove-packages-from-a-blueprint.md): Remove packages from a Blueprint.
- [Get Device IDs for a Blueprint](applebusinessapi/get-all-orgdevice-ids-for-a-blueprint.md): Get a list of device IDs associated with a Blueprint.
- [Add Devices to a Blueprint](applebusinessapi/add-org-devices-to-a-blueprint.md): Add devices to a Blueprint.
- [Remove Devices from a Blueprint](applebusinessapi/remove-org-devices-from-a-blueprint.md): Remove devices from a Blueprint.
- [Get User IDs for a Blueprint](applebusinessapi/get-all-user-ids-for-a-blueprint.md): Get a list of user IDs associated with a Blueprint.
- [Add Users to a Blueprint](applebusinessapi/add-users-to-a-blueprint.md): Add users to a Blueprint.
- [Remove Users from a Blueprint](applebusinessapi/remove-users-from-a-blueprint.md): Remove users from a Blueprint.
- [Get User Group IDs for a Blueprint](applebusinessapi/get-all-user-group-ids-for-a-blueprint.md): Get a list of user group IDs associated with a Blueprint.
- [Add User Groups to a Blueprint](applebusinessapi/add-user-groups-to-a-blueprint.md): Add user groups to a Blueprint.
- [Remove User Groups from a Blueprint](applebusinessapi/remove-user-groups-from-a-blueprint.md): Remove user groups from a Blueprint.

### Configurations

- [Get Configurations](applebusinessapi/get-configurations.md): Get a list of Configurations in an organization.
- [Create a Configuration](applebusinessapi/create-a-configuration.md): Create a new custom Configuration in an organization.
- [Get Configuration Information](applebusinessapi/get-configuration-information.md): Get information about a specific Configuration in an organization.
- [Update a Configuration](applebusinessapi/update-a-configuration.md): Update an existing custom Configuration in an organization.
- [Delete a Configuration](applebusinessapi/delete-a-configuration.md): Delete a Configuration from an organization.

### Audit Events

- [Get Audit Events](applebusinessapi/get-audit-events.md): Get a list of audit events in an organization that satisfies the query criteria.

### Objects and Data Types

- [OrgDevice](applebusinessapi/orgdevice.md): The data structure that represents an organization device resource.
- [OrgDeviceResponse](applebusinessapi/orgdeviceresponse.md): A response that contains a single organization device resource.
- [OrgDevicesResponse](applebusinessapi/orgdevicesresponse.md): A response that contains a list of organization device resources.
- [OrgDeviceAssignedServerLinkageResponse](applebusinessapi/orgdeviceassignedserverlinkageresponse.md): The data and links that describe the relationship between the resources.
- [MdmDevice](applebusinessapi/mdmdevice.md): The data structure that represents a device management service enrolled device resource.
- [MdmDeviceResponse](applebusinessapi/mdmdeviceresponse.md): A response that contains a list of Apple devices enrolled in a device management service.
- [MdmDevicesResponse](applebusinessapi/mdmdevicesresponse.md): A response that contains a list of Apple devices enrolled in a device management service.
- [MdmDeviceDetail](applebusinessapi/mdmdevicedetail.md): The data structure that represents the detailed information for a device management service enrolled device resource.
- [MdmDeviceDetailResponse](applebusinessapi/mdmdevicedetailresponse.md): A response that contains the detailed information for an Apple device enrolled in a device management service.
- [MdmServer](applebusinessapi/mdmserver.md): The data structure that represents a device management service resource in an organization.
- [MdmServerResponse](applebusinessapi/mdmserverresponse.md): A response that contains a single device management service resource.
- [MdmServersResponse](applebusinessapi/mdmserversresponse.md): A response that contains a list of device management service resources.
- [MdmServerDevicesLinkagesResponse](applebusinessapi/mdmserverdeviceslinkagesresponse.md): The data and links that describe the relationship between the resources.
- [OrgDeviceActivity](applebusinessapi/orgdeviceactivity.md): The data structure that represents an organization device activity resource.
- [OrgDeviceActivityCreateRequest](applebusinessapi/orgdeviceactivitycreaterequest.md): The request body you use to update the device management service for a device.
- [OrgDeviceActivityResponse](applebusinessapi/orgdeviceactivityresponse.md): A response that contains a single organization device activity resource.
- [AppleCareCoverage](applebusinessapi/applecarecoverage.md): The data structure that represents an AppleCare coverage resource that belongs to an organization device.
- [AppleCareCoverageResponse](applebusinessapi/applecarecoverageresponse.md): A response that contains a list of AppleCare coverage resources that belongs to an organization device.
- [User](applebusinessapi/user.md): The data structure that represents a user resource.
- [UserResponse](applebusinessapi/userresponse.md): A response that contains a single user resource.
- [UsersResponse](applebusinessapi/usersresponse.md): A response that contains a list of user resources.
- [UserPhoneNumber](applebusinessapi/userphonenumber.md): The data structure that represents a user’s phone number.
- [UserRoleOuMapping](applebusinessapi/userroleoumapping.md): The data structure that represents a user’s role and organizational unit mapping.
- [UserGroup](applebusinessapi/usergroup.md): The data structure that represents a user group resource.
- [UserGroupResponse](applebusinessapi/usergroupresponse.md): A response that contains a single user group resource.
- [UserGroupsResponse](applebusinessapi/usergroupsresponse.md): A response that contains a list of user group resources.
- [UserGroupUsersLinkagesResponse](applebusinessapi/usergroupuserslinkagesresponse.md): A response that contains a list of user IDs for a user group.
- [OrganizationalUnit](applebusinessapi/organizationalunit.md): The data structure that represents an organizational unit resource.
- [OrganizationalUnitResponse](applebusinessapi/organizationalunitresponse.md): A response that contains a single organizational unit resource.
- [OrganizationalUnitsResponse](applebusinessapi/organizationalunitsresponse.md): A response that contains a list of organizational unit resources.
- [OrganizationalUnitUsersLinkagesResponse](applebusinessapi/organizationalunituserslinkagesresponse.md): A response that contains a list of user IDs for an organizational unit.
- [App](applebusinessapi/app.md): The data structure that represents an app resource.
- [AppResponse](applebusinessapi/appresponse.md): A response that contains information about an app resource.
- [AppsResponse](applebusinessapi/appsresponse.md): A response that contains a list of app resources.
- [Package](applebusinessapi/package.md): The data structure that represents a package resource.
- [PackageResponse](applebusinessapi/packageresponse.md): A response that contains information about a package resource.
- [PackagesResponse](applebusinessapi/packagesresponse.md): A response that contains a list of package resources.
- [Blueprint](applebusinessapi/blueprint.md): The data structure that represents a Blueprint resource.
- [BlueprintResponse](applebusinessapi/blueprintresponse.md): A response that contains information about a Blueprint resource.
- [BlueprintsResponse](applebusinessapi/blueprintsresponse.md): A response that contains a list of Blueprint resources.
- [BlueprintCreateRequest](applebusinessapi/blueprintcreaterequest.md): A request to create a new Blueprint.
- [BlueprintUpdateRequest](applebusinessapi/blueprintupdaterequest.md): A request to update an existing Blueprint.
- [BlueprintAppsLinkagesRequest](applebusinessapi/blueprintappslinkagesrequest.md): A request to get a list of app resource linkages for a Blueprint.
- [BlueprintAppsLinkagesResponse](applebusinessapi/blueprintappslinkagesresponse.md): A response that contains a list of app resource linkages for a Blueprint.
- [BlueprintConfigurationsLinkagesRequest](applebusinessapi/blueprintconfigurationslinkagesrequest.md): A request to get a list of Configuration resource linkages for a Blueprint.
- [BlueprintConfigurationsLinkagesResponse](applebusinessapi/blueprintconfigurationslinkagesresponse.md): A response that contains a list of Configuration resource linkages for a Blueprint.
- [BlueprintPackagesLinkagesRequest](applebusinessapi/blueprintpackageslinkagesrequest.md): A request to get a list of package resource linkages for a Blueprint.
- [BlueprintPackagesLinkagesResponse](applebusinessapi/blueprintpackageslinkagesresponse.md): A response that contains a list of package resource linkages for a Blueprint.
- [BlueprintOrgDevicesLinkagesRequest](applebusinessapi/blueprintorgdeviceslinkagesrequest.md): A request to get a list of device resource linkages for a Blueprint.
- [BlueprintOrgDevicesLinkagesResponse](applebusinessapi/blueprintorgdeviceslinkagesresponse.md): A response that contains a list of device resource linkages for a Blueprint.
- [BlueprintUsersLinkagesRequest](applebusinessapi/blueprintuserslinkagesrequest.md): A request to get a list of user resource linkages for a Blueprint.
- [BlueprintUsersLinkagesResponse](applebusinessapi/blueprintuserslinkagesresponse.md): A response that contains a list of user resource linkages for a Blueprint.
- [BlueprintUserGroupsLinkagesRequest](applebusinessapi/blueprintusergroupslinkagesrequest.md): A request to get a list of user group resource linkages for a Blueprint.
- [BlueprintUserGroupsLinkagesResponse](applebusinessapi/blueprintusergroupslinkagesresponse.md): A response that contains a list of user group resource linkages for a Blueprint.
- [Configuration](applebusinessapi/configuration.md): The data structure that represents a Configuration resource.
- [ConfigurationResponse](applebusinessapi/configurationresponse.md): A response that contains information about a Configuration resource.
- [ConfigurationsResponse](applebusinessapi/configurationsresponse.md): A response that contains a list of Configuration resources.
- [ConfigurationCreateRequest](applebusinessapi/configurationcreaterequest.md): A request to create a new Configuration.
- [ConfigurationUpdateRequest](applebusinessapi/configurationupdaterequest.md): A request to update an existing Configuration.
- [ConfigurationCommon](applebusinessapi/configurationcommon.md)
- [ConfigurationCustomSetting](applebusinessapi/configurationcustomsetting.md)
- [CustomSettingsValues](applebusinessapi/customsettingsvalues.md): The custom settings payload for a Configuration of type `CUSTOM_SETTING`.
- [PagedDocumentLinks](applebusinessapi/pageddocumentlinks.md): Links related to the response document, including paging links.
- [PagingInformation](applebusinessapi/paginginformation.md): Paging information for data responses.
- [RelationshipLinks](applebusinessapi/relationshiplinks.md): Links related to the response document, including self-links.
- [ResourceLinks](applebusinessapi/resourcelinks.md): Self-links to requested resources.
- [ErrorResponse](applebusinessapi/errorresponse.md): The error details that an API returns in the response body whenever the API request isn’t successful.
- [ErrorLinks](applebusinessapi/errorlinks.md)
- [JsonPointer](applebusinessapi/jsonpointer.md): An object that contains the JSON pointer that indicates the location of the error.
- [Parameter](applebusinessapi/parameter.md): An object that contains the query parameter that produces the error.
- [DocumentLinks](applebusinessapi/documentlinks.md): Self-links to documents that can contain information for one or more resources.

### Type Aliases

- [OrgDeviceActivityType](applebusinessapi/orgdeviceactivitytype.md): Strings that represent organization device activities.
- [AppleCareCoveragePaymentType](applebusinessapi/applecarecoveragepaymenttype.md): Strings that represent AppleCare coverage payment types.
- [AppleCareCoverageStatus](applebusinessapi/applecarecoveragestatus.md): Strings that represent AppleCare coverage status.
- [UserStatus](applebusinessapi/userstatus.md): Strings that represent user statuses.
- [UserPhoneNumberType](applebusinessapi/userphonenumbertype.md): Strings that represent phone number types.
- [UserGroupStatus](applebusinessapi/usergroupstatus.md): Strings that represent user group statuses.
- [UserGroupType](applebusinessapi/usergrouptype.md): Strings that represent user group types.
- [SupportedOS](applebusinessapi/supportedos.md): The supported operating systems for an app.
- [BlueprintStatus](applebusinessapi/blueprintstatus.md): The status of a Blueprint.
- [ConfigurationType](applebusinessapi/configurationtype.md): The type of Configuration profile.
- [ConfigurationPlatform](applebusinessapi/configurationplatform.md): The platform that a Configuration targets.
- [AuditEventActorType](applebusinessapi/auditeventactortype.md): Strings that represent the type of entity that performed an action.
- [AuditEventCategory](applebusinessapi/auditeventcategory.md): Strings that represent audit event categories.
- [AuditEventOutcome](applebusinessapi/auditeventoutcome.md): Strings that represent the result of an action.
- [AuditEventPurchaseSourceType](applebusinessapi/auditeventpurchasesourcetype.md): Strings that represent how a device was added to an organization.
- [AuditEventReleaseEntityType](applebusinessapi/auditeventreleaseentitytype.md): Strings that represent the type of entity that conducted the release operation.
- [AuditEventSubjectType](applebusinessapi/auditeventsubjecttype.md): Strings that represent the type of entity that was affected by an action.
- [AuditEventType](applebusinessapi/auditeventtype.md): Strings that represent audit event types.
- [DeviceEraseStatus](applebusinessapi/deviceerasestatus.md): Strings that represent device erase statuses.
- [DeviceLockStatus](applebusinessapi/devicelockstatus.md): Strings that represent device lock statuses.
- [LostModeStatus](applebusinessapi/lostmodestatus.md): Strings that represent lost mode statuses.
- [MdmMigrationStatus](applebusinessapi/mdmmigrationstatus.md): Strings that represent the state of a device’s device management service migration.

### Dictionaries

- [ActivityTypeMetadata](applebusinessapi/activitytypemetadata.md): Additional metadata for an organization device activity, used by device management service migration activity types.
- [AuditEvent](applebusinessapi/auditevent.md): The data structure that represents an audit event resource.
- [AuditEventAccountAdded](applebusinessapi/auditeventaccountadded.md): The data structure that represents the event data for an account added audit event.
- [AuditEventAccountAddedAttributes](applebusinessapi/auditeventaccountaddedattributes.md): The attributes for an account added audit event.
- [AuditEventAccountDeleted](applebusinessapi/auditeventaccountdeleted.md): The data structure that represents the event data for an account deleted audit event.
- [AuditEventAccountDeletedAttributes](applebusinessapi/auditeventaccountdeletedattributes.md): The attributes for an account deleted audit event.
- [AuditEventAccountRoleLocation](applebusinessapi/auditeventaccountrolelocation.md): The data structure that represents a role and location assignment.
- [AuditEventAccountRoleLocationChanged](applebusinessapi/auditeventaccountrolelocationchanged.md): The data structure that represents the event data for an account role location changed audit event.
- [AuditEventAccountRoleLocationChangedAttributes](applebusinessapi/auditeventaccountrolelocationchangedattributes.md): The attributes for an account role location changed audit event.
- [AuditEventApiAccountCreatedWithKey](applebusinessapi/auditeventapiaccountcreatedwithkey.md): The data structure that represents the event data for an API account created with key audit event.
- [AuditEventApiAccountCreatedWithKeyAttributes](applebusinessapi/auditeventapiaccountcreatedwithkeyattributes.md): The attributes for an API account created with key audit event.
- [AuditEventApiAccountCreatedWithoutKey](applebusinessapi/auditeventapiaccountcreatedwithoutkey.md): The data structure that represents the event data for an API account created without key audit event.
- [AuditEventApiAccountCreatedWithoutKeyAttributes](applebusinessapi/auditeventapiaccountcreatedwithoutkeyattributes.md): The attributes for an API account created without key audit event.
- [AuditEventApiAccountDeleted](applebusinessapi/auditeventapiaccountdeleted.md): The data structure that represents the event data for an API account deleted audit event.
- [AuditEventApiAccountDeletedAttributes](applebusinessapi/auditeventapiaccountdeletedattributes.md): The attributes for an API account deleted audit event.
- [AuditEventApiAccountKeyGenerated](applebusinessapi/auditeventapiaccountkeygenerated.md): The data structure that represents the event data for an API account key generated audit event.
- [AuditEventApiAccountKeyGeneratedAttributes](applebusinessapi/auditeventapiaccountkeygeneratedattributes.md): The attributes for an API account key generated audit event.
- [AuditEventApiAccountKeyRevoked](applebusinessapi/auditeventapiaccountkeyrevoked.md): The data structure that represents the event data for an API account key revoked audit event.
- [AuditEventApiAccountKeyRevokedAttributes](applebusinessapi/auditeventapiaccountkeyrevokedattributes.md): The attributes for an API account key revoked audit event.
- [AuditEventApiAccountNameChanged](applebusinessapi/auditeventapiaccountnamechanged.md): The data structure that represents the event data for an API account name changed audit event.
- [AuditEventApiAccountNameChangedAttributes](applebusinessapi/auditeventapiaccountnamechangedattributes.md): The attributes for an API account name changed audit event.
- [AuditEventApiAccountRoleLocationChanged](applebusinessapi/auditeventapiaccountrolelocationchanged.md): The data structure that represents the event data for an API account role location changed audit event.
- [AuditEventApiAccountRoleLocationChangedAttributes](applebusinessapi/auditeventapiaccountrolelocationchangedattributes.md): The attributes for an API account role location changed audit event.
- [AuditEventCollectionCreated](applebusinessapi/auditeventcollectioncreated.md): The data structure that represents the event data for a collection created audit event.
- [AuditEventCollectionCreatedAttributes](applebusinessapi/auditeventcollectioncreatedattributes.md): The attributes for a collection created audit event.
- [AuditEventCollectionDeleted](applebusinessapi/auditeventcollectiondeleted.md): The data structure that represents the event data for a collection deleted audit event.
- [AuditEventCollectionDeletedAttributes](applebusinessapi/auditeventcollectiondeletedattributes.md): The attributes for a collection deleted audit event.
- [AuditEventCollectionUpdated](applebusinessapi/auditeventcollectionupdated.md): The data structure that represents the event data for a collection updated audit event.
- [AuditEventCollectionUpdatedAttributes](applebusinessapi/auditeventcollectionupdatedattributes.md): The attributes for a collection updated audit event.
- [AuditEventCommonAttributes](applebusinessapi/auditeventcommonattributes.md): The common attributes for all audit events.
- [AuditEventConfigSettingsCreated](applebusinessapi/auditeventconfigsettingscreated.md): The data structure that represents the event data for a config settings created audit event.
- [AuditEventConfigSettingsCreatedAttributes](applebusinessapi/auditeventconfigsettingscreatedattributes.md): The attributes for a configuration settings created audit event.
- [AuditEventConfigSettingsDeleted](applebusinessapi/auditeventconfigsettingsdeleted.md): The data structure that represents the event data for a config settings deleted audit event.
- [AuditEventConfigSettingsDeletedAttributes](applebusinessapi/auditeventconfigsettingsdeletedattributes.md): The attributes for a configuration settings deleted audit event.
- [AuditEventConfigSettingsUpdated](applebusinessapi/auditeventconfigsettingsupdated.md): The data structure that represents the event data for a config settings updated audit event.
- [AuditEventConfigSettingsUpdatedAttributes](applebusinessapi/auditeventconfigsettingsupdatedattributes.md): The attributes for a configuration settings updated audit event.
- [AuditEventDeviceAddedToOrg](applebusinessapi/auditeventdeviceaddedtoorg.md): The data structure that represents the event data for a device added to organization audit event.
- [AuditEventDeviceAddedToOrgAttributes](applebusinessapi/auditeventdeviceaddedtoorgattributes.md): The attributes for a device added to organization audit event.
- [AuditEventDeviceAssignedToServer](applebusinessapi/auditeventdeviceassignedtoserver.md): The data structure that represents the event data for a device assigned to server audit event.
- [AuditEventDeviceAssignedToServerAttributes](applebusinessapi/auditeventdeviceassignedtoserverattributes.md): The attributes for a device assigned to server audit event.
- [AuditEventDeviceIsErased](applebusinessapi/auditeventdeviceiserased.md): The data structure that represents the event data for a device is erased audit event.
- [AuditEventDeviceIsErasedAttributes](applebusinessapi/auditeventdeviceiserasedattributes.md): The attributes for a device is erased audit event.
- [AuditEventDeviceRemovedFromOrg](applebusinessapi/auditeventdeviceremovedfromorg.md): The data structure that represents the event data for a device removed from organization audit event.
- [AuditEventDeviceRemovedFromOrgAttributes](applebusinessapi/auditeventdeviceremovedfromorgattributes.md): The attributes for a device removed from organization audit event.
- [AuditEventDeviceUnassignedFromServer](applebusinessapi/auditeventdeviceunassignedfromserver.md): The data structure that represents the event data for a device unassigned from server audit event.
- [AuditEventDeviceUnassignedFromServerAttributes](applebusinessapi/auditeventdeviceunassignedfromserverattributes.md): The attributes for a device unassigned from server audit event.
- [AuditEventDomainAdded](applebusinessapi/auditeventdomainadded.md): The data structure that represents the event data for a domain added audit event.
- [AuditEventDomainAddedAttributes](applebusinessapi/auditeventdomainaddedattributes.md): The attributes for a domain added audit event.
- [AuditEventDomainRemoved](applebusinessapi/auditeventdomainremoved.md): The data structure that represents the event data for a domain removed audit event.
- [AuditEventDomainRemovedAttributes](applebusinessapi/auditeventdomainremovedattributes.md): The attributes for a domain removed audit event.
- [AuditEventDomainVerified](applebusinessapi/auditeventdomainverified.md): The data structure that represents the event data for a domain verified audit event.
- [AuditEventDomainVerifiedAttributes](applebusinessapi/auditeventdomainverifiedattributes.md): The attributes for a domain verified audit event.
- [AuditEventExternalAccountAssociated](applebusinessapi/auditeventexternalaccountassociated.md): The data structure that represents the event data for an external account associated audit event.
- [AuditEventExternalAccountAssociatedAttributes](applebusinessapi/auditeventexternalaccountassociatedattributes.md): The attributes for an external account associated audit event.
- [AuditEventExternalAccountDisassociated](applebusinessapi/auditeventexternalaccountdisassociated.md): The data structure that represents the event data for an external account disassociated audit event.
- [AuditEventExternalAccountDisassociatedAttributes](applebusinessapi/auditeventexternalaccountdisassociatedattributes.md): The attributes for an external account disassociated audit event.
- [AuditEventSubjectHasAppleCarePurchaseAdded](applebusinessapi/auditeventsubjecthasapplecarepurchaseadded.md): The data structure that represents the event data for a subject has AppleCare purchase added audit event.
- [AuditEventSubjectHasAppleCarePurchaseRemoved](applebusinessapi/auditeventsubjecthasapplecarepurchaseremoved.md): The data structure that represents the event data for a subject has AppleCare purchase removed audit event.
- [AuditEventSubjectHasApplecarePurchaseAddedAttributes](applebusinessapi/auditeventsubjecthasapplecarepurchaseaddedattributes.md): The attributes for a subject has AppleCare purchase added audit event.
- [AuditEventSubjectHasApplecarePurchaseRemovedAttributes](applebusinessapi/auditeventsubjecthasapplecarepurchaseremovedattributes.md): The attributes for a subject has AppleCare purchase removed audit event.
- [AuditEventSubjectHasICloudStoragePurchaseAdded](applebusinessapi/auditeventsubjecthasicloudstoragepurchaseadded.md): The data structure that represents the event data for a subject has iCloud storage purchase added audit event.
- [AuditEventSubjectHasICloudStoragePurchaseRemoved](applebusinessapi/auditeventsubjecthasicloudstoragepurchaseremoved.md): The data structure that represents the event data for a subject has iCloud storage purchase removed audit event.
- [AuditEventSubjectHasIcloudStoragePurchaseAddedAttributes](applebusinessapi/auditeventsubjecthasicloudstoragepurchaseaddedattributes.md): The attributes for a subject has iCloud storage purchase added audit event.
- [AuditEventSubjectHasIcloudStoragePurchaseRemovedAttributes](applebusinessapi/auditeventsubjecthasicloudstoragepurchaseremovedattributes.md): The attributes for a subject has iCloud storage purchase removed audit event.
- [AuditEventSubscriptionCreated](applebusinessapi/auditeventsubscriptioncreated.md): The data structure that represents the event data for a subscription created audit event.
- [AuditEventSubscriptionCreatedAttributes](applebusinessapi/auditeventsubscriptioncreatedattributes.md): The attributes for a subscription created audit event.
- [AuditEventSubscriptionDeleted](applebusinessapi/auditeventsubscriptiondeleted.md): The data structure that represents the event data for a subscription deleted audit event.
- [AuditEventSubscriptionDeletedAttributes](applebusinessapi/auditeventsubscriptiondeletedattributes.md): The attributes for a subscription deleted audit event.
- [AuditEventSubscriptionUpdated](applebusinessapi/auditeventsubscriptionupdated.md): The data structure that represents the event data for a subscription updated audit event.
- [AuditEventSubscriptionUpdatedAttributes](applebusinessapi/auditeventsubscriptionupdatedattributes.md): The attributes for a subscription updated audit event.
- [MdmServerCreateRequest](applebusinessapi/mdmservercreaterequest.md): A request to create a new device management service.
- [MdmServerUpdateRequest](applebusinessapi/mdmserverupdaterequest.md): A request to update an existing device management service.

## See Also

### Apple School Manager and Apple Business APIs

- [Apple School Manager API](appleschoolmanagerapi.md): Automate device management activities and view device information in Apple School Manager.
