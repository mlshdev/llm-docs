> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/domain](https://developer.apple.com/documentation/rosterapi/domain)

# Domain

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Object  
**Availability:** Roster API 1.0.0+

A DNS domain name associated with an Apple School Manager organization.

## Declaration

```
object Domain
```

## Properties

- `isVerified` — `boolean`: A flag that indicates whether the domain’s verified in Apple School Manager.
- `name` — `string`: The domain name.

<a id="Discussion"></a>

## Discussion

An organization can generate Managed Apple Accounts in Apple School Manager for the verified domains named in its `Domains` objects. For more information about verifying domains, see [Verify domains in Apple Business Manager and Apple School Manager](https://support.apple.com/en-us/HT212275).

## See Also

### Information about the organization

- [Read the organization](returns-organization-infrmation.md): Returns information about the Apple School Manager organization.
- [Organization](organization.md): Information about an Apple School Manager organization.
