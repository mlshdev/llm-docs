> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/restrictedsandboxrevision](https://developer.apple.com/documentation/browserenginekit/restrictedsandboxrevision)

# RestrictedSandboxRevision

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Revisions to the restricted sandbox rules.

## Declaration

```swift
enum RestrictedSandboxRevision
```

<a id="overview"></a>

## Overview

Design your browser to support the latest revision to the restricted sandbox in all extensions, and opt in to new revisions as they become available.

The [applyRestrictedSandbox(revision:)](restrictedsandboxappliable/applyrestrictedsandbox%28revision_%29.md) method of the [RestrictedSandboxAppliable](restrictedsandboxappliable.md) protocol takes an argument of this type.

## Topics

### Sandbox restriction revisions

- [RestrictedSandboxRevision.revision1](restrictedsandboxrevision/revision1.md): First revision of the restricted sandbox rules.
- [RestrictedSandboxRevision.revision2](restrictedsandboxrevision/revision2.md): Second revision of the restricted sandbox rules.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Access control

- [Limiting resource access in web content extensions](limiting-resource-access-in-content-extensions.md): Reduce the impact of vulnerabilities in web content extensions by limiting privileges.
- [Accessing files in browser extensions](accessing-files-in-browser-extensions.md): Grant extensions access to files from within your browser app.
- [Attributing memory to a content extension](attributing-memory-to-a-content-extension.md): Adhere to operating-system limits on GPU memory use.
- [RestrictedSandboxAppliable](restrictedsandboxappliable.md): A protocol that browser extensions implement to opt into a more restricted sandbox.
