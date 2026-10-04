> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asimportableitem/init(id:created:lastmodified:title:subtitle:favorite:scope:credentials:tags:)

# init(id:created:lastModified:title:subtitle:favorite:scope:credentials:tags:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
init(id: Data, created: Date, lastModified: Date, title: String, subtitle: String? = nil, favorite: Bool = false, scope: ASImportableCredentialScope? = nil, credentials: [ASImportableCredential], tags: [String] = [])
```
