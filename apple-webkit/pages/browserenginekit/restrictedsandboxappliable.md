> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/restrictedsandboxappliable](https://developer.apple.com/documentation/browserenginekit/restrictedsandboxappliable)

# RestrictedSandboxAppliable

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

A protocol that browser extensions implement to opt into a more restricted sandbox.

## Declaration

```swift
protocol RestrictedSandboxAppliable
```

## Mentioned In

- [Limiting resource access in web content extensions](limiting-resource-access-in-content-extensions.md)

<a id="overview"></a>

## Overview

Call [applyRestrictedSandbox(revision:)](restrictedsandboxappliable/applyrestrictedsandbox%28revision_%29.md) to enter the restricted sandbox, indicating which revision of the sandbox restrictions to apply.

In the first revision ([RestrictedSandboxRevision.revision1](restrictedsandboxrevision/revision1.md)), additional restrictions affect the web content extension only.

For more information, see [Limiting resource access in web content extensions](limiting-resource-access-in-content-extensions.md).

## Topics

### Applying sandbox restrictions

- [applyRestrictedSandbox(revision:)](restrictedsandboxappliable/applyrestrictedsandbox%28revision_%29.md): Puts a browser extension into a more restricted sandbox.
- [RestrictedSandboxRevision](restrictedsandboxrevision.md): Revisions to the restricted sandbox rules.

## Relationships

### Inherited By

- [NetworkingExtension](networkingextension.md)
- [RenderingExtension](renderingextension.md)
- [WebContentExtension](webcontentextension.md)

## See Also

### Access control

- [Limiting resource access in web content extensions](limiting-resource-access-in-content-extensions.md): Reduce the impact of vulnerabilities in web content extensions by limiting privileges.
- [Accessing files in browser extensions](accessing-files-in-browser-extensions.md): Grant extensions access to files from within your browser app.
- [Attributing memory to a content extension](attributing-memory-to-a-content-extension.md): Adhere to operating-system limits on GPU memory use.
- [RestrictedSandboxRevision](restrictedsandboxrevision.md): Revisions to the restricted sandbox rules.
