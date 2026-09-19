> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asimportableitem/init(id:created:lastmodified:title:subtitle:favorite:scope:credentials:tags:extensions:)

# init(id:created:lastModified:title:subtitle:favorite:scope:credentials:tags:extensions:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
init(id: Data, created: Date? = nil, lastModified: Date? = nil, title: String, subtitle: String? = nil, favorite: Bool = false, scope: ASImportableCredentialScope? = nil, credentials: [ASImportableCredential], tags: [String] = [], extensions: [ASImportableExtension] = [])
```
