> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1542920-keyword_attribute_constants](https://developer.apple.com/documentation/coreservices/apple_events/1542920-keyword_attribute_constants)

# Keyword Attribute Constants

**Framework:** Core Services

Specify keyword values for Apple event attributes.

<a id="overview"></a>

## Overview

These constants are keyword constants for Apple event attributes. An Apple event consists of attributes (which identify the Apple event and denote its task) and, often, parameters (which contain information to be used by the target application). An Apple event attribute is a descriptor that identifies the event class, event ID, target application, or some other characteristic of the Apple event. Taken together, the attributes of an Apple event denote the task to be performed on any data specified in the Apple event’s parameters.

Keywords are arbitrary names used by the Apple Event Manager to keep track of various descriptors. Your application cannot examine the contents of an Apple event directly. Instead, you call Apple Event Manager routines such as those described in [Getting Data or Descriptors From Apple Events and Apple Event Records](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1651986) to request attributes and parameters by keyword.

See also [Keyword Parameter Constants](1527206-keyword_parameter_constants.md).

<a id="1770283"></a>

### Version-Notes

The constant `keyReplyRequestedAttr` was added in OS X version 10.3.

## Topics

### Constants

- [keyTransactionIDAttr](../keytransactionidattr.md): Transaction ID identifying a series of Apple events that are part of one transaction.
- [keyReturnIDAttr](../keyreturnidattr.md): Return ID for a reply Apple event.
- [keyEventClassAttr](../keyeventclassattr.md): Event class of an Apple event. See [AEAddressDesc](../aeaddressdesc.md).
- [keyEventIDAttr](../keyeventidattr.md): Event ID of an Apple event. See [AEAddressDesc](../aeaddressdesc.md).
- [keyAddressAttr](../keyaddressattr.md): Address of a target or client application. See also [AEAddressDesc](../aeaddressdesc.md).
- [keyOptionalKeywordAttr](../keyoptionalkeywordattr.md): List of keywords for parameters of an Apple event that should be treated as optional by the target application.
- [keyTimeoutAttr](../keytimeoutattr.md): Length of time, in ticks, that the client will wait for a reply or a result from the server.
- [keyInteractLevelAttr](../keyinteractlevelattr.md): Settings for when to allow the Apple Event Manager to bring a server application to the foreground, if necessary, to interact with the user. See [AEAddressDesc](../aeaddressdesc.md). (Read-only.)
- [keyEventSourceAttr](../keyeventsourceattr.md): Nature of the source application. (Read-only.)
- [keyMissedKeywordAttr](../keymissedkeywordattr.md)
- [keyOriginalAddressAttr](../keyoriginaladdressattr.md): Address of original source of Apple event if the event has been forwarded (available only in version 1.01 or later versions of the Apple Event Manager). See also [AEAddressDesc](../aeaddressdesc.md).
- [keyReplyRequestedAttr](../keyreplyrequestedattr.md): A Boolean value indicating whether the Apple event expects to be replied to.
- [keyAcceptTimeoutAttr](../keyaccepttimeoutattr.md)
- [keyActualSenderAuditToken](../keyactualsenderaudittoken.md)
- [keySenderApplescriptEntitlementsAttr](../keysenderapplescriptentitlementsattr.md)
- [keySenderApplicationIdentifierEntitlementAttr](../keysenderapplicationidentifierentitlementattr.md)
- [keySenderApplicationSandboxed](../keysenderapplicationsandboxed.md)
- [keySenderAuditTokenAttr](../keysenderaudittokenattr.md)
- [keySenderEGIDAttr](../keysenderegidattr.md)
- [keySenderEUIDAttr](../keysendereuidattr.md)
- [keySenderGIDAttr](../keysendergidattr.md)
- [keySenderPIDAttr](../keysenderpidattr.md)
- [keySenderUIDAttr](../keysenderuidattr.md)
