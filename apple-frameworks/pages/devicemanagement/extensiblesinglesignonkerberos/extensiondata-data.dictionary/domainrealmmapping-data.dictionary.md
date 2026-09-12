> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/extensiblesinglesignonkerberos/extensiondata-data.dictionary/domainrealmmapping-data.dictionary](https://developer.apple.com/documentation/devicemanagement/extensiblesinglesignonkerberos/extensiondata-data.dictionary/domainrealmmapping-data.dictionary)

# ExtensibleSingleSignOnKerberos.ExtensionData.DomainRealmMapping

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.1+

The mapping of realms to their DNS suffixes.

## Declaration

```
object ExtensibleSingleSignOnKerberos.ExtensionData.DomainRealmMapping
```

## Properties

- `Realm` — `[string]`: The key should be the name of the realm, and the value is an array of DNS suffixes that map to the realm.
