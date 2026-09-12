> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542920-keyword_attribute_constants](https://developer.apple.com/documentation/coreservices/1542920-keyword_attribute_constants)

# Keyword Attribute Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify keyword values for Apple event attributes.

## Declaration

```objectivec
enum : AEKeyword {
    ...
};
```

## Topics

### Constants

- [keyTransactionIDAttr](1542920-keyword_attribute_constants/keytransactionidattr.md): Transaction ID identifying a series of Apple events that are part of one transaction.
- [keyReturnIDAttr](1542920-keyword_attribute_constants/keyreturnidattr.md): Return ID for a reply Apple event.
- [keyEventClassAttr](1542920-keyword_attribute_constants/keyeventclassattr.md): Event class of an Apple event. See [AEAddressDesc](aeaddressdesc.md).
- [keyEventIDAttr](1542920-keyword_attribute_constants/keyeventidattr.md): Event ID of an Apple event. See [AEAddressDesc](aeaddressdesc.md).
- [keyAddressAttr](1542920-keyword_attribute_constants/keyaddressattr.md): Address of a target or client application. See also [AEAddressDesc](aeaddressdesc.md).
- [keyOptionalKeywordAttr](1542920-keyword_attribute_constants/keyoptionalkeywordattr.md): List of keywords for parameters of an Apple event that should be treated as optional by the target application.
- [keyTimeoutAttr](1542920-keyword_attribute_constants/keytimeoutattr.md): Length of time, in ticks, that the client will wait for a reply or a result from the server.
- [keyInteractLevelAttr](1542920-keyword_attribute_constants/keyinteractlevelattr.md): Settings for when to allow the Apple Event Manager to bring a server application to the foreground, if necessary, to interact with the user. See [AEAddressDesc](aeaddressdesc.md). (Read-only.)
- [keyEventSourceAttr](1542920-keyword_attribute_constants/keyeventsourceattr.md): Nature of the source application. (Read-only.)
- [keyMissedKeywordAttr](1542920-keyword_attribute_constants/keymissedkeywordattr.md)
- [keyOriginalAddressAttr](1542920-keyword_attribute_constants/keyoriginaladdressattr.md): Address of original source of Apple event if the event has been forwarded (available only in version 1.01 or later versions of the Apple Event Manager). See also [AEAddressDesc](aeaddressdesc.md).
- [keyReplyRequestedAttr](1542920-keyword_attribute_constants/keyreplyrequestedattr.md): A Boolean value indicating whether the Apple event expects to be replied to.
- [keyAcceptTimeoutAttr](1542920-keyword_attribute_constants/keyaccepttimeoutattr.md)
- [keyActualSenderAuditToken](1542920-keyword_attribute_constants/keyactualsenderaudittoken.md)
- [keySenderApplescriptEntitlementsAttr](1542920-keyword_attribute_constants/keysenderapplescriptentitlementsattr.md)
- [keySenderApplicationIdentifierEntitlementAttr](1542920-keyword_attribute_constants/keysenderapplicationidentifierentitlementattr.md)
- [keySenderApplicationSandboxed](1542920-keyword_attribute_constants/keysenderapplicationsandboxed.md)
- [keySenderAuditTokenAttr](1542920-keyword_attribute_constants/keysenderaudittokenattr.md)
- [keySenderEGIDAttr](1542920-keyword_attribute_constants/keysenderegidattr.md)
- [keySenderEUIDAttr](1542920-keyword_attribute_constants/keysendereuidattr.md)
- [keySenderGIDAttr](1542920-keyword_attribute_constants/keysendergidattr.md)
- [keySenderPIDAttr](1542920-keyword_attribute_constants/keysenderpidattr.md)
- [keySenderUIDAttr](1542920-keyword_attribute_constants/keysenderuidattr.md)
- [keyAppleEventAttributesAttr](1542920-keyword_attribute_constants/keyappleeventattributesattr.md)
