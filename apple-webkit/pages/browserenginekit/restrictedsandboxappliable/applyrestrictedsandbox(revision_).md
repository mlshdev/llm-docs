> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/restrictedsandboxappliable/applyrestrictedsandbox(revision:)](https://developer.apple.com/documentation/browserenginekit/restrictedsandboxappliable/applyrestrictedsandbox(revision:))

# applyRestrictedSandbox(revision:)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Puts a browser extension into a more restricted sandbox.

## Declaration

```swift
func applyRestrictedSandbox(revision: RestrictedSandboxRevision)
```

## Parameters

- `revision`: The revision of the sandbox restriction rules to apply.

## Mentioned In

- [Limiting resource access in web content extensions](../limiting-resource-access-in-content-extensions.md)

## Default Implementations

### RestrictedSandboxAppliable Implementations

- [applyRestrictedSandbox(revision:)](applyrestrictedsandbox%28revision_%29-6kcga.md): When called, the process will enter a restrictive sandbox mode.
- [applyRestrictedSandbox(revision:)](applyrestrictedsandbox%28revision_%29-7e337.md): Conforms when `Self` conforms to `WebContentExtension`. When called, the process will enter a restrictive sandbox mode.

## See Also

### Applying sandbox restrictions

- [RestrictedSandboxRevision](../restrictedsandboxrevision.md): Revisions to the restricted sandbox rules.
